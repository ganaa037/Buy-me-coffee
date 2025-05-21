import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Camera } from 'lucide-react'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export const Setting = () => {
    return (


        <div className="flex flex-col items-center gap-8 ">
            <p className='w-[650px] text-[#09090B] text-[24px] font-semibold leading-8'>My account</p>
            <div className='p-6 border rounded-[8px]'>
                <div className="flex gap-6 flex-col  h-fit w-[602px] ">
                    <p className="text-[16px] font-bold text-[#09090B]">Personal Info</p>
                    <div className='flex flex-col gap-3'>

                        <p>Add photo</p>
                        <div className="relative size-40">
                            <div className="relative">
                                <Input
                                    type="file"
                                    accept="image/*"

                                    className="text-transparent size-[160px] rounded-full border-dashed border-black "
                                />
                                <Camera className="absolute top-15 left-17" />

                            </div>
                        </div>
                        {/* {filePreview && (
                        <Image
                            src={filePreview}
                            alt="img"
                            width={160}
                            height={160}
                            className="rounded-full object-cover absolute top-0"
                        />
                    )} */}
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p>Name</p>
                        <Input
                            className="w-full h-10 border"
                            placeholder="Enter your name here"

                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p>About</p>

                        <textarea
                            className="h-[131px] w-full border rounded-md p-2"
                            placeholder="Write about yourself here"

                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p>Social media URL</p>

                        <Input
                            className="h-10 w-full border"
                            placeholder="https://"

                        />
                    </div>

                    <Button className="w-full " type="submit">
                        Save changes
                    </Button>
                </div>
            </div>
            <div className="flex gap-6 flex-col w-[650px] h-fit border rounded-[8px] p-6">
                <p className="text-lg font-semibold">Complete your profile page</p>
                <div className='flex flex-col gap-3'>

                    <p>Add photo</p>
                    <div className="relative">
                        <Input
                            className="w-full h-10 border"
                        />

                    </div>


                </div>
                <div className='flex flex-col gap-3'>
                    <p>Name</p>
                    <Input
                        className="w-full h-10 border"
                        placeholder="Enter your name here"

                    />
                </div>
                <Button className="w-full " type="submit">
                    Save changes                </Button>
            </div>


            <div className=" h-fit w-[650px] flex-col flex gap-6 rounded-[8px] border p-6">
                <p>Payment details</p>
                <div className="flex flex-col gap-2">
                    <p>Select country</p>

                    <Select>
                        <SelectTrigger className="w-full">
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
                </div>



                <div className="flex w-full gap-3">
                    <div className='w-1/2'>
                        <p>First name</p>

                        <Input placeholder="Enter your name here" />
                    </div>
                    <div className='w-1/2'>
                        <p>Last name</p>

                        <Input placeholder="Enter your name here" />
                    </div>
                </div>
                <div>
                    <p>Enter card number</p>

                    <Input
                        type="number"
                        placeholder="XXXX-XXXX-XXXX-XXXX"

                    />
                </div>

                <div className="flex w-full gap-4">
                    <div>
                        <p>Expires</p>

                        <Input
                            type="month"
                            placeholder="Enter your name here"

                        />
                    </div>
                    <div>
                        <p>year</p>
                        <Input
                            type=""
                            placeholder="Enter your name here"
                        />
                    </div>
                    <div>
                        <p>CVC</p>
                        <Input
                            type=""
                            placeholder="Enter your name here"
                        />
                    </div>
                </div>
                <Button type="submit" className=" w-full">
                    Save changes
                </Button>
            </div>
            <div className='flex flex-col gap-3 w-[650px] border rounded-[8px] p-6'>
                <p>Success page</p>
                <div>
                    <p>Confirmation message</p>
                    <textarea
                        className="h-[131px] w-full border rounded-md p-2"
                        placeholder="Write about yourself here"

                    />
                </div>
                <Button type="submit" className=" w-full">
                    Save changes
                </Button>
            </div>
        </div>

    )
}
