import "./ckeditor-styles.css";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export const Wysiwyg = () => {
	return (
		<div
			className="m-3 w-full ck-content overflow-x-hidden"
			id="content-editor"
		>
			<CKEditor
				editor={ClassicEditor}
				data="<p>Hello from CKEditor&nbsp;5!</p>"
				onReady={(editor) => {
					// You can store the "editor" and use when it is needed.
					console.log("Editor is ready to use!", editor);
				}}
				onChange={(event) => {
					console.log(event);
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
