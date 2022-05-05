import {OutputData} from "@editorjs/editorjs";

export const emptyEditor = (): OutputData => ({time: new Date().getTime(), blocks: [], version: '2.24.2'});

export const saveHtmlEditorContent = (): string | undefined => {
  const html = document.getElementById('articleContent');
  return html?.innerHTML?.toString() || '';
};
