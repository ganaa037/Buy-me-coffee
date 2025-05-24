"use client"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { FormInput } from '../_component/FormInput'
import { useRouter } from "next/navigation"
export default function Page() {
    // const [change, setChange] = useState("")
    // setChange(change)
    const router = useRouter()
    const handleClick = () => {
        router.push("sign-up")
    }
    const handleOnclick = () => {
        router.push("createProfile")
    }

    return (<div className="h-screen gap-[248px] flex-col flex ">
        <div className="w-full justify-end flex pt-8">

            <Button onClick={handleClick}>
                Sign up
            </Button>
        </div>
        <Card className="w-[407px] h-fit border-none shadow-none">
            <CardHeader className="flex flex-col gap-[6px] p-6">
                <CardTitle>Welcome back</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col pb-6'>
                <FormInput label='username' type='email' placeholder='Enter email here' error='' />
                <FormInput label='password' type='password' placeholder='Enter password here' error='' />

            </CardContent>
            <CardFooter className="flex justify-between">

                <Button onClick={handleOnclick} className="w-full">Continue</Button>
            </CardFooter>
        </Card>
    </div>
    )
}
