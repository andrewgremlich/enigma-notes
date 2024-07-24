import { useState } from "react";
import { Resizable } from "re-resizable";
import { FiSettings } from "react-icons/fi";
import { useRouter } from "next/navigation";

import { CalendarViewerContents } from "./CalendarViewerContents";
import { TreeViewerContents } from "./TreeViewerContents";
// import { ViewerType } from "./ViewerType";
import { calendarViewData, accountNotesViewData } from "./mockData";
import { AccountNotesViewStyle } from "./style";
import { Button } from "@headlessui/react";

export type AccountNotesViewType = "calendar" | "file-explorer";

export const AccountNotesView = () => {
  const router = useRouter();
  const [accountNotesView, setAccountNotesView] =
    useState<AccountNotesViewType>("calendar");

  return (
    <aside className="bg-slate-800 relative">
      {/* <ViewerType
        setView={(type) => setAccountNotesView(type)}
        view={accountNotesView}
      /> */}
      <Button className="p-2" type="button" onClick={() => router.push("/settings")}>
        <FiSettings size={30} />
      </Button>
      <Resizable
        minWidth={200}
        maxWidth={400}
        className={`${AccountNotesViewStyle}`}
      >
        {accountNotesView === "calendar" ? (
          <CalendarViewerContents data={calendarViewData} />
        ) : (
          <TreeViewerContents data={accountNotesViewData} />
        )}
      </Resizable>
    </aside>
  );
};
