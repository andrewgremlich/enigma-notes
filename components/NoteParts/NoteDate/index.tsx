import { Label, Field, Checkbox } from "@headlessui/react";
import { FiCheck } from "react-icons/fi";
import { useMutation, useQuery } from "@tanstack/react-query";

import { getAllowEndDate, setAllowEndDate } from "@/db/appData";
import type { AppData } from "@/db/types";
import { Aside, Input } from "@/components/Style";

const DefaultEventData = {
  title: "",
  notes: "",
  start: new Date(),
  end: new Date(),
};

export const NoteDate = () => {
  const enabledEndDate = useQuery({
    queryKey: ["get", "enabledEndDate"],
    queryFn: async () => await getAllowEndDate(),
  });
  const toggleEnabledEndDate = useMutation({
    mutationFn: (value: AppData) => setAllowEndDate(value),
    onSettled: async () => enabledEndDate.refetch(),
  });

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        console.log("form submission!");
      }}
    >
      <Aside>
        <aside className="flex">
          <Field>
            <Label>Start Date</Label>
            <Input
              id="note-start-date"
              className="grow dark:bg-gray-700 mr-6"
              name="start"
              type="datetime-local"
              placeholder="Start date"
              defaultValue={DefaultEventData.start.toISOString()}
            />
          </Field>

          {!enabledEndDate.isLoading && (
            <div>
              {enabledEndDate.data?.value && (
                <Field>
                  <Label>End Date</Label>
                  <Input
                    id="note-end-date"
                    className="grow dark:bg-gray-700"
                    name="end"
                    type="datetime-local"
                    placeholder="End date"
                    defaultValue={DefaultEventData.end.toISOString()}
                  />
                </Field>
              )}

              <Field
                className={`flex items-center ${enabledEndDate.data?.value ? "text-gray-600 text-sm" : "text-gray-200"}`}
              >
                <Label className="mr-4">Allow End Date?</Label>
                <Checkbox
                  checked={(enabledEndDate.data?.value as boolean) ?? false}
                  onChange={() => {
                    enabledEndDate.data &&
                      toggleEnabledEndDate.mutate(enabledEndDate.data);
                  }}
                  name="allow-end-date"
                  className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500"
                >
                  <FiCheck className="text-white" />
                </Checkbox>
              </Field>
            </div>
          )}
        </aside>
      </Aside>
    </form>
  );
};
