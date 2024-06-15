import type { RenderLeafProps, RenderElementProps } from "slate-react";

export const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
	return (
		<span
			{...attributes}
			className={`${leaf.bold ? "font-bold" : ""} ${
				leaf.italic ? "italic" : ""
			} ${leaf.underlined ? "underline" : ""} ${
				leaf.title ? "block font-bold text-2xl my-5" : ""
			} ${leaf.list ? "pl-4 text-xl leading-5" : ""} ${
				leaf.hr ? "block text-center border-b-2 border-gray-300" : ""
			} ${
				leaf.blockquote
					? "inline-block border-l-2 pl-4 text-gray-500 italic"
					: ""
			} ${leaf.code ? "font-mono bg-gray-200 px-2" : ""}`}
		>
			{children}
		</span>
	);
};

export const CodeElement = (props: RenderElementProps) => {
	return (
		<pre {...props.attributes}>
			<code>{props.children}</code>
		</pre>
	);
};

export const DefaultElement = (props: RenderElementProps) => {
	return <p {...props.attributes}>{props.children}</p>;
};
