import { dataTagSymbol, useQuery } from "@tanstack/react-query";

import { getAppData } from "@/db/appData";
import { PrimaryButton } from "../Style";

export const CryptoKeySettings = () => {
  const {isLoading, data} = useQuery({
    queryKey: ["get", "cryptoKey"],
    queryFn: async () => {
      const cryptoKey = await getAppData("cryptoKey");
      return cryptoKey?.value ?? false;
    },
  });

  return (
    <div>
      <h2>Crypto Key Settings</h2>

      <h3>Local Key</h3>

      <p>Key does {!isLoading && data ? "exist" : "does not exist."}</p>

      <PrimaryButton>Refresh Key</PrimaryButton>

      <h3>Contact Key</h3>

      <p>Share this with people you want to share documents with.</p>
    </div>
  );
}