import { Input } from "@headlessui/react";
import { FiCalendar } from "react-icons/fi";

import {
	defaultInputStyle,
	defaultNotePartStyle,
	defaultNoteStyle,
} from "@/utils/style";

import { Wysiwyg } from "../NoteParts/Wysiwyg";

const DefaultEventData = {
	title: "",
	notes: "",
	start: new Date(),
	end: new Date(),
};

export const EventEditorView = () => {
	return (
		<div className={defaultNoteStyle}>
			<form
				onSubmit={(evt) => {
					evt.preventDefault();
					console.log("form submission!");
				}}
			>
				<FiCalendar size={40} className="mb-5" />
				<article className={defaultNotePartStyle}>
					<Input
						className={`${defaultInputStyle} w-full dark:bg-gray-700 mb-4`}
						type="text"
						name="title"
						placeholder="Title"
						defaultValue={DefaultEventData.title}
					/>{" "}
					<aside className="flex">
						<Input
							className={`${defaultInputStyle} grow dark:bg-gray-700 mr-6`}
							name="start"
							type="datetime-local"
							placeholder="Start date"
							defaultValue={DefaultEventData.start.toISOString()}
						/>
						<Input
							className={`${defaultInputStyle} grow dark:bg-gray-700`}
							name="end"
							type="datetime-local"
							placeholder="End date"
							defaultValue={DefaultEventData.end.toISOString()}
						/>
					</aside>
				</article>

				<Wysiwyg />
			</form>
		</div>
	);
};
