import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";
import { FormInput } from "../_component/FormInput";
import { Button } from "@/components/ui/button";

export const Step2 = () => {
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  console.log(email, password);


  return (

    <Card className="w-[407px] h-[256px] border-none shadow-none">
      <CardHeader className="flex flex-col gap-[6px] p-6">
        <CardTitle>Welcome, baconpancakes1</CardTitle>
        <CardDescription>Connect email and set a password</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col pb-6">
        <FormInput
          label="username"
          type="email"
          placeholder="Enter email here"
          error=""
          setChange={setEmail}
        />
        <FormInput
          label="password"
          type="password"
          placeholder="Enter password here"
          error=""
          setChange={setPassword}
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="w-full">
          Continue
        </Button>
      </CardFooter>
    </Card>

  );
};
