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
    className={`${cleanStyleForInlineJsx(`
    px-10
    mb-10
    transition-all
    duration-300
    ease-in-out`)} ${className}`}
    {...rest}
  >
    {children}
  </aside>
);
