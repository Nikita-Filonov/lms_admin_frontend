import Image from '@editorjs/image';

export default class ImageWithoutUrlPaste extends Image {
  static get pasteConfig() {
    return {
      /**
       * Paste HTML into Editor
       */
      tags: ['img'],
      /**
       * Paste URL of image into the Editor
       */
      patterns: {
        //image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i, // DISABLE URL PASTING BECAUSE OF COPYRIGHT RESTRICTIONS
      },
      /**
       * Drag n drop file from into the Editor
       */
      files: {
        mimeTypes: ['image/*'],
      },
    }
  }
}
