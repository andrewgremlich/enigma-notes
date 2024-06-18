import type { RenderElementProps, RenderLeafProps } from "slate-react";

export const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
	return (
		<span
			{...attributes}
			className={`${leaf.bold ? "font-bold" : ""} ${
				leaf.italic ? "italic" : ""
			} ${leaf.underlined ? "underline" : ""} ${
				leaf.list ? "pl-4 text-xl leading-5" : ""
			} ${leaf.hr ? "block text-center border-b-2 border-gray-300" : ""} `}
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

export const HeadingElement = (props: RenderElementProps) => {
	if ("level" in props.element) {
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
			<p>Not a valid heading</p>
		);
	}
};
