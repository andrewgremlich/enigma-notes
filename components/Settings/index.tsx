import {
	Button,
	Tab,
	TabGroup,
	TabList,
	TabPanel,
	TabPanels,
	TransitionChild,
} from "@headlessui/react";
import {
	Dialog,
	DialogPanel,
	DialogTitle,
	Transition,
} from "@headlessui/react";
import { useState } from "react";
import { FiSettings, FiX } from "react-icons/fi";

import { Shade } from "../index";

import { FeatureFlags } from "./FeatureFlags";
import { SaveLocations } from "./SaveLocations";
import { type PlaceIn, PositionDiv } from "../Style";

export const Settings = ({ placeIn }: { placeIn: PlaceIn }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<PositionDiv placeIn={placeIn}>
			<Button onClick={() => setIsOpen(true)}>
				<FiSettings className="cursor-pointer" size={30} />
			</Button>

			<Transition show={isOpen}>
				<Dialog onClose={setIsOpen} className="relative z-50">
					<Shade />
					<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
						<TransitionChild
							enter="transition ease-out duration-450"
							enterFrom="-translate-y-full opacity-0"
							enterTo="translate-y-0 opacity-100"
							leave="transition ease-in duration-450"
							leaveFrom="translate-y-0 opacity-100"
							leaveTo="-translate-y-full opacity-0"
						>
							<DialogPanel className="max-w-prose w-full h-auto bg-white dark:bg-emerald-900 p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all">
								<DialogTitle className="flex justify-between align-middle mb-4">
									<div className="font-bold flex">
										<FiSettings className="cursor-pointer mr-4" size={30} />{" "}
										Settings
									</div>
									<Button
										className="dark:hover:text-amber-300 hover:text-amber-700"
										onClick={() => setIsOpen(false)}
									>
										<FiX className="cursor-pointer" size={30} />
									</Button>
								</DialogTitle>

								<TabGroup>
									<TabList className="mb-10 p-2 border-b-2 flex justify-between">
										{["Feature Flags", "Save Locations", "Backup Options"].map(
											(tab) => (
												<Tab
													key={crypto.randomUUID()}
													className="dark:hover:text-amber-300 hover:text-amber-700 transition-all"
												>
													{tab}
												</Tab>
											),
										)}
									</TabList>
									<TabPanels>
										<TabPanel>
											<FeatureFlags />
										</TabPanel>
										<TabPanel>
											<SaveLocations />
										</TabPanel>
										<TabPanel>Content 3</TabPanel>
									</TabPanels>
								</TabGroup>
							</DialogPanel>
						</TransitionChild>
					</div>
				</Dialog>
			</Transition>
		</PositionDiv>
	);
};
