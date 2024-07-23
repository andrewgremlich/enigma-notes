import type { ReactNode } from "react";

export * from "./Form";
export * from "./Skeleton";

export type Props<T> = { children?: ReactNode; className?: string } & T;
export type PlaceIn = "bottom-right" | "bottom-left" | "top-right" | "top-left";

export const cleanStyleForInlineJsx = (style: string) =>
  style.replace(/\n/g, " ").replace(/\s+/g, " ").trim();

export const IconWrapper = <T extends {}>({
  children,
  className,
  ...rest
}: Props<T>) => (
  <div
    className={`${cleanStyleForInlineJsx(`
    text-slate-900
    dark:text-slate-100
    hover:text-blue-700
    dark:hover:text-blue-300
    transition-colors
    duration-200
    ease-in-out
    cursor-pointer
    `)} ${className}`}
    {...rest}
  >
    {children}
  </div>
);

const placeInStyle = (placeIn: PlaceIn) => `
${placeIn === "bottom-right" ? "absolute bottom-4 right-10" : ""}
${placeIn === "bottom-left" ? "absolute bottom-4 left-10" : ""}
${placeIn === "top-right" ? "absolute top-3 right-10" : ""}
${placeIn === "top-left" ? "absolute top-3 left-10" : ""}
`;

export const PositionDiv = <T extends {}>({
  children,
  className,
  placeIn,
  ...rest
}: { placeIn: PlaceIn } & Props<T>) => (
  <div className={cleanStyleForInlineJsx(placeInStyle(placeIn))} {...rest}>
    {children}
  </div>
);
