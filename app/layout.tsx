import type { Metadata } from "next";

import Providers from "@/components/ReactQueryClientProvider";

import "./globals.css";

// TODO: check to see if there is account related data. If not the show "create account" option.
// assure that everything is offline first and the account related info is to encrypt the notes.
// "create account" can be as little as a PIN or a password for encryption.

// TODO: you have a folder structure existing, change it to be the many journals or tags.

// TODO: be sure to make a breadcrumb trail.

// TODO: support pictures and note linking.
// https://dev.to/koralarts/slatejs-adding-images-and-links-2g93
// https://github.com/ianstormtaylor/slate/blob/main/site/examples/images.tsx

// TODO: a way to write the file in the right spot. then think of a way for encryption.
// TODO: and exporter to MD, Word, PDF

export const metadata: Metadata = {
  title: "Enigma Notes",
  description:
    "A versatile, end-to-end encrypted, collaborative note taking application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
