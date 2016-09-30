import React from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { MegadraftEditor, editorStateFromRaw } from 'megadraft';
import { stateToMarkdown } from 'megadraft-js-export-markdown';

class CmsEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editorState: editorStateFromRaw(null),
      articleTitle: '',
    };

    // bindings
    this.onChange = ::this.onChange;
    this.handleInputChange = ::this.handleInputChange;
    this.publish = ::this.publish;
  }

  onChange(editorState) {
    this.setState({ editorState });
  }

  // for now we only console log the article
  publish() {
    const { editorState, articleTitle } = this.state;
    const markdown = stateToMarkdown(editorState.getCurrentContent());

    // save the article
    console.log(`${articleTitle} pubished`);
    console.log(`Content transformed to markdown: ${markdown}`);

    // clear the editor state
    this.setState({
      editorState: editorStateFromRaw(null),
      articleTitle: '',
    });
  }

  handleInputChange(event) {
    this.setState({ articleTitle: event.target.value });
  }

  render() {
    const { editorState } = this.state;
    const markdown = stateToMarkdown(editorState.getCurrentContent());
    console.log('Markdown \n', markdown);

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
        <button
          className={`button ${styles.button}`}
          onClick={this.publish}
        >
          {'Publish'}
        </button>
      </div>
    );
  }
}

export default cssModules(CmsEditor, styles);
