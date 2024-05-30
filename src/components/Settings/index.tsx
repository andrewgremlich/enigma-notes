import { useState } from "react";
import { FiSettings } from "react-icons/fi";
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

import { placeInStyle, type PlaceIn } from "@/utils/style";
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
						<DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
							<DialogTitle className="font-bold flex">
								<FiSettings className="cursor-pointer mr-4" size={30} />{" "}
								Settings
							</DialogTitle>

							<TabGroup>
								<TabList>
									<Tab>Feature Flags</Tab>
									<Tab>Tab 2</Tab>
									<Tab>Tab 3</Tab>
								</TabList>
								<TabPanels>
									<TabPanel>
										{" "}
										<FeatureFlags />
									</TabPanel>
									<TabPanel>Content 2</TabPanel>
									<TabPanel>Content 3</TabPanel>
								</TabPanels>
							</TabGroup>

							<Button onClick={() => setIsOpen(false)}>Close</Button>
						</DialogPanel>
					</div>
				</Dialog>
			</Transition>
		</div>
	);
};
