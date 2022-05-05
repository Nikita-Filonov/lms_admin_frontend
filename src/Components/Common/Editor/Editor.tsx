import {FC, MutableRefObject, useCallback, useRef} from 'react';
import {createReactEditorJS} from 'react-editor-js';
import {OutputData} from '@editorjs/editorjs/types/data-formats/output-data';
import {EditorCore} from '@react-editor-js/client/dist/core/src/editor-core';
import styles from './Editor.module.scss';
import {EDITOR_JS_TOOLS} from "../../../Utils/Constants/Editor";

const ReactEditorJS = createReactEditorJS();

type EditorProps = {
  autofocus: boolean
  editorData: any
  resourceId?: string | null
  onChange: (data: OutputData) => void
}

export const Editor: FC<EditorProps> = ({autofocus, editorData, onChange}) => {
  const editorCore: MutableRefObject<null | EditorCore> = useRef<EditorCore>(null)

  const handleInitialize = useCallback((instance: EditorCore) => {
    editorCore.current = instance
  }, []);

  const handleSave = useCallback(async () => {
    if (!editorCore?.current) return
    const savedData = await editorCore.current.save()
    onChange(savedData)
  }, [onChange]);

  const imageOptions = {
    config: {
      uploader: {
        uploadByFile(file: any) {
          console.log(file)
        },
      },
    },
  };
  const editorTools = {
    ...EDITOR_JS_TOOLS,
    image: {...EDITOR_JS_TOOLS.image, ...imageOptions},
  };

  return (
    <div className={styles.editor}>
      <ReactEditorJS
        onInitialize={handleInitialize}
        tools={editorTools}
        inlineToolbar={true} // ['bold', 'italic', 'underline', 'strikethrough', 'link', 'marker', 'math']
        defaultValue={editorData}
        autofocus={autofocus}
        onChange={handleSave}
      />
    </div>
  )
}
