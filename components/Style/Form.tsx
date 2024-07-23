import { Input as HeadlessUiInput } from "@headlessui/react";

import { cleanStyleForInlineJsx, type Props } from "./index";

export const Input = <T extends {}>({ className, ...rest }: Props<T>) => (
  <HeadlessUiInput
    className={`${cleanStyleForInlineJsx(`
p-2
border-2
border-slate-200
dark:border-slate-800
rounded-md
focus:outline-none
focus:border-blue-700
dark:focus:border-blue-300
transition-all
duration-300
ease-in-out
`)} ${className}`}
    {...rest}
  />
);

export const PrimaryButton = <T extends {}>({
  className,
  ...rest
}: Props<T>) => (
  <button
    className={`${cleanStyleForInlineJsx(`
      bg-blue-700
      dark:bg-blue-300
      text-white
      p-2
      rounded-md
      shadow-md
      hover:shadow-lg
      transition-all
      duration-300
      ease-in-out
      `)} ${className}`}
    {...rest}
  />
);
