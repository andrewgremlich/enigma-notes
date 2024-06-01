import { FiBold, FiItalic, FiUnderline } from "react-icons/fi";
import { AiOutlineStrikethrough } from "react-icons/ai";
import { Button } from "@headlessui/react";
import { TextareaSelectionBounds } from "textarea-selection-bounds";

enum EditorAction {
	Bold = "bold",
	Italic = "italic",
	Underline = "underline",
	StrikeThrough = "strikeThrough",
}

interface ToolbarProps {
	contentAreaRef: HTMLTextAreaElement | null;
}

export const Toolbar = (props: ToolbarProps) => {
	const handleToolbarClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (props.contentAreaRef) {
			const bounds = new TextareaSelectionBounds(props.contentAreaRef);
			console.log(bounds.getBounds());
		}

		// console.log("clicked", e.currentTarget.dataset.action);
		// console.log(window.getSelection());
		// const action = e.currentTarget.dataset.action as EditorAction;
	};
	return (
		<div id="toolbar" className="border-b-2 border-cyan-300">
			<div id="box">
				<Button onClick={handleToolbarClick} data-action={EditorAction.Bold}>
					<FiBold size={20} />
				</Button>
				<Button onClick={handleToolbarClick} data-action={EditorAction.Italic}>
					<FiItalic size={20} />
				</Button>
				<Button
					onClick={handleToolbarClick}
					data-action={EditorAction.Underline}
				>
					<FiUnderline size={20} />
				</Button>
				<Button
					onClick={handleToolbarClick}
					data-action={EditorAction.StrikeThrough}
				>
					<AiOutlineStrikethrough size={20} />
				</Button>
			</div>
		</div>
	);
};
