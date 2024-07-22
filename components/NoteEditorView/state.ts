import type { Tag } from "react-tag-autocomplete";

export type NoteEditorViewState = {
  note: string;
  tags: Tag[];
  metadata: {
    created: number;
    modified: number;
  };
  error?: string;
};

export type NoteEditorViewAction =
  | { type: "UPDATE_NOTE"; payload: string }
  | { type: "UPDATE_TAGS"; payload: Tag }
  | { type: "REMOVE_TAG"; payload: Tag };

export const noteEditorViewReducer = (
  state: NoteEditorViewState,
  action: NoteEditorViewAction
): NoteEditorViewState => {
  const { type } = action;

  switch (type) {
    case "UPDATE_NOTE":
      return { ...state, note: action.payload };
    case "UPDATE_TAGS":
      return { ...state, tags: [...state.tags, action.payload] };
    // TODO: make tags part of a Set?
    case "REMOVE_TAG":
      return {
        ...state,
        tags: state.tags.filter((tag) => tag.value !== action.payload.value),
      };
    default:
      return state;
  }
};

export const defaultState: NoteEditorViewState = {
  note: "",
  tags: [{ value: "tag", label: "tag" }],
  metadata: {
    created: new Date().getTime(),
    modified: new Date().getTime(),
  },
};
