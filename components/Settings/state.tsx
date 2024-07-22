import type { FeatureFlag } from "@/db/types";

export const defaultSettingsState: { [key in FeatureFlag]: boolean } = {
  table: false,
  draw: false,
  music: false,
  chart: false,
  map: false,
  threeD: false,
  note: false,
};
