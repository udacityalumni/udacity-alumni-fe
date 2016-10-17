import React, { PropTypes, Component } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { MegadraftEditor, editorStateFromRaw } from 'megadraft';
import { CmsToolbar } from 'components';

class CmsEditor extends Component {
  render() {
    const {
      editorState,
      editorTitle,
      isValid,
      onChangeTitle,
      onSubmit,
      onChangeContent,
    } = this.props;
    const stateForEditor = editorState ? editorState : editorStateFromRaw(null);
    return (
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            ref="titleInput"
            type="titleInput"
            value={editorTitle}
            onChange={onChangeTitle}
            placeholder="Title"
          />
        </div>
        <MegadraftEditor
          editorState={stateForEditor}
          onChange={(state) => onChangeContent(state)}
          placeholder="Tell a story ..."
        />
        <CmsToolbar
          canSubmit={isValid}
          onSave={onSubmit}
        />
      </div>
    );
  }
}

CmsEditor.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChangeTitle: PropTypes.func.isRequired,
  onChangeContent: PropTypes.func.isRequired,
  editorTitle: PropTypes.string,
  editorState: PropTypes.object,
  isValid: PropTypes.bool.isRequired,
};

export default cssModules(CmsEditor, styles);
