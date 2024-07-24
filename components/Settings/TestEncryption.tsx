import { useState, type FormEventHandler } from "react";

import { getCryptoKey } from "@/db/appData";
import { encryptData, decryptData } from "@/util/crypto";
import { Input, PrimaryButton } from "../Style";

export const TestEncryption = () => {
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit: FormEventHandler = async (evt) => {
    evt.preventDefault();

    const derivedKey = await getCryptoKey();

    if (!derivedKey) {
      setMessage("No derived key found.");
      return;
    }

    const formData = new FormData(evt.target as HTMLFormElement);
    const plainText = formData.get("plain-text") as string;
    const { iv, cipherText } = await encryptData(
      plainText,
      derivedKey?.value as CryptoKey,
    );
    const decrypted = await decryptData(
      cipherText,
      iv,
      derivedKey?.value as CryptoKey,
    );

    setMessage(
      `Plain Text: ${plainText} | Encrypted: ${cipherText} | Decrypted: ${decrypted}`,
    );
  };

  return (
    <div>
      <h2>Test Encryption</h2>
      <form className="mb-5" onSubmit={onSubmit}>
        <Input
          id="plain-text"
          name="plain-text"
          type="text"
          placeholder="Plain Text"
        />
        <PrimaryButton type="submit">Test!</PrimaryButton>
      </form>
      <div
        id="test-encryption__encryption-output"
        className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-5 rounded-2xl"
      >
        {message ? message : "..."}
        {/* TODO: sometime... make this elipsis animated... */}
      </div>
    </div>
  );
};
