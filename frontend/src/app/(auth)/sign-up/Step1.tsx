import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { FormInput } from "../_component/FormInput";

export const Step1 = () => {
  return (
    <div className="">
      <CardHeader className="flex flex-col gap-[6px] p-6">
        <CardTitle>Create Your Account</CardTitle>
        <CardDescription>Choose a username for your page</CardDescription>
      </CardHeader>
      <CardContent>
        <FormInput
          label="username"
          type="username"
          placeholder="username"
          error="The username is already taken"
        />
      </CardContent>
    </div>
  );
};
