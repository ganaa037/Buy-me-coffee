"use client"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
const formSchema = z.object({
    email: z.string().min(2, { message: "Please enter a valid email" }),
    password: z.string().min(8, { message: "" })
})
export default function Page() {
    // const [change, setChange] = useState("")
    // setChange(change)
    const router = useRouter()
    const handleClick = () => {
        router.push("sign-up")
    }
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    }
    return (
        <div className="h-screen gap-[248px] flex-col flex ">
            <div className="w-full justify-end flex pt-8">
                <Button onClick={handleClick}>
                    Sign up
                </Button>
            </div>
            <Card className="w-[407px] h-fit border-none shadow-none">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <CardHeader className="flex flex-col gap-[6px] p-6">
                            <CardTitle>Welcome back</CardTitle>
                        </CardHeader>
                        <CardContent className='flex flex-col pb-6 gap-3'>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="Enter email here" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Enter password here" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button className="w-full">Deploy</Button>
                        </CardFooter>
                    </form>
                </Form>
            </Card>
        </div>
    )}