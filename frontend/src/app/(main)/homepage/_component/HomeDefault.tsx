import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, ChevronDown, Copy } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export const HomeDefault = () => {
  return (
    <div className=" flex items-center gap-6 flex-col">
      <div className="w-[907px] h-fit flex flex-col p-6 gap-3 border border-gray-400 rounded-[8px]">
        <div className="gap-4 flex flex-col">
          <div className="flex justify-between">
            <div className="flex gap-3 ">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p>Jake</p>
                <p>buymeacoffee.com/baconpancakes1</p>
              </div>
            </div>
            <Button>
              <Copy /> Share page link
            </Button>
          </div>
          <p className="w-full border border-gray-400"></p>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-center">
              <p>Earnings</p>
              <div className="flex gap-2 px-4 py-2">
                <p>Last 30 days</p>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <ChevronDown />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Last 30 days</DropdownMenuItem>
                    <DropdownMenuItem>Last 90 days</DropdownMenuItem>
                    <DropdownMenuItem>All time</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <p>$450</p>
          </div>
        </div>
      </div>
      <div className=" w-[907px] flex flex-col gap-3 ">
        <div className="flex  justify-between">
          <p>Recent transactions</p>
          <div className="flex">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuSeparator />
                <div className="flex items-center">
                  <Checkbox />
                  <DropdownMenuItem> $1</DropdownMenuItem>
                </div>
                <div className="flex items-center">
                  <Checkbox />
                  <DropdownMenuItem> $2</DropdownMenuItem>
                </div>
                <div className="flex items-center">
                  <Checkbox />
                  <DropdownMenuItem> $3</DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <p>Amount</p>
          </div>
        </div>
        <div className="border border-gray-400 rounded-[8px] p-6 flex gap-3 flex-col">
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <Avatar>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p>Guest</p>
                <p>instagram.com/welesley</p>
              </div>
            </div>
            <div className="w-[259px] flex flex-col items-end">
              <p>+ $1</p>
              <p>10 hours ago</p>
            </div>
          </div>
          <p>
            Thank you for being so awesome everyday! You always manage to
            brighten up my day when I’m feeling down. Although $1 isn’t that
            much money it’s all I can contribute at the moment
          </p>
        </div>
      </div>
    </div>
  );
};
