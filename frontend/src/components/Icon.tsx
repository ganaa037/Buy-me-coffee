import Image from "next/image";
import React from "react";

export const Icon = () => {
  return (
    <div>
      <Image src={"/Icon.png"} width={240} height={240} alt="icon" />
    </div>
  );
};
