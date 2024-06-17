import {
	Button,
	Tab,
	TabGroup,
	TabList,
	TabPanel,
	TabPanels,
} from "@headlessui/react";
import {
	Dialog,
	DialogPanel,
	DialogTitle,
	Transition,
} from "@headlessui/react";
import { useState } from "react";
import { FiSettings } from "react-icons/fi";

import { type PlaceIn, placeInStyle } from "@/utils/style";
import { FeatureFlags } from "./FeatureFlags";

export const Settings = ({ placeIn }: { placeIn: PlaceIn }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={`${placeInStyle(placeIn)}`}>
			<Button onClick={() => setIsOpen(true)}>
				<FiSettings className="cursor-pointer" size={30} />
			</Button>

			<Transition
				show={isOpen}
				enter="transition ease-out duration-200"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<Dialog
					open={isOpen}
					onClose={() => setIsOpen(false)}
					className="relative z-50"
				>
					<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
						<DialogPanel className="max-w-prose w-full h-auto bg-white dark:bg-emerald-900 p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all">
							<DialogTitle className="font-bold flex mb-4">
								<FiSettings className="cursor-pointer mr-4" size={30} />{" "}
								Settings
							</DialogTitle>

							<TabGroup>
								<TabList className="mb-10 p-2 border-b-2 flex justify-between">
									{["Feature Flags", "Tab 2", "Tab 3"].map((tab) => (
										<Tab
											key={crypto.randomUUID()}
											className="dark:hover:text-amber-300 hover:text-amber-700 transition-all"
										>
											{tab}
										</Tab>
									))}
								</TabList>
								<TabPanels>
									<TabPanel>
										<FeatureFlags />
									</TabPanel>
									<TabPanel>Content 2</TabPanel>
									<TabPanel>Content 3</TabPanel>
								</TabPanels>
							</TabGroup>

							<Button className="mt-10 dark:hover:text-amber-300 hover:text-amber-700 border-2 px-4 py-2 rounded-lg" onClick={() => setIsOpen(false)}>Close</Button>
						</DialogPanel>
					</div>
				</Dialog>
			</Transition>
		</div>
	);
};
