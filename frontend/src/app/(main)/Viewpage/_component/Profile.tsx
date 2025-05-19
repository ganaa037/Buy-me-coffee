import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Coffee, Heart } from "lucide-react";

export const Profile = () => {
  return (
    <div className="flex gap-5 px-20">
      <div className="w-[632px] h-fit gap-5 flex flex-col">
        <div className=" p-6 border flex flex-col rounded-[8px] gap-4">
          <div className="flex justify-between">
            <div className="flex gap-3">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <p>Jake</p>
            </div>
            <Button>Edit page</Button>
          </div>
          <p className="w-full border"></p>
          <p>About Jake</p>
          <p>
            I’m a typical person who enjoys exploring different things. I also
            make music art as a hobby. Follow me along.
          </p>
        </div>
        <div className="border rounded-[8px] p-6 gap-[18px]">
          <p>Social media URL</p>
          <p>https://buymeacoffee.com/spacerulz44</p>
        </div>
        <div className="border rounded-[8px] p-6 gap-[18px]">
          <p>Recent Supporters</p>
          <div className="w-[584px] p-6 flex flex-col items-center">
            <div className="p-[17.78px]">
              <Heart className="" />
            </div>
            <p> Be the first one to support Jake</p>
          </div>
        </div>
      </div>
      <div className="w-[628px] border">
        <p>Buy Jake a Coffee</p>
        <div className="flex">
          <p>Select amount</p>
          <div>
            <Coffee />
            <p>$1S</p>
          </div>
        </div>
      </div>
    </div>
  );
};
