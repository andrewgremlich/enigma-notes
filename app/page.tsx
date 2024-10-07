"use client";

import Link from "next/link";

import { Input, PrimaryButton } from "@/components/Style";
import { useCryptoKey } from "@/util/useCryptoKey";

export default function Home() {
  const [cryptoKey, generateAndStore] = useCryptoKey();

  return (
    <main className="max-w-prose m-auto">
      <h1 className="mt-20 mb-15 text-5xl">Enigma Notes</h1>

      <p className="my-10">
        A versatile, offline-first, end-to-end encrypted, collaborative note
        taking application.
      </p>

      {!cryptoKey.data && (
        <>
          <p className="mb-4">
            No key detected. Input a password for encrypting your notes.
          </p>

          <p className="mb-4">
            Once a key is detected, the application will auto-route to the
            editor.
          </p>

          <form className="mb-10" onSubmit={generateAndStore}>
            <Input
              id="encrypting-password"
              name="encrypting-password"
              type="password"
              placeholder="Password"
            />

            <PrimaryButton type="submit">Set Password</PrimaryButton>
          </form>
        </>
      )}

      <Link href="/editor">Go to Editor without setting a password</Link>
    </main>
  );
}
