import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import React from "react";

export const CreateproPage = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[510px] h-fit border ">
        <div className="flex gap-6 flex-col justify-end">
          <p>Complete your profile page</p>
          <div className="flex flex-col gap-3">
            <p>Add photo</p>
            <input
              className="rounded-[9999px] size-[160px] border border-black text-transparent"
              type="file"
            ></input>
            <div className="flex">
              <X />
              <p>lease enter image</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p>Name</p>
            <input className="w-full h-10 border"></input>
            <p></p>
          </div>
          <div className="flex flex-col gap-3">
            <p>About</p>
            <input className="h-[131px] w-full border"></input>
            <p></p>
          </div>
          <div className="flex flex-col gap-3">
            <p>Social media URL</p>
            <input
              className="h-10 w-full border"
              placeholder="https://"
            ></input>
            <p></p>
          </div>
          <Button className="w-[246px] ">Continue</Button>
        </div>
      </div>
    </div>
  );
};
