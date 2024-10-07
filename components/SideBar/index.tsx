import { useState } from "react";
import { Button } from "@headlessui/react";
import { Resizable } from "re-resizable";
import { FiSettings } from "react-icons/fi";
import { useRouter } from "next/navigation";

import { CalendarViewerContents } from "./CalendarViewerContents";
import { TreeViewerContents } from "./TreeViewerContents";
import { calendarViewData, SideBarData } from "./mockData";
import { SideBarStyle } from "./style";
import { SideBarOpener } from "../SideBarOpener";

export type SideBarType = "calendar" | "file-explorer";

export const SideBar = () => {
  const router = useRouter();
  const [SideBar, setSideBar] = useState<SideBarType>("calendar");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SideBarOpener {...{ isOpen, setIsOpen }}>
        {/* <ViewerType
        setView={(type) => setSideBar(type)}
        view={SideBar}
      /> */}
        <Button
          className="flex items-center hover:text-yellow-200 transition-colors duration-200 ease-in mt-3 ml-3"
          type="button"
          onClick={() => router.push("/settings")}
        >
          <FiSettings className="mr-2" size={30} />
          Settings
        </Button>
        <Resizable minWidth={200} maxWidth={400} className={`${SideBarStyle}`}>
          {SideBar === "calendar" ? (
            <CalendarViewerContents data={calendarViewData} />
          ) : (
            <TreeViewerContents data={SideBarData} />
          )}
        </Resizable>
    </SideBarOpener>
  );
};
