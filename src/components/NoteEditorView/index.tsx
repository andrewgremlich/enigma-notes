import { Button } from "@headlessui/react";
import { useReducer } from "react";
import { FiAlignLeft, FiDatabase } from "react-icons/fi";
import type { Tag } from "react-tag-autocomplete";

import { defaultNoteStyle } from "@/utils/style";

import { TagNote } from "../NoteParts/TagNote";
import { Wysiwyg } from "../NoteParts/Wysiwyg";

type NoteEditorViewState = {
	note: string;
	tags: Tag[];
	metadata: {
		created: number;
		modified: number;
	};
	error?: string;
};

type NoteEditorViewAction =
	| { type: "UPDATE_NOTE"; payload: string }
	| { type: "UPDATE_TAGS"; payload: Tag }
	| { type: "REMOVE_TAG"; payload: Tag };

const noteEditorViewReducer = (
	state: NoteEditorViewState,
	action: NoteEditorViewAction,
): NoteEditorViewState => {
	const { type } = action;

	switch (type) {
		case "UPDATE_NOTE":
			return { ...state, note: action.payload };
		case "UPDATE_TAGS":
			return { ...state, tags: [...state.tags, action.payload] };
		// TODO: make tags part of a set?
		case "REMOVE_TAG":
			return {
				...state,
				tags: state.tags.filter((tag) => tag.value !== action.payload.value),
			};
		default:
			return state;
	}
};

const defaultState: NoteEditorViewState = {
	note: "",
	tags: [{ value: "tag", label: "tag" }],
	metadata: {
		created: new Date().getTime(),
		modified: new Date().getTime(),
	},
};

export const NoteEditorView = () => {
	const [state, dispatch] = useReducer(noteEditorViewReducer, defaultState);

	console.log(state);

	return (
		<div className={defaultNoteStyle}>
			<FiAlignLeft size={40} className="mb-5" />
			<Wysiwyg
				className="min-h-96"
				updateNote={(note) => dispatch({ type: "UPDATE_NOTE", payload: note })}
			/>
			<TagNote
				updateTags={(tags) => dispatch({ type: "UPDATE_TAGS", payload: tags })}
				removeTag={(tag) => dispatch({ type: "REMOVE_TAG", payload: tag })}
				tags={state.tags}
			/>
			<Button onClick={() => console.log("openmetadata")}>
				<FiDatabase size={40} className="mt-5" />
			</Button>
		</div>
	);
};
