import { type RefObject, createRef, useEffect } from "react";
import { Textarea } from "@headlessui/react";

interface ContentAreaProps {
	refFromChild: (ref: RefObject<HTMLTextAreaElement>) => void;
}

export const ContentArea = (props: ContentAreaProps) => {
	const ref = createRef<HTMLTextAreaElement>();

	useEffect(() => {
		props.refFromChild(ref);
	}, [props.refFromChild, ref]);

	return (
		<div id="content-area">
			<Textarea
				ref={ref}
				className=" bg-inherit text-white border-2 border-slate-600"
			/>
		</div>
	);
};
