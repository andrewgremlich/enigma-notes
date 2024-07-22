import { Input, Label, Field } from "@headlessui/react";

import { defaultInputStyle, defaultNotePartStyle } from "@/utils/style";

const DefaultEventData = {
  title: "",
  notes: "",
  start: new Date(),
  end: new Date(),
};

export const NoteDate = () => {
  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        console.log("form submission!");
      }}
    >
      <article className={defaultNotePartStyle}>
        <aside className="flex justify-evenly">
          <Field>
            <Label>Start Date</Label>
            <Input
              id="note-start-date"
              className={`${defaultInputStyle} grow dark:bg-gray-700 mr-6`}
              name="start"
              type="datetime-local"
              placeholder="Start date"
              defaultValue={DefaultEventData.start.toISOString()}
            />
          </Field>
          <Field>
            <Label>End Date</Label>
            <Input
              id="note-end-date"
              className={`${defaultInputStyle} grow dark:bg-gray-700`}
              name="end"
              type="datetime-local"
              placeholder="End date"
              defaultValue={DefaultEventData.end.toISOString()}
            />
          </Field>
        </aside>
      </article>
    </form>
  );
};
