import Image from "next/image";
import React from "react";

export const Icon = ({ className }: { className: string }) => {
  return (
    <div>
      <Image
        className={`${"absolute " + className}`}
        src={"/Icon.png"}
        width={240}
        height={240}
        alt="icon"
      />
    </div>
  );
};
