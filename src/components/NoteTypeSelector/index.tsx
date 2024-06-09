import {
	FiAlignLeft,
	FiBarChart2,
	FiCalendar,
	FiMap,
	FiMusic,
	FiPenTool,
	FiTable,
	FiPlusCircle,
} from "react-icons/fi";
import {
	Popover,
	PopoverButton,
	PopoverPanel,
	Transition,
} from "@headlessui/react";

import { IconStyle } from "@/utils/style";

const IconSize = 30;

export const NoteTypeSelector = () => {
	return (
		<div className="relative z-50">
			<Popover>
				<PopoverButton>
					<FiPlusCircle size={IconSize} />
				</PopoverButton>

				<Transition
					enter="transition ease-out duration-200"
					enterFrom="opacity-0 translate-y-1"
					enterTo="opacity-100 translate-y-0"
					leave="transition ease-in duration-150"
					leaveFrom="opacity-100 translate-y-0"
					leaveTo="opacity-0 translate-y-1"
				>
					<PopoverPanel anchor="top">
						<FiAlignLeft size={IconSize} className={`${IconStyle} mb-4`} />
						<FiCalendar size={IconSize} className={`${IconStyle} mb-4`} />
						<FiTable size={IconSize} className={`${IconStyle} mb-4`} />
						<FiPenTool size={IconSize} className={`${IconStyle} mb-4`} />
						<FiMusic size={IconSize} className={`${IconStyle} mb-4`} />
						<FiBarChart2 size={IconSize} className={`${IconStyle} mb-4`} />
						<FiMap size={IconSize} className={`${IconStyle} mb-4`} />
					</PopoverPanel>
				</Transition>
			</Popover>
		</div>
	);
};
