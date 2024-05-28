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
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const IconSize = 30;

export const NoteTypeSelector = () => {
	return (
		<div className="flex">
			<Popover>
				<PopoverButton>
					<FiPlusCircle size={IconSize} />
				</PopoverButton>
				<PopoverPanel anchor="top">
					<FiAlignLeft size={IconSize} />
					<FiCalendar size={IconSize} />
					<FiTable size={IconSize} />
					<FiPenTool size={IconSize} />
					<FiMusic size={IconSize} />
					<FiBarChart2 size={IconSize} />
					<FiMap size={IconSize} />
				</PopoverPanel>
			</Popover>
		</div>
	);
};
