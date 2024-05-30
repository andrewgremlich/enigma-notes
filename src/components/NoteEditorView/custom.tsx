import { useState } from "react";
import { Input } from "@headlessui/react";
import { parse } from "marked";
import { useDebounce } from "use-debounce";

export const Wysiwyg = () => {
	const [markdownOutput, setMarkdownOutput] = useState("# hello world");
	const [value] = useDebounce(markdownOutput, 1000);

	return (
		<div className="w-full">
			<div
				id="output"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: It's all user controlled.
				dangerouslySetInnerHTML={{ __html: parse(value) }}
			/>
			<Input
				className="w-full bg-inherit text-white"
				onChange={(e) => setMarkdownOutput(e.target.value)}
			/>
		</div>
	);
};
