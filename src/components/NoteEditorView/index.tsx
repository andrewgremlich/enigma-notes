import { useCallback, useMemo, useState } from "react";
import { createEditor } from "slate";
import {
	Editable,
	ReactEditor,
	type RenderElementProps,
	type RenderLeafProps,
	Slate,
	withReact,
} from "slate-react";

import { KeyboardShortcuts } from "./keyboard-events";
import { getFromStorage } from "./serializer";
import { NodeEditorViewStyle } from "./style";
import { CodeElement, DefaultElement, Leaf } from "./wysiwyg-elements";

export const Wysiwyg = () => {
	const [editor] = useState(() => withReact(createEditor()));

	const renderElement = useCallback((props: RenderElementProps) => {
		switch (props.element.type) {
			case "heading": {
				const { level } = props.element;
				return level === 1 ? (
					<h1 {...props.attributes}>{props.children}</h1>
				) : level === 2 ? (
					<h2 {...props.attributes}>{props.children}</h2>
				) : level === 3 ? (
					<h3 {...props.attributes}>{props.children}</h3>
				) : level === 4 ? (
					<h4 {...props.attributes}>{props.children}</h4>
				) : level === 5 ? (
					<h5 {...props.attributes}>{props.children}</h5>
				) : level === 6 ? (
					<h6 {...props.attributes}>{props.children}</h6>
				) : (
					<p>Hello world</p>
				);
			}
			case "code":
				return <CodeElement {...props} />;
			case "blockquote":
				return <blockquote {...props.attributes}>{props.children}</blockquote>;
			default:
				return <DefaultElement {...props} />;
		}
	}, []);

	const renderLeaf = useCallback((props: RenderLeafProps) => {
		return <Leaf {...props} />;
	}, []);

	const initialValue = useMemo(getFromStorage, []);

	// https://www.slatejs.org/examples/markdown-preview
	// https://github.com/ianstormtaylor/slate/blob/main/site/examples/markdown-shortcuts.tsx

	return (
		<div
			className={NodeEditorViewStyle}
			onClick={() => ReactEditor.focus(editor)}
			onKeyDown={() => ReactEditor.focus(editor)}
		>
			<Slate
				editor={editor}
				initialValue={initialValue}
				onChange={(value) => {
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
					onKeyDown={KeyboardShortcuts(editor)}
				/>
			</Slate>
		</div>
	);
};
