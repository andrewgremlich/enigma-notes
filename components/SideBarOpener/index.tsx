import type { ReactNode } from "react";
import { Button } from "@headlessui/react";
import { FiArrowLeft } from "react-icons/fi";

type SideBarOpenerProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  children: ReactNode;
};

export const SideBarOpener = ({
  isOpen,
  setIsOpen,
  children,
}: SideBarOpenerProps) => {
  return (
    <aside
      className={`${isOpen ? "animate-slide-out" : "animate-slide-in"} bg-slate-800 relative h-full`}
    >
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? "animate-180-turn-clockwise" : "animate-180-turn-c-clockwise"} absolute top-3 -right-6`}
      >
        <FiArrowLeft
          size={30}
          className={"dark:bg-emerald-200 dark:text-slate-950 rounded-md"}
        />
      </Button>
      {children}
    </aside>
  );
};
