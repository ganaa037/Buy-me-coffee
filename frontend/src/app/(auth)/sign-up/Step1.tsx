
"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction, useState } from "react";
import { FormInput } from "../_component/FormInput";
export const Step1 = ({ setStep }: { setStep: Dispatch<SetStateAction<number>> }) => {
  const [username, setUsername] = useState<string>("")
  const [error, setError] = useState<string>()


  const handleSubmitUsername = () => {
    setError(undefined)
    console.log(username);
    setStep(1)


  }
  return (


    <Card className="w-1/2 border-none shadow-none">
      <CardHeader className="flex flex-col gap-[6px] p-6">
        <CardTitle>Create Your Account</CardTitle>
        <CardDescription>Choose a username for your page</CardDescription>
      </CardHeader>
      <CardContent>
        <FormInput
          label="username"
          type="username"
          placeholder="username"
          error={error}
          setChange={setUsername}

        />
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button onClick={handleSubmitUsername} className="w-full">
          Continue
        </Button>
      </CardFooter>
    </Card>

  );
}
