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

const IconSize = 30;
const IconStyle =
	"text-slate-600 hover:text-blue-700 transition-colors duration-200 ease-in-out cursor-pointer mb-4";

type PlaceIn = "bottom-right" | "bottom-left" | "top-right" | "top-left";

const placeInStyle = (placeIn: string) => `
${placeIn === "bottom-right" ? "absolute bottom-2 right-2" : ""}
${placeIn === "bottom-left" ? "absolute bottom-2 left-2" : ""}
${placeIn === "top-right" ? "absolute top-2 right-2" : ""}
${placeIn === "top-left" ? "absolute top-2 left-2" : ""}
`;

export const NoteTypeSelector = ({ placeIn }: { placeIn: PlaceIn }) => {
	return (
		<div className={`${placeInStyle(placeIn)}`}>
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
						<FiAlignLeft size={IconSize} className={IconStyle} />
						<FiCalendar size={IconSize} className={IconStyle} />
						<FiTable size={IconSize} className={IconStyle} />
						<FiPenTool size={IconSize} className={IconStyle} />
						<FiMusic size={IconSize} className={IconStyle} />
						<FiBarChart2 size={IconSize} className={IconStyle} />
						<FiMap size={IconSize} className={IconStyle} />
					</PopoverPanel>
				</Transition>
			</Popover>
		</div>
	);
};
