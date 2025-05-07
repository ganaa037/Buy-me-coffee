import { Icon } from "@/components/Icon";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#FBBF24] relative">
      <Icon className="absolute" />
      <div className="w-[50%] bg-white h-full flex items-center justify-end pr-12">
        {children}
      </div>
    </div>
  );
}
