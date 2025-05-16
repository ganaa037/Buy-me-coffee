"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import { Signup } from './Signup';

export default function Page() {
    const router = useRouter();
    const handleClick = () => {
        router.push("sign-in");
    };
    return (
        <div className='flex justify-center items-center w-full h-full relative'>

            <Button className='absolute top-8 right-20' variant='secondary' onClick={handleClick}>Log in</Button>

            <Signup />
        </div>
    )
}

