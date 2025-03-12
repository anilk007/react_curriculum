
import {useState} from 'react'
import './StepFunction.css'

import DisplayMessage from './DisplayMessage';

function StepFunction() {
   
  const  [step, setStep] =  useState(1);
    
    const messages = [
        "step-1 : Learn React",
        "step-2 : Apply for a job",
        "step-3 : invest job income"
    ]


    const handlePrevious = () => {
        setStep(prev => Math.max(1, prev-1))
    }


    const handleNext = () => {
        setStep(prev => Math.min(3, prev+1))
    }

   
    return (
        <div>
            StepFunction

            <button name="step-1" className={step===1 ? 'active' : 'non-active'}
            onClick={() => setStep(1)}>1</button>

            <button name="step-2" className={step===2 ? 'active' : 'non-active'}
            onClick={() => setStep(2)}>2</button>

            <button name="step-3" className={step===3 ? 'active' : 'non-active'}
            onClick={() => setStep(3)}>3</button>

            <DisplayMessage message={messages[step-1]}></DisplayMessage>

            <button name="previous" onClick={handlePrevious}>previous</button>

            <button name="next" onClick={handleNext} >next</button>


        </div>
    )
}

export default StepFunction
