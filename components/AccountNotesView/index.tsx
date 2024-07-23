import { useState } from "react";
import { Resizable } from "re-resizable";

import { Settings } from "../Settings";
import { CalendarViewerContents } from "./CalendarViewerContents";
import { TreeViewerContents } from "./TreeViewerContents";
import { ViewerType } from "./ViewerType";
import { calendarViewData, accountNotesViewData } from "./mockData";
import { AccountNotesViewStyle } from "./style";

export type AccountNotesViewType = "calendar" | "file-explorer";

export const AccountNotesView = () => {
  const [accountNotesView, setAccountNotesView] =
    useState<AccountNotesViewType>("calendar");

  return (
    <aside className="bg-slate-800">
      <ViewerType
        setView={(type) => setAccountNotesView(type)}
        view={accountNotesView}
      />
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
      <Settings placeIn="bottom-left" />
    </aside>
  );
};
