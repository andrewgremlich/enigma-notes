import Document from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from "react";

export const NoteView = () => {
	return (
		<div className="h-full w-full overflow-scroll">
			<CKEditor
				editor={Document}
				data="<p>Hello from CKEditor 5!</p>"
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
