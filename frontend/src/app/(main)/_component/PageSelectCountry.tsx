"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
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
import { Button } from "@/components/ui/button";
const formSchema = z.object({
  country: z.string().min(1, { message: "Select country to continue" }),
  firstname: z.string().min(3, { message: "First name must match" }),
  lastname: z.string().min(3, { message: "Last name must match" }),
  cardnumber: z.string().min(3, { message: "Invalid card number" }),
  month: z.string().min(1, { message: "Invalid card number" }),
  year: z.string().min(4, { message: "Invalid card number" }),
  cvc: z.string().min(4, { message: "Invalid card number" }),
});

export const PageSelectCountry = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: "",
      firstname: "",
      lastname: "",
      cardnumber: "",
      month: "",
      year: "",
      cvc: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="flex justify-center items-center flex-col  ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="py-6 w-[510px]">
            <p className="text-[#09090B] text-6 font-semibold leading-8 h-8">
              How would you like to be paid?
            </p>
            <p>Enter location and payment details</p>
          </div>
          <div className=" h-fit w-[510px] flex-col flex gap-6">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-col gap-2">
                    <FormLabel>Select country</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger {...field} className="w-full">
                          <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="est">
                            Eastern Standard Time (EST)
                          </SelectItem>
                          <SelectItem value="cst">
                            Central Standard Time (CST)
                          </SelectItem>
                          <SelectItem value="mst">
                            Mountain Standard Time (MST)
                          </SelectItem>
                          <SelectItem value="pst">
                            Pacific Standard Time (PST)
                          </SelectItem>
                          <SelectItem value="akst">
                            Alaska Standard Time (AKST)
                          </SelectItem>
                          <SelectItem value="hst">
                            Hawaii Standard Time (HST)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <div className="flex w-full gap-3">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name here" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name here" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="cardnumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter card number</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="XXXX-XXXX-XXXX-XXXX"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex w-full gap-4">
              <FormField
                control={form.control}
                name="month"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expires</FormLabel>
                    <FormControl>
                      <Input
                        type="month"
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
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Year</FormLabel>
                    <FormControl>
                      <Input
                        type=""
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
                name="cvc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CVC</FormLabel>
                    <FormControl>
                      <Input
                        type=""
                        placeholder="Enter your name here"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit" className=" w-[246px]">
                Continue
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};
