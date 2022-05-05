// @ts-ignore
import Codebox from '@bomdi/codebox';
// @ts-ignore
import Delimiter from '@editorjs/delimiter';
// @ts-ignore
import Embed from '@editorjs/embed';
// @ts-ignore
import Header from '@editorjs/header';
// @ts-ignore
import InlineCode from '@editorjs/inline-code';
// @ts-ignore
import List from '@editorjs/list';
// @ts-ignore
import Marker from '@editorjs/marker';
// @ts-ignore
import Quote from '@editorjs/quote';
// @ts-ignore
import Raw from '@editorjs/raw';
// @ts-ignore
import Table from '@editorjs/table';
// @ts-ignore
import Underline from '@editorjs/underline';
// @ts-ignore
import Warning from '@editorjs/warning';
// @ts-ignore
import Paragraph from 'editorjs-paragraph-with-alignment';
// @ts-ignore
import Strikethrough from 'editorjs-strikethrough';
// @ts-ignore
import AlignmentTuneTool from 'editorjs-text-alignment-blocktune';
import ImageWithoutUrlPaste from "../../Components/Common/Editor/ImageWithoutUrlPaste";

export const EDITOR_JS_TOOLS = {
  underline: Underline,
  strikethrough: Strikethrough,
  embed: {
    class: Embed,
    inlineToolbar: true,
  },
  table: {
    class: Table,
    inlineToolbar: true,
  },
  list: {
    class: List,
    // tunes: ['alignmentTune'],
    inlineToolbar: true,
  },
  marker: Marker,
  warning: {
    class: Warning,
    inlineToolbar: true,
  },
  // linkTool: LinkTool,
  image: {
    class: ImageWithoutUrlPaste,
  },
  header: {
    class: Header,
    tunes: ['alignmentTune'],
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
  },
  // checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  codeBox: Codebox,
  raw: Raw,
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  alignmentTune: {
    class: AlignmentTuneTool,
    config: {
      default: 'left',
    },
  },
};
