import { defaultSettingsState } from "@/components/Settings/state";
import { getAppData, addAppData } from "@/db/appData";
import type { AppDataValueObject } from "@/db/types";

export const featureFlagsQueryOptions = {
  queryKey: ["get", "featureFlags"],
  queryFn: async () => {
    const featureFlags = await getAppData("featureFlags");

    if (!featureFlags) {
      await addAppData("featureFlags", defaultSettingsState);
      return defaultSettingsState;
    }

    return featureFlags?.value as AppDataValueObject;
  },
};
