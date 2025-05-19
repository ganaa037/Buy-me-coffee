import { Button } from "@/components/ui/button";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Coffee, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Profile = () => {
  return (
    <div className="flex gap-5 px-20 h-screen items-center">
      <div className="w-1/2 h-fit gap-5 flex flex-col">
        <div className=" p-6 border flex flex-col rounded-[8px] gap-4 bg-white">
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
        <div className="border rounded-[8px] p-6 gap-[18px] flex w-full h-fit flex-col">
          <p>Recent Supporters</p>
          <div className="w-full h-fit p-6 flex  items-center">
            <div className="p-[17.78px]">
              <Heart className="" />
            </div>
            <p> Be the first one to support Jake</p>
          </div>
        </div>
      </div>
      <div className="bg-white w-1/2 border p-6 flex gap-8 flex-col h-fit rounded-[8px]">
        <div className="flex gap-6 flex-col">
          <p>Buy Jake a Coffee</p>
          <div className="flex flex-col ">
            <p>Select amount:</p>
            <div className="flex gap-4 ">
              <Button variant={"secondary"}><Coffee />$1</Button>
              <Button variant={"secondary"}> <Coffee />$2</Button>
              <Button variant={"secondary"}><Coffee />  $5</Button>
              <Button variant={"secondary"}><Coffee />$10</Button>
            </div>
          </div>
        </div>

        <div className="gap-5 flex flex-col">
          <p>Enter BuyMeCoffee or social acount URL:</p>
          <Input placeholder="buymeacoffee.com/" />

          <div>
            <p>Special message:</p>
            <Textarea className="h-[131px]" placeholder="Please write your message here" />
          </div>
        </div>
        <Button>Support</Button>
      </div>
    </div>
  );
};
