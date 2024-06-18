import { Button } from "@headlessui/react";
import {
	FiAlignLeft,
	FiBarChart2,
	FiCalendar,
	FiMap,
	FiMusic,
	FiPenTool,
	FiTable,
} from "react-icons/fi";

import { IconStyle, type PlaceIn, placeInStyle } from "@/utils/style";
import type { NoteView } from "@/types/views";

const IconSize = 30;

export const NewNote = ({
	placeIn,
	activateView,
}: { placeIn: PlaceIn; activateView: (view: NoteView) => void }) => (
	<div className={`${placeInStyle(placeIn)} flex flex-col-reverse`}>
		<Button onClick={() => activateView("note")}>
			<FiAlignLeft size={IconSize} className={`${IconStyle} m-4`} />
		</Button>
		<Button onClick={() => activateView("calendar")}>
			<FiCalendar size={IconSize} className={`${IconStyle} m-4`} />
		</Button>
		<Button onClick={() => activateView("table")}>
			<FiTable size={IconSize} className={`${IconStyle} m-4`} />
		</Button>
		<Button onClick={() => activateView("draw")}>
			<FiPenTool size={IconSize} className={`${IconStyle} m-4`} />
		</Button>
		<Button onClick={() => activateView("music")}>
			<FiMusic size={IconSize} className={`${IconStyle} m-4`} />
		</Button>
		<Button onClick={() => activateView("chart")}>
			<FiBarChart2 size={IconSize} className={`${IconStyle} m-4`} />
		</Button>
		<Button onClick={() => activateView("map")}>
			<FiMap size={IconSize} className={`${IconStyle} m-4`} />
		</Button>
	</div>
);
