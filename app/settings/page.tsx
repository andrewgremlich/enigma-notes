"use client";

import { FiHome } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { Button } from "@headlessui/react";

import { FeatureFlags } from "@/components/Settings/FeatureFlags";
import { TestEncryption } from "@/components/Settings/TestEncryption";
import { Aside, Hr } from "@/components/Style";

export default function Settings() {
  const router = useRouter();

  return (
    <main className="h-full w-full max-w-prose m-auto">
      <Aside className="mt-10">
        <div className="flex justify-between">
          <h1>Settings</h1>
          <Button
            className="flex items-center hover:text-yellow-200 transition-colors duration-200 ease-in"
            type="button"
            onClick={() => router.push("/editor")}
          >
            <FiHome size={30} className="mr-2" />
            Editor
          </Button>
        </div>

        <Hr />

        <FeatureFlags />

        <Hr />

        <h2>A space for adding or modifying the key</h2>

        <Hr />

        <TestEncryption />
      </Aside>
    </main>
  );
}
