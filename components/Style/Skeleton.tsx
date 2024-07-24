import { type Props, cleanStyleForInlineJsx } from ".";

export const Hr = () => <hr className="mb-5" />;

export const NoteArticle = <T extends {}>({
  children,
  className,
  ...rest
}: Props<T>) => (
  <article
    className={`${cleanStyleForInlineJsx(`
    max-w-screen-lg
    w-full
    h-full
    mx-auto
    py-4
    px-8
    `)} ${className}`}
    {...rest}
  >
    {children}
  </article>
);

export const Aside = <T extends {}>({
  children,
  className,
  ...rest
}: Props<T>) => (
  <aside
    className={`${cleanStyleForInlineJsx(`bg-slate-200
    dark:bg-slate-800
    hover:shadow-yellow-900
    dark:hover:shadow-yellow-100
    cursor-pointer
    
    px-6
    py-4
    rounded-md
    shadow-lg
    mb-10
    
    transition-all
    duration-300
    ease-in-out`)} ${className}`}
    {...rest}
  >
    {children}
  </aside>
);
