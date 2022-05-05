import Codebox from '@bomdi/codebox';
import Delimiter from '@editorjs/delimiter';
import Embed from '@editorjs/embed';
import Header from '@editorjs/header';
import InlineCode from '@editorjs/inline-code';
import List from '@editorjs/list';
import Marker from '@editorjs/marker';
import Quote from '@editorjs/quote';
import Raw from '@editorjs/raw';
import Table from '@editorjs/table';
import Underline from '@editorjs/underline';
import Warning from '@editorjs/warning';
import Paragraph from 'editorjs-paragraph-with-alignment';
import Strikethrough from 'editorjs-strikethrough';
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
