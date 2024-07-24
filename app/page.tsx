"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEventHandler } from "react";

import { getCryptoKey, setCryptoKey } from "@/db/appData";
import { Input, PrimaryButton } from "@/components/Style";
import {
  decryptData,
  encryptData,
  getKeyFromPassword,
  getSalt,
  hashData,
} from "@/util/crypto";

export default function Home() {
  const router = useRouter();
  const cryptoKey = useQuery({
    queryKey: ["get", "cryptoKey"],
    queryFn: async () => {
      const cryptoKey = await getCryptoKey();
      return cryptoKey;
    },
  });

  console.log(cryptoKey.data);
  if (cryptoKey.data) {
    router.push("/editor");
  }

  const onSubmit: FormEventHandler = async (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target as HTMLFormElement);
    const passwordBuffer = new TextEncoder().encode(
      formData.get("encrypting-password") as string,
    );

    const { hashBuffer } = await hashData(passwordBuffer);
    const { saltBuffer } = await getSalt();
    const derivedKey = await getKeyFromPassword(hashBuffer, saltBuffer);

    await setCryptoKey(derivedKey);
    router.push("/editor");
  };

  // make this page to query for a password to encrypt the notes.
  // otherwise go to an editor route.

  return (
    <main className="max-w-prose m-auto">
      <h1 className="mt-20 mb-15 text-5xl">Enigma Notes</h1>

      <p className="my-10">
        A versatile, offline-first, end-to-end encrypted, collaborative note
        taking application.
      </p>

      {!cryptoKey.isLoading && cryptoKey.data === undefined && (
        <>
          <p className="mb-4">
            No key detected. Input a password for encrypting your notes.
          </p>

          <form className="mb-10" onSubmit={onSubmit}>
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
