import Image from "next/image";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-white w-screen gap-5">
      <div className=" h-screen bg-amber-400 w-1/2 flex items-center justify-center flex-col">
        <div className="flex gap-2 w-full  ">
          <Image className="h-fit" src={"logo.svg"} alt="logo" width={20} height={20} />
          <p>Buy Me Coffee</p>
        </div>
        <div className="flex flex-col items-center gap-10 justify-center h-screen w-[455px]">
          <Image src={"/Icon.png"} alt="icon" width={240} height={240} />
          <div className="flex flex-col gap-3 items-center">
            <p className="text-[#09090B] text-2xl font-bold not-only-of-type:">Fund your creative work</p>
            <p className="">Accept support. Start a membership. Setup a shop. It’s easier than you think.</p>
          </div>
        </div>

      </div>
      <div>{children}</div>
    </div>
  );
}
