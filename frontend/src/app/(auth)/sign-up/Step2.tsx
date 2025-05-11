import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { FormInput } from '../_component/FormInput'

export const Step2 = () => {
    return (
        <div className=''>
            <CardHeader className="flex flex-col gap-[6px] p-6">
                <CardTitle>Welcome, baconpancakes1</CardTitle>
                <CardDescription>Connect email and set a password</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col pb-6'>
                <FormInput label='username' type='email' placeholder='Enter email here' error='' />
                <FormInput label='password' type='password' placeholder='Enter password here' error='' />

            </CardContent>
        </div>
    )
}
