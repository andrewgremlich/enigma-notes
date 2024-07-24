import type { Metadata } from "next";

import Providers from "@/components/ReactQueryClientProvider";

import "./globals.css";

// TODO: Explain more how the encryption works and how the app prefers to go.

// TODO: warn if no crypto key is set on the editor page.

// TODO: Make Settings it's own page.

// TODO: Mobile friendly.

// TODO: location metadata for notes.

// TODO: Weather metadata for notes.

// TODO: you have a folder structure existing, change it to be the many journals or tags.
// set up a hierarchal structure of notes.

// TODO: be sure to make a breadcrumb trail.

// TODO: make note editor functioning.

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
