import { Switch } from "@headlessui/react";
import {
  FiBarChart2,
  FiMap,
  FiMusic,
  FiPenTool,
  FiTable,
} from "react-icons/fi";

import { defaultSettingsState } from "./state";
import { useMutation, useQuery } from "@tanstack/react-query";
import { putAppData, getAppData, addAppData } from "@/db/appData";
import type { AppDataValueObject, FeatureFlag } from "@/db/types";
import { IconWrapper } from "../Style";

export const FeatureFlags = () => {
  const getFeatureFlags = useQuery<AppDataValueObject>({
    queryKey: ["get", "featureFlags"],
    queryFn: async () => {
      const featureFlags = await getAppData("featureFlags");

      if (!featureFlags) {
        await addAppData("featureFlags", defaultSettingsState);
        return defaultSettingsState;
      }

      return featureFlags?.value as AppDataValueObject;
    },
  });
  const toggleFeatureFlagMutation = useMutation({
    mutationFn: async (key: FeatureFlag) => {
      if (!getFeatureFlags.data) return;

      await putAppData("featureFlags", {
        ...getFeatureFlags.data,
        [key]: !getFeatureFlags.data[key],
      });
    },
    onSettled: async () => {
      await getFeatureFlags.refetch();
    },
  });
  const state: Map<FeatureFlag, boolean> = getFeatureFlags.isLoading
    ? new Map<FeatureFlag, boolean>()
    : new Map<FeatureFlag, boolean>(
        Object.entries(
          getFeatureFlags.data as { [key in FeatureFlag]: boolean },
        ).map(([key, value]) => [key as FeatureFlag, value]),
      );

  return getFeatureFlags.isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="mb-10">
      <h2>Feature Flags</h2>
      {[
        {
          icon: (
            <IconWrapper>
              <FiTable size={20} />
            </IconWrapper>
          ),
          label: "Data Table",
          state: state.has("table") ? state.get("table") : false,
          action: () => toggleFeatureFlagMutation.mutate("table"),
        },
        {
          icon: (
            <IconWrapper>
              <FiPenTool size={20} />
            </IconWrapper>
          ),
          label: "Drawing",
          state: state.has("draw") ? state.get("draw") : false,
          action: () => toggleFeatureFlagMutation.mutate("draw"),
        },
        {
          icon: (
            <IconWrapper>
              <FiMusic size={20} />
            </IconWrapper>
          ),
          label: "Music Notation",
          state: state.has("music") ? state.get("music") : false,
          action: () => toggleFeatureFlagMutation.mutate("music"),
        },
        {
          icon: (
            <IconWrapper>
              <FiBarChart2 size={20} />
            </IconWrapper>
          ),
          label: "Charts",
          state: state.has("chart") ? state.get("chart") : false,
          action: () => toggleFeatureFlagMutation.mutate("chart"),
        },
        {
          icon: (
            <IconWrapper>
              <FiMap size={20} />
            </IconWrapper>
          ),
          label: "Maps",
          state: state.has("map") ? state.get("map") : false,
          action: () => toggleFeatureFlagMutation.mutate("map"),
        },
      ].map(({ label, state, action, icon }) => {
        return (
          <div key={crypto.randomUUID()} className="flex mb-3">
            <Switch
              checked={state}
              onChange={action}
              className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-all data-[checked]:bg-blue-600"
            >
              <span className="size-4 translate-x-1 rounded-full bg-gray-500 transition-all group-data-[checked]:translate-x-6" />
            </Switch>
            <label className="flex">
              {icon}
              {label}
            </label>
          </div>
        );
      })}
    </div>
  );
};
