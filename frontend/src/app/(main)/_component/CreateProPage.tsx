"use client"
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Step1 } from "@/app/(auth)/sign-up/Step1";

const formSchema = z.object({
  names: z.string({ required_error: "ner oruul" }).min(2, { message: "2 oos deesh useg orno" }),
  photo: z.string({ required_error: "zurag oruul" }).min(1, { message: "zurgaa oruulna uu" }),
  about: z.string().min(1, { message: "Please enter info about yourself" }),
  URL: z.string().min(1, { message: "Please enter a social link" })
})

export const CreateproPage = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      names: "",
      photo: "",
      about: "",
      URL: ""
    },
  })

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    Step1()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} >
        <div className="flex justify-center">
          <div className="w-[510px] h-fit border ">
            <div className="flex gap-6 flex-col justify-end">
              <p>Complete your profile page</p>


              <FormField
                control={form.control}
                name="photo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Add photo </FormLabel>
                    <FormControl>
                      <Input className="rounded-[9999px] size-[160px] border border-black text-transparent"
                        type="file" placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="names"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input className="w-full h-10 border" placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="about"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>About</FormLabel>
                    <FormControl>
                      <Input className="h-[131px] w-full border" placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="URL"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Social media URL</FormLabel>
                    <FormControl>
                      <Input className="h-10 w-full border"
                        placeholder="https://" {...field} />
                    </FormControl>
                    <FormDescription>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-[246px] " type="submit" >Continue</Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};
