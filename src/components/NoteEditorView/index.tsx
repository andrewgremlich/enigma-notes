import { FiAlignLeft, FiDatabase } from "react-icons/fi";

import { defaultNoteStyle } from "@/utils/style";

import { TagNote } from "../NoteParts/TagNote";
import { Wysiwyg } from "../NoteParts/Wysiwyg";
import { Button } from "@headlessui/react";

export const NoteEditorView = () => {
	return (
		<div className={defaultNoteStyle}>
			<FiAlignLeft size={40} className="mb-5" />
			<Wysiwyg className="min-h-96" />
			<TagNote />
			<Button onClick={() => console.log("openmetadata")}>
				<FiDatabase size={40} className="mt-5" />
			</Button>
		</div>
	);
};
