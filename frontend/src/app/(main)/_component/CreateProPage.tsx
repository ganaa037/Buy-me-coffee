"use client";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Step1 } from "@/app/(auth)/sign-up/Step1";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { Camera } from "lucide-react";

const formSchema = z.object({
  names: z
    .string({ required_error: "ner oruul" })
    .min(2, { message: "2 oos deesh useg orno" }),
  photo: z
    .string({ required_error: "zurag oruul" })
    .min(1, { message: "zurgaa oruulna uu" }),
  about: z.string().min(1, { message: "Please enter info about yourself" }),
  URL: z.string().min(1, { message: "Please enter a social link" })
})




export const CreateproPage = () => {
  const [filePreview, setFilePreview] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      names: "",
      photo: "",
      about: "",
      URL: "",
    },
  });

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>, OnChange: (value: string) => void) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setFilePreview(fileUrl);
      OnChange(fileUrl);
    }
  };

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form values:", values);
    Step1();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex justify-center">
        <div className="flex justify-center ">
          <div className="flex gap-6 flex-col w-[510px] h-[707px]">
            <p className="text-lg font-semibold">Complete your profile page</p>

            <FormField
              control={form.control}
              name="photo"
              render={({ field }) => (

                <FormItem>
                  <FormLabel>Add photo</FormLabel>

                  <FormControl>
                    <div className="relative size-40">
                      <div className="relative">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileChange(e, field.onChange)}
                          className="text-transparent size-[160px] rounded-full border-dashed border-black "
                        />
                        <Camera className="absolute top-15 left-17" />

                      </div>
                      {filePreview && (
                        <Image
                          src={filePreview}
                          alt="img"
                          width={160}
                          height={160}
                          className="rounded-full object-cover absolute top-0"
                        />
                      )}
                    </div>

                  </FormControl>

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
                    <Input
                      className="w-full h-10 border"
                      placeholder="Enter your name here"
                      {...field}
                    />
                  </FormControl>
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
                    <textarea
                      className="h-[131px] w-full border rounded-md p-2"
                      placeholder="Write about yourself here"
                      {...field}
                    />
                  </FormControl>
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
                    <Input
                      className="h-10 w-full border"
                      placeholder="https://"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-[246px] mt-4" type="submit">
              Continue
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};