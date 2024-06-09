import { useState } from "react";
import { FiMenu, FiXCircle } from "react-icons/fi";
import {
	Dialog,
	DialogPanel,
	Transition,
	TransitionChild,
	Button,
} from "@headlessui/react";

import { IconStyle } from "@/utils/style";

import { ViewerType } from "./ViewerType";
import { ViewerContents } from "./ViewerContents";

export const FileView = () => {
	const [open, setOpen] = useState(true);

	return (
		<>
			<Button
				className="absolute top-4 left-4 z-10"
				onClick={() => setOpen(true)}
			>
				<FiMenu size={30} className={`${IconStyle}`} />
			</Button>

			<Transition show={open}>
				<Dialog className="relative z-10" onClose={setOpen}>
					<TransitionChild
						enter="ease-in-out duration-500"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in-out duration-500"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity" />
					</TransitionChild>

					<div className="fixed inset-0 overflow-hidden">
						<div className="absolute inset-0 overflow-hidden">
							<div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
								<TransitionChild
									enter="transform transition ease-in-out duration-500 sm:duration-700"
									enterFrom="-translate-x-full"
									enterTo="translate-x-0"
									leave="transform transition ease-in-out duration-500 sm:duration-700"
									leaveFrom="translate-x-0"
									leaveTo="-translate-x-full"
								>
									<DialogPanel className="pointer-events-auto relative w-screen max-w-md">
										<div className="flex h-full flex-col overflow-y-scroll bg-emerald-900 py-6 shadow-xl">
											<div className="px-4 sm:px-6">
												<ViewerType />
											</div>
											<div className="mt-6 px-4 sm:px-6 text-gray-300">
												<ViewerContents />

												<TransitionChild
													enter="ease-in-out duration-500"
													enterFrom="opacity-0"
													enterTo="opacity-100"
													leave="ease-in-out duration-500"
													leaveFrom="opacity-100"
													leaveTo="opacity-0"
												>
													<button
														type="button"
														className="absolute top-4 -right-10"
														onClick={() => setOpen(false)}
													>
														<FiXCircle
															size={30}
															className={`${IconStyle}`}
															aria-hidden="true"
														/>
													</button>
												</TransitionChild>
											</div>
										</div>
									</DialogPanel>
								</TransitionChild>
							</div>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};
