import { useCallback, useMemo, useState } from "react";
import { createEditor } from "slate";
import {
	Slate,
	Editable,
	withReact,
	ReactEditor,
	type RenderElementProps,
	type RenderLeafProps,
} from "slate-react";

import { Leaf, CodeElement, DefaultElement } from "./wysiwyg-elements";
import { getFromStorage } from "./serializer";
import { KeyboardShortcuts, TextShortcuts } from "./keyboard-events";

export const Wysiwyg = () => {
	const [editor] = useState(() => withReact(createEditor()));

	const renderElement = useCallback((props: RenderElementProps) => {
		switch (props.element.type) {
			case "code":
				return <CodeElement {...props} />;
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
			className="border-2 border-cyan-400 max-w-prose w-full"
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
					onKeyDown={(event) => {
						TextShortcuts(event.key, editor);

						if (!event.ctrlKey) {
							return;
						}

						event.preventDefault();
						KeyboardShortcuts(event.key, editor);
					}}
				/>
			</Slate>
		</div>
	);
};
