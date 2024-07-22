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
  const [accountNotesViewType, setAccountNotesViewType] =
    useState<AccountNotesViewType>("calendar");

  return (
    <Resizable minWidth={200} maxWidth={400} className={`${AccountNotesViewStyle}`}>
      <ViewerType
        setView={(type) => setAccountNotesViewType(type)}
        view={accountNotesViewType}
      />
      {accountNotesViewType === "calendar" ? (
        <CalendarViewerContents data={calendarViewData} />
      ) : (
        <TreeViewerContents data={accountNotesViewData} />
      )}
      <Settings placeIn="bottom-left" />
    </Resizable>
  );
};
