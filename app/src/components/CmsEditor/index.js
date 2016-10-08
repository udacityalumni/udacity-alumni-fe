import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { MegadraftEditor, editorStateFromRaw } from 'megadraft';
import { stateToMarkdown } from 'megadraft-js-export-markdown';
import { CmsToolbar } from 'components';

class CmsEditor extends React.Component {

  constructor(props) {
    super(props);
    // Would be great to move this into redux up to the container.
    this.state = {
      editorState: editorStateFromRaw(null),
      articleTitle: '',
      status: 0,
      spotlighted: false,
    };

    // bindings
    this.onChange = ::this.onChange;
    this.handleInputChange = ::this.handleInputChange;
    this.publish = ::this.publish;
    this.setSpotlightToggle = ::this.setSpotlightToggle;
    this.setStatus = ::this.setStatus;
  }

  onChange(editorState) {
    this.setState({ editorState });
  }

  setSpotlightToggle() {
    this.setState({
      spotlighted: !this.state.spotlighted,
    });
  }

  setStatus(option) {
    this.setState({
      status: option.value,
    });
  }

  handleInputChange(event) {
    this.setState({ articleTitle: event.target.value });
  }

  publish() {
    const {
      editorState,
      articleTitle,
      spotlighted,
      status,
    } = this.state;
    const markdown = stateToMarkdown(editorState.getCurrentContent());
    const { onSubmit } = this.props;
    // save the article
    onSubmit({ title: articleTitle, content: markdown, spotlighted, status });
    // clear the editor state
    this.setState({
      editorState: editorStateFromRaw(null),
      articleTitle: '',
      spotlighted: false,
      status: 0,
    });
  }

  render() {
    const { editorState, articleTitle, spotlighted, status } = this.state;
    const markdown = stateToMarkdown(editorState.getCurrentContent());
    const isValid = articleTitle !== null && articleTitle.length > 0 &&
                      markdown !== null && markdown.length > 0;
    return (
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            ref="titleInput"
            type="titleInput"
            value={this.state.articleTitle}
            onChange={this.handleInputChange}
            placeholder="Title"
          />
        </div>
        <MegadraftEditor
          editorState={this.state.editorState}
          onChange={this.onChange}
          placeholder="Tell a story ..."
        />
        <CmsToolbar
          canSubmit={isValid}
          spotlighted={spotlighted}
          onToggleSpotlight={this.setSpotlightToggle}
          onSetStatus={this.setStatus}
          status={status}
          onSave={this.publish}
        />
      </div>
    );
  }
}

CmsEditor.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default cssModules(CmsEditor, styles);
