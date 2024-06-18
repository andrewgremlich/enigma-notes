// Import the `Node` helper interface from Slate.
import { type Descendant, Node } from "slate";

// Define a serializing function that takes a value and returns a string.
export const serialize = (value: Descendant[]) => {
	return (
		value
			// Return the string content of each paragraph in the value's children.
			.map((n) => Node.string(n))
			// Join them all with line breaks denoting paragraphs.
			.join("\n")
	);
};

// Define a deserializing function that takes a string and returns a value.
export const deserialize = (string: string) => {
	// Return a value array of children derived by splitting the string.
	return string.split("\n").map((line) => {
		return {
			children: [{ text: line }],
		};
	});
};

export const getFromStorage = (): Descendant[] => {
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
};
