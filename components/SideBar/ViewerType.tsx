import { FiCalendar, FiFile } from "react-icons/fi";

import type { SideBarType } from "./index";
import { IconWrapper } from "../Style";

type ViewerTypeProps = {
  setView: (view: SideBarType) => void;
  view: SideBarType;
};

export const ViewerType = ({ setView, view }: ViewerTypeProps) => {
  return view === "calendar" ? (
    <IconWrapper>
      <FiFile
        size={30}
        aria-label="File Explorer View"
        onClick={() => setView("file-explorer")}
      />
    </IconWrapper>
  ) : (
    <IconWrapper>
      <FiCalendar
        size={30}
        aria-label="Calendar View"
        onClick={() => setView("calendar")}
      />
    </IconWrapper>
  );
};
