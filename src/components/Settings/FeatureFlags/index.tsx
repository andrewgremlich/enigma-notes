import { useState } from "react";
import { Switch } from "@headlessui/react";
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
	const [enabledMusic, setEnabledMusic] = useState(false);
	const [enabledCalendar, setEnabledCalendar] = useState(false);
	const [enabledDataTable, setEnabledDataTable] = useState(false);
	const [enabledDrawing, setEnabledDrawing] = useState(false);
	const [enabledCharts, setEnabledCharts] = useState(false);
	const [enabledMaps, setEnabledMaps] = useState(false);

	return (
		<div>
			<p className="mb-4">Choose which features you want to enable.</p>

			<p className="mb-4">The standard text editor is default.</p>

			{[
				{
					icon: <FiCalendar size={20} className={IconStyle} />,
					label: "Calendar",
					state: enabledCalendar,
					action: setEnabledCalendar,
				},
				{
					icon: <FiTable size={20} className={IconStyle} />,
					label: "Data Table",
					state: enabledDataTable,
					action: setEnabledDataTable,
				},
				{
					icon: <FiPenTool size={20} className={IconStyle} />,
					label: "Drawing",
					state: enabledDrawing,
					action: setEnabledDrawing,
				},
				{
					icon: <FiMusic size={20} className={IconStyle} />,
					label: "Music Notation",
					state: enabledMusic,
					action: setEnabledMusic,
				},
				{
					icon: <FiBarChart2 size={20} className={IconStyle} />,
					label: "Charts",
					state: enabledCharts,
					action: setEnabledCharts,
				},
				{
					icon: <FiMap size={20} className={IconStyle} />,
					label: "Maps",
					state: enabledMaps,
					action: setEnabledMaps,
				},
			].map(({ label, state, action, icon }) => {
				return (
					<div key={crypto.randomUUID()} className="flex mr-2">
						<Switch
							checked={state}
							onChange={action}
							className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
						>
							<span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
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
