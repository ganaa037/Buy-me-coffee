"use client";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Step1 } from "@/app/(auth)/sign-up/Step1";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

const formSchema = z.object({
  names: z.string({ required_error: "Нэрээ оруулна уу" }).min(2, { message: "Нэр 2-оос дээш тэмдэгттэй байх ёстой" }),
  photo: z.string({ required_error: "Зураг оруулна уу" }).min(1, { message: "Зураг сонгоно уу" }),
  about: z.string().min(1, { message: "Өөрийн тухай мэдээлэл оруулна уу" }),
  URL: z.string().min(1, { message: "Сошиал холбоос оруулна уу" }),
});
names: z
  .string({ required_error: "ner oruul" })
  .min(2, { message: "2 oos deesh useg orno" }),
  photo: z
    .string({ required_error: "zurag oruul" })
    .min(1, { message: "zurgaa oruulna uu" }),
    about: z.string().min(1, { message: "Please enter info about yourself" }),
      URL: z.string().min(1, { message: "Please enter a social link" }),
});

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

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>, fieldOnChange: (value: string) => void) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setFilePreview(fileUrl); // Store the file URL for preview
      fieldOnChange(fileUrl); // Update the form's photo field
    }
  };
});

const handleSubmit = (values: z.infer<typeof formSchema>) => {
  console.log(values);
  Step1();
};

return (
  <Form {...form}>
    <form onSubmit={form.handleSubmit(handleSubmit)} className="flex justify-center">
      <div className="w-[510px] h-fit border p-6 rounded-lg">
        <div className="flex gap-6 flex-col">
          <p className="text-lg font-semibold">Профайлаа бөглөнө үү</p>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="flex justify-center">
              <div className="w-[510px] h-fit border ">
                <div className="flex gap-6 flex-col justify-end">
                  <p>Complete your profile page</p>

                  <FormField
                    control={form.control}
                    name="photo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Зураг нэмэх</FormLabel>
                        <FormControl>
                          <div className="flex items-center gap-4">
                            <Input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleFileChange(e, field.onChange)}
                              className="w-full border"
                            />
                            {filePreview && (
                              <Image
                                src={filePreview}
                                alt="Урьдчилан харах"
                                width={80}
                                height={80}
                                className="rounded-full object-cover"
                              />
                            )}
                          </div>
                        </FormControl>
                        <FormDescription>Профайлын зургаа оруулна уу.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="names"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Нэр</FormLabel>
                        <FormControl>
                          <Input
                            className="w-full h-10 border"
                            placeholder="Таны нэр"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>Таны бүрэн нэр.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="photo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Add photo </FormLabel>
                        <FormControl>
                          <Input
                            className="rounded-[9999px] size-[160px] border border-black text-transparent"
                            type="file"
                            placeholder="shadcn"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
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
                            placeholder="shadcn"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="about"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Тухай</FormLabel>
                        <FormControl>
                          <textarea
                            className="h-[131px] w-full border rounded-md p-2"
                            placeholder="Өөрийн тухай бичнэ үү"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>Өөрийн тухай товч мэдээлэл.</FormDescription>
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
                          <Input
                            className="h-[131px] w-full border"
                            placeholder="shadcn"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="URL"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Сошиал медиа холбоос</FormLabel>
                        <FormControl>
                          <Input
                            className="h-10 w-full border"
                            placeholder="https://"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>Таны сошиал медиа профайлын холбоос.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button className="w-[246px] mt-4" type="submit">
                    Үргэлжлүүлэх
                  </Button>
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
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button className="w-[246px] " type="submit">
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Form>
        );
};