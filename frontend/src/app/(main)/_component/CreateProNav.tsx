import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const CreateProNav = () => {
  return (
    <div className="flex justify-between px-4 py-2">
      <div className="flex items-center gap-2">
        <Image src={"logo.svg"} alt="logo" width={24} height={24} />
        <p className="text-[#000] text-4 font-bold leading-5">Buy me coffee</p>
      </div>
      <Button>Log out</Button>
    </div>
  );
};
