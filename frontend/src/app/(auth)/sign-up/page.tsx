"use client"
import {
    Card,
    CardFooter,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { useState } from "react"
import { Step1 } from "./Step1"
import { Step2 } from "./Step2"
import { useRouter } from "next/navigation"
export default function Page() {

    const [count, setCount] = useState(0)
    const handleOnClick = () => {
        setCount(count + 1)
    }
    const StepComponent = [Step1, Step2][count]

    const router = useRouter()
    const handleClick = () => {
        router.push("sign-in")
    }

    return (
        <div className="h-screen gap-[248px] flex-col flex ">
            <div className="w-full justify-end flex pt-8">

                <Button onClick={handleClick}>
                    Log in
                </Button>
            </div>
            <Card className="w-[407px] h-[256px] border-none shadow-none">
                <StepComponent />

                <CardFooter className="flex justify-between">
                    <Button onClick={handleOnClick} className="w-full">Deploy</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
