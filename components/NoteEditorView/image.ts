import { Transforms } from "slate";
import isUrl from "is-url";
import isImage from "is-image";

import type { CustomEditor, ImageElement } from "../NoteParts/Wysiwyg/wysiwyg-types";

const isImageUrl = (url: string) => {
  if (!url) return false;

  if (!isUrl(url)) return false;

  const ext = new URL(url).pathname.split(".").pop();

  return isImage(ext ?? "");
};

const insertImage = (editor: CustomEditor, url: string) => {
  const text = { text: "" };
  const image: ImageElement = { type: "image", url, children: [text] };
  Transforms.insertNodes(editor, image);
  Transforms.insertNodes(editor, {
    type: "paragraph",
    children: [{ text: "" }],
  });
};

const withImages = (editor: CustomEditor) => {
  const { insertData, isVoid } = editor;

  editor.isVoid = (element) => {
    return element.type === "image" ? true : isVoid(element);
  };

  editor.insertData = (data) => {
    const text = data.getData("text/plain");
    const { files } = data;

    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader();
        const [mime] = file.type.split("/");

        if (mime === "image") {
          reader.addEventListener("load", () => {
            const url = reader.result;

            if (typeof url === "string") insertImage(editor, url);
          });

          reader.readAsDataURL(file);
        }
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};
