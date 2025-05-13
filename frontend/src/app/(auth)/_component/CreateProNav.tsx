import Image from "next/image";
import React from "react";

export const CreateProNav = () => {
  return (
    <div>
      <div className="">
        <Image src={"logo.svg"} alt="logo" width={24} height={24} />
        <p>Buy me coffee</p>
      </div>
      <p>Log out</p>
    </div>
  );
};
