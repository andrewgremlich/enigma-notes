import {
  Input as HeadlessUiInput,
  type InputProps,
  Button,
  type ButtonProps,
} from "@headlessui/react";

import { cleanStyleForInlineJsx, type Props } from "./index";

export const Input = <T extends {}>({
  className,
  ...rest
}: InputProps & Props<T>) => (
  <HeadlessUiInput
    className={`${cleanStyleForInlineJsx(`
text-slate-900
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
mb-4
`)} ${className}`}
    {...rest}
  />
);

export const PrimaryButton = <T extends {}>({
  className,
  ...rest
}: ButtonProps & Props<T>) => (
  <Button
    className={`${cleanStyleForInlineJsx(`
      bg-blue-700
      dark:bg-blue-300
      text-white
      dark:text-black
      p-2
      rounded-md
      shadow-md
      hover:shadow-lg
      transition-all
      duration-300
      ease-in-out
      mb-4
      `)} ${className}`}
    {...rest}
  />
);
