import { MenuItem, Button } from "@headlessui/react";
import { cloneElement } from "react";

import { IconStyle } from "@/utils/style";

export const NewNoteMenuItem = ({
  iconComponent,
  activateNoteView,
}: {
  iconComponent: JSX.Element;
  activateNoteView: () => void
}) => {
  const clonedComponent = cloneElement(iconComponent, {
    size: 30,
    className: `${IconStyle} m-4`,
  });

  return (
    <MenuItem>
      <Button title="Change to a new note type." onClick={() => activateNoteView()}>
        {clonedComponent}
      </Button>
    </MenuItem>
  );
};
