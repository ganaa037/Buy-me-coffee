import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export const HomeNav = () => {
  return (
    <div className="flex justify-between px-4 py-2">
      <div className="flex items-center gap-2">
        <Image src={"logo.svg"} alt="logo" width={24} height={24} />
        <p className="text-[#000] text-4 font-bold leading-5">Buy me coffee</p>
      </div>
      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <p>Jake</p>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log in</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
