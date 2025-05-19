import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { FormInput } from "../_component/FormInput";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

export const Step1 = ({ setStep }: { setStep: Dispatch<SetStateAction<number>> }) => {
  const [username, setUsername] = useState<string>("")
  const [error, setError] = useState<string>()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {

    console.log(values)
  }
  const handleSubmitUsername = () => {
    setError(undefined)
    console.log(username);
    setStep(1)


  }
  return (


    <Card className="w-1/2 border-none shadow-none">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} >
          <CardHeader className="flex flex-col gap-[6px] p-6">
            <CardTitle>Create Your Account</CardTitle>
            <CardDescription>Choose a username for your page</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
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
        </form>
      </Form>
    </Card>

  );
};
