import {
  Menu,
  MenuButton,
  MenuItems,
  Button,
  MenuItem,
} from "@headlessui/react";
import { cloneElement } from "react";
import { FiPenTool, FiPlus } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";

import type { AppDataValueObject, FeatureFlag } from "@/db/types";
import { featureFlagsQueryOptions } from "@/util/query";

import { MenuItemsData } from "./MenuItemsData";
import { NewNoteMenuItem } from "./NewNoteMenuItem";
import {
  IconWrapper,
  type PlaceIn,
  PositionDiv,
  PrimaryButton,
} from "../Style";

const cloneAndFindIcon = (label: FeatureFlag) =>
  cloneElement(
    MenuItemsData.find(({ label: itemLabel }) => itemLabel === label)
      ?.iconComponent ?? <FiPenTool size={30} />,
    {
      size: 30,
      className: "mr-2",
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
}) => {
  const { data: featureFlags } = useQuery<AppDataValueObject>(
    featureFlagsQueryOptions,
  );
  const activeFeatureFlags =
    featureFlags &&
    Object.entries(featureFlags).filter(([key, value]) => value);

  return (
    <PositionDiv placeIn={placeIn}>
      {(activeFeatureFlags?.length ?? 0) > 1 ? (
        <Menu>
          <MenuButton className="bg-emerald-950 p-2 rounded-lg mt-2">
            <IconWrapper>
              {activeNoteView === "note"
                ? cloneAndFindIcon(activeNoteView)
                : activeNoteView === "table"
                  ? cloneAndFindIcon(activeNoteView)
                  : (console.error(
                      "NewNote/index.ts: You have clicked an unsupported note type.",
                      // biome-ignore lint/style/noCommaOperator: This is error handling for unsupported note type.
                    ),
                    cloneAndFindIcon(activeNoteView))}
            </IconWrapper>
          </MenuButton>
          <MenuItems
            anchor="top"
            className="bg-slate-800 p-2 rounded-xl flex flex-col-reverse mb-2"
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
                label !== activeNoteView &&
                featureFlags &&
                featureFlags[label] && (
                  <NewNoteMenuItem
                    key={crypto.randomUUID()}
                    activateNoteView={() => activateNoteView(label)}
                    iconComponent={iconComponent}
                  />
                ),
            )}
          </MenuItems>
        </Menu>
      ) : (
        <PrimaryButton onClick={() => console.log("hello world")}>
          {cloneAndFindIcon(
            MenuItemsData.find(
              ({ label: itemLabel }) => itemLabel === activeNoteView,
            )?.label ?? "note",
          ) ?? <FiPenTool size={30} className="mr-2" />}
        </PrimaryButton>
      )}
    </PositionDiv>
  );
};
