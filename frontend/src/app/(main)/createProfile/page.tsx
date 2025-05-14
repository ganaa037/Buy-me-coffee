import React from "react";
import { CreateProNav } from "../_component/CreateProNav";
import { CreateproPage } from "../_component/CreateProPage";

export default function page() {
  return (
    <div className="flex flex-col gap-[91px]">
      <CreateProNav />
      <CreateproPage />
    </div>
  );
}
