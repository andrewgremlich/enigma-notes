import type { Metadata } from "next";

import ReactQueryProviders from "@/components/ReactQueryClientProvider";

import "./globals.css";

// TODO: Mobile friendly.

// TODO: Explain more how the encryption works and how the app prefers to go.

// TODO: location metadata for notes.

// TODO: Weather metadata for notes.

// TODO: double check potential recovery options? Do I need to store password hash and salt anywhere? prompt the user to save the salt and hash?

// TODO: you have a folder structure existing, change it to be the many journals or tags. set up a hierarchal structure of notes.
// TODO: be sure to make a breadcrumb trail with tags or whatever it'll be

// TODO: make note editor functioning. need a toolbar. need a way to save the note. need a way to encrypt the note. need a way to decrypt the note.

// TODO: support pictures and note linking.
// https://dev.to/koralarts/slatejs-adding-images-and-links-2g93
// https://github.com/ianstormtaylor/slate/blob/main/site/examples/images.tsx

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
        <ReactQueryProviders>{children}</ReactQueryProviders>
      </body>
    </html>
  );
}
