import {
	Popover,
	PopoverButton,
	PopoverPanel,
	Transition,
} from "@headlessui/react";
import { FiCalendar, FiEye, FiFile } from "react-icons/fi";

import { IconStyle } from "@/utils/style";

import type { AccountNotesViewType } from "./index";

type ViewerTypeProps = {
	setView: (view: AccountNotesViewType) => void;
	view: AccountNotesViewType;
};

export const ViewerType = ({ setView, view }: ViewerTypeProps) => {
	return (
		<Popover>
			<PopoverButton
				aria-label="View Type Selector"
				className="text:black dark:text-white flex items-center hover:bg-emerald-400 dark:hover:bg-emerald-800 px-4 py-2 rounded-md transition-colors duration-200 ease-in-out"
			>
				<FiEye size={30} className={`${IconStyle}`} />
			</PopoverButton>

			<Transition
				enter="transition ease-out duration-200"
				enterFrom="opacity-0 translate-y-1"
				enterTo="opacity-100 translate-y-0"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100 translate-y-0"
				leaveTo="opacity-0 translate-y-1"
			>
				<PopoverPanel
					anchor="top"
					className="bg-emerald-400 dark:bg-emerald-800 p-4 shadow-lg rounded-md mt-3"
				>
					<FiCalendar
						size={30}
						className={`${IconStyle} mb-2 ${
							view === "calendar"
								? "text-cyan-800 dark:text-cyan-200"
								: "text-white dark:text-slate-200"
						}`}
						aria-label="Calendar View"
						onClick={() => setView("calendar")}
					/>
					<FiFile
						size={30}
						className={`${IconStyle} ${
							view === "file-explorer"
								? "text-cyan-800 dark:text-cyan-200"
								: "text-white dark:text-slate-200"
						}`}
						aria-label="File Explorer View"
						onClick={() => setView("file-explorer")}
					/>
				</PopoverPanel>
			</Transition>
		</Popover>
	);
};
