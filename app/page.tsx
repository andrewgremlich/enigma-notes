"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, type FormEventHandler } from "react";

import { getAppData, addAppData } from "@/db/appData";
import { Input, PrimaryButton } from "@/components/Style";
import { getKeyFromPassword, hashData } from "@/util/crypto";

export default function Home() {
  const router = useRouter();
  const cryptoKey = useQuery({
    queryKey: ["get", "cryptoKey"],
    queryFn: async () => {
      const cryptoKey = await getAppData("cryptoKey");
      return cryptoKey?.value ?? false;
    },
  });

  useEffect(() => {
    if (cryptoKey.data) {
      router.push("/editor");
    }
  }, [cryptoKey.data, router.push]);

  const onSubmit: FormEventHandler = async (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target as HTMLFormElement);
    const passwordBuffer = new TextEncoder().encode(
      formData.get("encrypting-password") as string,
    );
    const { hashBuffer } = await hashData(passwordBuffer);
    const derivedKey = await getKeyFromPassword(hashBuffer);

    await addAppData("cryptoKey", derivedKey);
    await cryptoKey.refetch();
  };

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
