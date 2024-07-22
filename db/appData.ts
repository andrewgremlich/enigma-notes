import { db } from "./init";

export const addAppData = async (key: string, value: string) => {
  try {
    return await db?.appData.add({
      key,
      value,
      id: crypto.randomUUID(),
    });
  } catch (error) {
    console.error("Error adding app data", error);
  }
};

export const getAppData = async (id: string) => {
  try {
    return await db?.appData.get(id);
  } catch (error) {
    console.error("Error getting app data", error);
  }
};

export const updateAppData = async (id: string, value: string) => {
  try {
    return await db?.appData.update(id, { value });
  } catch (error) {
    console.error("Error updating app data", error);
  }
};

export const deleteAppData = async (id: string) => {
  try {
    return await db?.appData.delete(id);
  } catch (error) {
    console.error("Error deleting app data", error);
  }
};

export const getActiveNoteFromAppData = async () => {
  try {
    return await db?.appData.where("key").equals("activeNote").first();
  } catch (error) {
    console.error("Error getting app data", error);
  }
};

export const addActiveNoteToAppData = async (value: string) => {
  try {
    const activeNoteExists = await getActiveNoteFromAppData();

    if (activeNoteExists?.value) {
      return await db?.appData.update(activeNoteExists.id, { value });
    }

    return await db?.appData.add({
      key: "activeNote",
      value,
      id: crypto.randomUUID(),
    });
  } catch (error) {
    console.error("Error adding app data", error);
  }
};

export const addFeatureFlagsToAppData = async (value: {
  [key: string]: string | boolean;
}) => {
  try {
    const featureFlagsExists = await db?.appData
      .where("key")
      .equals("featureFlags")
      .first();

    if (featureFlagsExists?.value) {
      return false;
    }

    await db?.appData.add({
      key: "featureFlags",
      value,
      id: crypto.randomUUID(),
    });

    return true;
  } catch (error) {
    console.error("Error adding app data", error);
  }
};

export const getFeatureFlagsFromAppData = async () => {
  try {
    return await db?.appData.where("key").equals("featureFlags").first();
  } catch (error) {
    console.error("Error getting app data", error);
  }
};

export const toggleFeatureFlag = async (key: string) => {
  try {
    const appData = await getFeatureFlagsFromAppData();
    const featureFlags = appData?.value as { [key: string]: boolean };

    if (!featureFlags || !appData?.id) {
      return;
    }

    featureFlags[key] = !featureFlags[key];

    return await db?.appData.update(appData?.id, { value: featureFlags });
  } catch (error) {
    console.error("Error toggling feature flag", error);
  }
};
