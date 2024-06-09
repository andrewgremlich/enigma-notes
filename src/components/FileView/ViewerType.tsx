import { FiEye, FiCalendar, FiFile } from "react-icons/fi";
import {
	Popover,
	PopoverButton,
	PopoverPanel,
	Transition,
} from "@headlessui/react";

import { IconStyle } from "@/utils/style";

import type { FileViewType } from "./index";

type ViewerTypeProps = {
	setView: (view: FileViewType) => void;
};

export const ViewerType = ({ setView }: ViewerTypeProps) => {
	return (
		<Popover>
			<PopoverButton
				aria-label="View Type Selector"
				className="text-white flex items-center hover:bg-emerald-950 px-4 py-2 rounded-md transition-colors duration-200 ease-in-out"
			>
				<FiEye size={30} className={`${IconStyle} mr-2`} /> View selector
			</PopoverButton>

			<Transition
				enter="transition ease-out duration-200"
				enterFrom="opacity-0 translate-y-1"
				enterTo="opacity-100 translate-y-0"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100 translate-y-0"
				leaveTo="opacity-0 translate-y-1"
			>
				<PopoverPanel anchor="top" className="bg-emerald-950 p-4">
					<FiCalendar
						size={30}
						className={`${IconStyle} mb-2`}
						aria-label="Calendar View"
						onClick={() => setView("calendar")}
					/>
					<FiFile
						size={30}
						className={`${IconStyle}`}
						aria-label="File Explorer View"
						onClick={() => setView("file-explorer")}
					/>
				</PopoverPanel>
			</Transition>
		</Popover>
	);
};
