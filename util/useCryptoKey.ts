import { type FormEventHandler, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { addAppData, getAppData } from "@/db/appData";
import { useRouter } from "next/navigation";
import { hashData, getKeyFromPassword } from "./crypto";

export const useCryptoKey = () => {
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

  const generateAndStoreNewCryptoKey: FormEventHandler = async (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target as HTMLFormElement);
    const passwordBuffer = new TextEncoder().encode(
      formData.get("encrypting-password") as string
    );
    const { hashBuffer } = await hashData(passwordBuffer);
    const derivedKey = await getKeyFromPassword(hashBuffer);

    await addAppData("cryptoKey", derivedKey);
    await cryptoKey.refetch();
  };

  return [cryptoKey, generateAndStoreNewCryptoKey] as const;
};
