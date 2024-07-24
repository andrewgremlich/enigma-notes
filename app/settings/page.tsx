"use client";

import { FeatureFlags } from "@/components/Settings/FeatureFlags";
import { TestEncryption } from "@/components/Settings/TestEncryption";
import { Aside, Hr } from "@/components/Style";

export default function Settings() {
  return (
    <main className="h-full w-full max-w-prose m-auto">
      <Aside className="mt-10">
        <h1>Settings</h1>

        <Hr />

        <FeatureFlags />

        <Hr />

        <TestEncryption />
      </Aside>
    </main>
  );
}
