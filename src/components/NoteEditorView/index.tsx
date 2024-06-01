import { type RefObject, useState } from "react";

import { Toolbar } from "./toolbar";
import { ContentArea } from "./contentarea";

export const Wysiwyg = () => {
	const [childRef, setChildRef] = useState<HTMLTextAreaElement | null>(null);

	const handleRef = (ref: RefObject<HTMLTextAreaElement>) => {
		setChildRef(ref.current);
	};

	return (
		<div className="m-3" id="content-editor">
			<Toolbar contentAreaRef={childRef} />
			<ContentArea refFromChild={handleRef} />
		</div>
	);
};
