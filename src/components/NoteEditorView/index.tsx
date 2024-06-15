import { useCallback, useMemo, useRef, useState } from "react";
import sanitizeHtml from "sanitize-html";
import { createEditor } from "slate";
import { Slate, Editable, withReact, ReactEditor } from "slate-react";

import { Leaf, CodeElement, DefaultElement } from "./wysiwyg-elements";
import { CustomEditor } from "./custom-editor";

export const Wysiwyg = () => {
	const [editor] = useState(() => withReact(createEditor()));
	const editableRef = useRef<HTMLDivElement | null>(null);

	// const getData = () => {
	// 	const data = editor?.getData();
	// 	const sanitized = sanitizeHtml(data ?? "", {
	// 		allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
	// 		allowedAttributes: {
	// 			a: ["href", "name", "target"],
	// 			img: ["src", "srcset", "alt", "title", "width", "height", "loading"],
	// 		},
	// 		selfClosing: [
	// 			"img",
	// 			"br",
	// 			"hr",
	// 			"area",
	// 			"base",
	// 			"basefont",
	// 			"input",
	// 			"link",
	// 			"meta",
	// 		],
	// 	});
	// 	console.log(sanitizeHtml(sanitized));
	// };

	const renderElement = useCallback((props) => {
		switch (props.element.type) {
			case "code":
				return <CodeElement {...props} />;
			default:
				return <DefaultElement {...props} />;
		}
	}, []);

	const renderLeaf = useCallback((props) => {
		return <Leaf {...props} />;
	}, []);

	const initialValue = useMemo(() => {
		try {
			const fetchedValue = localStorage.getItem("content");

			if (!fetchedValue) {
				return [
					{
						type: "paragraph",
						children: [{ text: "" }],
					},
				];
			}

			return JSON.parse(fetchedValue);
		} catch (error) {
			console.error(error);
			return [
				{
					type: "paragraph",
					children: [{ text: "" }],
				},
			];
		}
	}, []);

	return (
		<div
			className="border-2 border-cyan-400 max-w-prose w-full"
			onClick={() => ReactEditor.focus(editor)}
			onKeyDown={() => ReactEditor.focus(editor)}
		>
			<Slate
				editor={editor}
				initialValue={initialValue}
				onChange={(value) => {
					console.log(value);
					const isAstChange = editor.operations.some(
						(op) => "set_selection" !== op.type,
					);
					if (isAstChange) {
						// Save the value to Local Storage.
						localStorage.setItem("content", JSON.stringify(value));
						// localStorage.setItem("content", serialize(value));
					}
				}}
			>
				<Editable
					// Pass in the `renderElement` function.
					renderElement={renderElement}
					renderLeaf={renderLeaf}
					onKeyDown={(event) => {
						if (!event.ctrlKey) {
							return;
						}

						switch (event.key) {
							case "`": {
								event.preventDefault();
								CustomEditor.toggleCodeBlock(editor);
								break;
							}

							case "b": {
								event.preventDefault();
								CustomEditor.toggleBoldMark(editor);
								break;
							}
						}
					}}
				/>
			</Slate>
		</div>
	);
};
