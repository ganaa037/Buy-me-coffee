import React, { useState } from 'react'
import { Step1 } from './Step1'
import { Step2 } from './Step2'

export const Signup = () => {
  const [step, setStep] = useState<number>(0)

  if (step === 0) {
    return <Step1 setStep={setStep} />
  } else {
    return <Step2 />
  }

}
