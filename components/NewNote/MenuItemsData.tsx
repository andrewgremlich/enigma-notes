import type { FeatureFlag } from "@/db/types";

import {
  FiAlignLeft,
  FiBarChart2,
  FiMap,
  FiMusic,
  FiPenTool,
  FiTable,
} from "react-icons/fi";

export const MenuItemsData: {
  label: FeatureFlag;
  iconComponent: JSX.Element;
}[] = [
  {
    label: "note",
    iconComponent: <FiAlignLeft />,
  },
  {
    label: "table",
    iconComponent: <FiTable />,
  },
  {
    label: "draw",
    iconComponent: <FiPenTool />,
  },
  {
    label: "music",
    iconComponent: <FiMusic />,
  },
  {
    label: "chart",
    iconComponent: <FiBarChart2 />,
  },
  {
    label: "map",
    iconComponent: <FiMap />,
  },
];
