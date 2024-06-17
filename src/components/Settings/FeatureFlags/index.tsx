import { Switch } from "@headlessui/react";
import { useState } from "react";
import {
	FiBarChart2,
	FiCalendar,
	FiMap,
	FiMusic,
	FiPenTool,
	FiTable,
} from "react-icons/fi";

import { IconStyle } from "@/utils/style";

export const FeatureFlags = () => {
	// these will probably need to be set to the SQLite database
	const [enabledMusic, setEnabledMusic] = useState(false);
	const [enabledCalendar, setEnabledCalendar] = useState(false);
	const [enabledDataTable, setEnabledDataTable] = useState(false);
	const [enabledDrawing, setEnabledDrawing] = useState(false);
	const [enabledCharts, setEnabledCharts] = useState(false);
	const [enabledMaps, setEnabledMaps] = useState(false);

	return (
		<div>
			{[
				{
					icon: <FiCalendar size={20} className={`${IconStyle} mx-2`} />,
					label: "Calendar",
					state: enabledCalendar,
					action: setEnabledCalendar,
				},
				{
					icon: <FiTable size={20} className={`${IconStyle} mx-2`} />,
					label: "Data Table",
					state: enabledDataTable,
					action: setEnabledDataTable,
				},
				{
					icon: <FiPenTool size={20} className={`${IconStyle} mx-2`} />,
					label: "Drawing",
					state: enabledDrawing,
					action: setEnabledDrawing,
				},
				{
					icon: <FiMusic size={20} className={`${IconStyle} mx-2`} />,
					label: "Music Notation",
					state: enabledMusic,
					action: setEnabledMusic,
				},
				{
					icon: <FiBarChart2 size={20} className={`${IconStyle} mx-2`} />,
					label: "Charts",
					state: enabledCharts,
					action: setEnabledCharts,
				},
				{
					icon: <FiMap size={20} className={`${IconStyle} mx-2`} />,
					label: "Maps",
					state: enabledMaps,
					action: setEnabledMaps,
				},
			].map(({ label, state, action, icon }) => {
				return (
					<div key={crypto.randomUUID()} className="flex mb-3">
						<Switch
							checked={state}
							onChange={action}
							className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-all data-[checked]:bg-blue-600"
						>
							<span className="size-4 translate-x-1 rounded-full bg-gray-500 transition-all group-data-[checked]:translate-x-6" />
						</Switch>
						<label className="flex">
							{icon}
							{label}
						</label>
					</div>
				);
			})}
		</div>
	);
};
