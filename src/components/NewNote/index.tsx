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
const IconSize = 30;
export const NewNote = ({
	placeIn,
	activateView,
}: { placeIn: PlaceIn; activateView: (view: NoteView) => void }) => (
	<div className={`${placeInStyle(placeIn)} flex flex-col-reverse`}>
		<Menu>
			<MenuButton>
				<FaPencilAlt size={IconSize} />
			</MenuButton>
			<MenuItems anchor="bottom">
				<MenuItem>
					<Button onClick={() => activateView("note")}>
						<FiAlignLeft size={IconSize} className={`${IconStyle} m-4`} />
					</Button>
				</MenuItem>
				<MenuItem>
					<Button onClick={() => activateView("calendar")}>
						<FiCalendar size={IconSize} className={`${IconStyle} m-4`} />
					</Button>
				</MenuItem>
				<MenuItem>
					<Button onClick={() => activateView("table")}>
						<FiTable size={IconSize} className={`${IconStyle} m-4`} />
					</Button>
				</MenuItem>
				<MenuItem>
					<Button onClick={() => activateView("draw")}>
						<FiPenTool size={IconSize} className={`${IconStyle} m-4`} />
					</Button>
				</MenuItem>
				<MenuItem>
					<Button onClick={() => activateView("music")}>
						<FiMusic size={IconSize} className={`${IconStyle} m-4`} />
					</Button>
				</MenuItem>
				<MenuItem>
					<Button onClick={() => activateView("chart")}>
						<FiBarChart2 size={IconSize} className={`${IconStyle} m-4`} />
					</Button>
				</MenuItem>
				<MenuItem>
					<Button onClick={() => activateView("map")}>
						<FiMap size={IconSize} className={`${IconStyle} m-4`} />
					</Button>
				</MenuItem>
			</MenuItems>
		</Menu>
	</div>
);
