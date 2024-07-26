import { Label, Field, Checkbox } from "@headlessui/react";
import { FiCheck } from "react-icons/fi";
import { useMutation, useQuery } from "@tanstack/react-query";

import { getAppData, putAppData } from "@/db/appData";
import type { AppDataValue } from "@/db/types";
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
    queryFn: async () => {
      const allowEndDate = await getAppData("allowEndDate");
      return allowEndDate?.value ?? false;
    },
  });
  const toggleEnabledEndDate = useMutation({
    mutationFn: (value: AppDataValue) => putAppData("allowEndDate", value),
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
              {enabledEndDate.data && (
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
                className={`flex items-center ${enabledEndDate.data ? "text-gray-600 text-sm" : "text-gray-200"}`}
              >
                <Checkbox
                  checked={(enabledEndDate.data as boolean) ?? false}
                  onChange={() =>
                    toggleEnabledEndDate.mutate(!enabledEndDate.data)
                  }
                  name="allow-end-date"
                  className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500 mr-4"
                >
                  <FiCheck className="text-white" />
                </Checkbox>
                <Label className="mr-4">Allow End Date?</Label>
              </Field>
            </div>
          )}
        </aside>
      </Aside>
    </form>
  );
};
