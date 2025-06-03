import React from "react";
import { CreateproPage } from "../_component/CreateProPage";
import { CreateProNav } from "./_component/CreateProNav";

export default function page() {
  return (
    <div className="flex flex-col gap-[91px]">
      <CreateProNav />
      <CreateproPage />
    </div>
  );
}
