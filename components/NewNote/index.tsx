import {
  Menu,
  MenuButton,
  MenuItems,
  Button,
  MenuItem,
} from "@headlessui/react";

import { IconStyle, type PlaceIn, placeInStyle } from "@/utils/style";
import type { FeatureFlag } from "@/db/types";

import { MenuItemsData } from "./MenuItemsData";
import { NewNoteMenuItem } from "./NewNoteMenuItem";
import { cloneElement } from "react";
import { FiPenTool, FiPlus } from "react-icons/fi";

const cloneAndFindIcon = (label: FeatureFlag) =>
  cloneElement(
    MenuItemsData.find(({ label: itemLabel }) => itemLabel === label)
      ?.iconComponent ?? <FiPenTool size={30} className={IconStyle} />,
    {
      size: 30,
      className: `${IconStyle} mr-2`,
    },
  );

export const NewNote = ({
  placeIn,
  activeNoteView = "note",
  activateNoteView,
}: {
  placeIn: PlaceIn;
  activeNoteView: FeatureFlag | undefined;
  activateNoteView: (
    label: FeatureFlag,
  ) => Promise<string | number | undefined>;
}) => (
  <div className={`${placeInStyle(placeIn)}`}>
    <Menu>
      <MenuButton className="flex">
        {activeNoteView === "note"
          ? cloneAndFindIcon(activeNoteView)
          : activeNoteView === "table"
            ? cloneAndFindIcon(activeNoteView)
            : (console.error(
                "NewNote/index.ts: You have clicked an unsupported note type.",
                // biome-ignore lint/style/noCommaOperator: This is error handling for unsupported note type.
              ),
              cloneAndFindIcon(activeNoteView))}
      </MenuButton>
      <MenuItems
        anchor="top"
        className="bg-slate-800 p-2 rounded-xl flex flex-col-reverse"
      >
        <MenuItem>
          <Button
            title="Add a new note of the same type"
            className="border-t-2 border-slate-700"
            onClick={() => console.log("same note of type")}
          >
            <FiPlus size={30} className="m-4 hover:text-yellow-300" />
          </Button>
        </MenuItem>
        {MenuItemsData.map(
          ({ label, iconComponent }) =>
            label !== activeNoteView && (
              <NewNoteMenuItem
                key={crypto.randomUUID()}
                activateNoteView={() => activateNoteView(label)}
                iconComponent={iconComponent}
              />
            ),
        )}
      </MenuItems>
    </Menu>
  </div>
);
