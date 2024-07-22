import { TransitionChild } from "@headlessui/react";

export const Shade = () => {
	return (
		<TransitionChild
			enter="ease-in-out duration-500"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="ease-in-out duration-500"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<div className="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity" />
		</TransitionChild>
	);
};
