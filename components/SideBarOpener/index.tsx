import { useEffect, type ReactNode } from "react";
import { Button } from "@headlessui/react";
import { FiArrowLeft } from "react-icons/fi";
import { useWindowSize } from "rooks";

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
  const { innerWidth } = useWindowSize();

  useEffect(() => {
    if (isOpen === true && innerWidth && innerWidth > 767) {
      setIsOpen(false);
    }
  }, [innerWidth, setIsOpen, isOpen]);

  return (
    <aside
      className={`${isOpen ? "animate-slide-out" : "animate-slide-in"} bg-slate-800 sm:fixed sm:z-10 sm:left-0 md:relative h-full`}
    >
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? "animate-180-turn-clockwise" : "animate-180-turn-c-clockwise"} absolute top-3 -right-6 md:hidden`}
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
