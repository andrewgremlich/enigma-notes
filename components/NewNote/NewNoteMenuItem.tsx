import { MenuItem, Button } from "@headlessui/react";
import { cloneElement } from "react";

import { IconWrapper } from "../Style";

export const NewNoteMenuItem = ({
  iconComponent,
  activateNoteView,
}: {
  iconComponent: JSX.Element;
  activateNoteView: () => void;
}) => {
  const clonedComponent = cloneElement(iconComponent, {
    size: 30,
    className: "m-4",
  });

  return (
    <MenuItem>
      <Button
        title="Change to a new note type."
        onClick={() => activateNoteView()}
      >
        <IconWrapper>{clonedComponent}</IconWrapper>
      </Button>
    </MenuItem>
  );
};
