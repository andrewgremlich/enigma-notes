import {
	Button,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from "@headlessui/react";
import {
	FiAlignLeft,
	FiBarChart2,
	FiCalendar,
	FiMap,
	FiMusic,
	FiPenTool,
	FiTable,
} from "react-icons/fi";
import { FaPencilAlt } from "react-icons/fa";
import { IconStyle, type PlaceIn, placeInStyle } from "@/utils/style";
import type { NoteView } from "@/types/views";
import { cloneElement } from "react";

const NewNoteMenuItem = ({
	activateView,
	activeNote,
	label,
	iconComponent,
}: {
	activateView: (view: NoteView) => void;
	activeNote: string;
	label: NoteView;
	iconComponent: JSX.Element;
}) => {
	const clonedComponent = cloneElement(iconComponent, {
		size: 30,
		className: `${IconStyle} m-4`,
	});

	return (
		<>
			{activeNote !== label && (
				<MenuItem>
					<Button onClick={() => activateView(label)}>{clonedComponent}</Button>
				</MenuItem>
			)}
		</>
	);
};

const MenuItemsData: { label: NoteView; iconComponent: JSX.Element }[] = [
	{
		label: "note",
		iconComponent: <FiAlignLeft />,
	},
	{
		label: "calendar",
		iconComponent: <FiCalendar />,
	},
	{
		label: "table",
		iconComponent: <FiTable />,
	},
	{
		label: "draw",
		iconComponent: <FiPenTool />,
	},
	{
		label: "music",
		iconComponent: <FiMusic />,
	},
	{
		label: "chart",
		iconComponent: <FiBarChart2 />,
	},
	{
		label: "map",
		iconComponent: <FiMap />,
	},
];

export const NewNote = ({
	placeIn,
	activateView,
	activeNote,
}: {
	placeIn: PlaceIn;
	activateView: (view: NoteView) => void;
	activeNote: NoteView;
}) => (
	<div className={`${placeInStyle(placeIn)} flex flex-col-reverse`}>
		<Menu>
			<MenuButton>
				<FaPencilAlt size={30} />
			</MenuButton>
			<MenuItems anchor="bottom">
				{MenuItemsData.map((item) => (
					<NewNoteMenuItem
						key={crypto.randomUUID()}
						activateView={activateView}
						activeNote={activeNote}
						label={item.label}
						iconComponent={item.iconComponent}
					/>
				))}
			</MenuItems>
		</Menu>
	</div>
);
