import { useState } from "react";
import { Checkbox } from "@headlessui/react";
import { FiCheckSquare } from "react-icons/fi";

const FeatureFlagCheckboxStyle =
	"mr-3 group-data-[checked]:bg-blue-300 radius-2";
const FeatureFlagsStyle = "flex items-center cursor-pointer group";

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
					label: "Calendar",
					state: enabledCalendar,
					action: setEnabledCalendar,
				},
				{
					label: "Data Table",
					state: enabledDataTable,
					action: setEnabledDataTable,
				},
				{
					label: "Drawing",
					state: enabledDrawing,
					action: setEnabledDrawing,
				},
				{
					label: "Music Notation",
					state: enabledMusic,
					action: setEnabledMusic,
				},
				{
					label: "Charts",
					state: enabledCharts,
					action: setEnabledCharts,
				},
				{
					label: "Maps",
					state: enabledMaps,
					action: setEnabledMaps,
				},
			].map(({ label, state, action }) => {
				return (
					<Checkbox
						checked={state}
						onChange={action}
						className={FeatureFlagsStyle}
						key={crypto.randomUUID()}
					>
						<FiCheckSquare size={20} className={FeatureFlagCheckboxStyle} />
						<label>{label}</label>
					</Checkbox>
				);
			})}
		</div>
	);
};
