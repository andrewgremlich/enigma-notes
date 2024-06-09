import "./ckeditor-styles.css";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import sanitizeHtml from "sanitize-html";

export const Wysiwyg = () => {
	const [editor, setEditor] = useState<ClassicEditor>();

	const getData = () => {
		const data = editor?.getData();
		const sanitized = sanitizeHtml(data ?? "", {
			allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
			allowedAttributes: {
				a: ["href", "name", "target"],
				img: ["src", "srcset", "alt", "title", "width", "height", "loading"],
			},
			selfClosing: [
				"img",
				"br",
				"hr",
				"area",
				"base",
				"basefont",
				"input",
				"link",
				"meta",
			],
		});
		console.log(sanitizeHtml(sanitized));
	};

	return (
		<div
			className="m-3 w-full ck-content overflow-x-hidden max-w-prose"
			id="content-editor"
		>
			<CKEditor
				editor={ClassicEditor}
				data="<p>Hello from CKEditor&nbsp;5!</p>"
				onReady={(editor) => {
					// You can store the "editor" and use when it is needed.
					console.log("Editor is ready to use!", editor);
					setEditor(editor);
				}}
				onChange={(event, editor) => {
					console.log(event);
					const data = editor.getData();
					console.log({ event, editor, data });
				}}
				onBlur={(event, editor) => {
					console.log("Blur.", editor);
				}}
				onFocus={(event, editor) => {
					console.log("Focus.", editor);
				}}
			/>
		</div>
	);
};
