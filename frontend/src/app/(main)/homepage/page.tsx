import React from "react";
import { HomeDefault } from "./_component/HomeDefault";
import { HomeNav } from "./_component/HomeNav";

export default function page() {
  return (
    <div className="flex gap-11 flex-col">
      <HomeNav />
      <HomeDefault />
    </div>
  );
}
