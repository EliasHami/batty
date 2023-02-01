"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { API } from 'aws-amplify'
import { Step, StepLabel, Stepper, Box, Button, Typography } from '@mui/material'
import { SubmitHandler, useForm, UseFormProps, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import type { Construction } from 'src/models'
import { Link } from 'src/components'
import { ConstructionCreate, ConstructionUpdate } from 'src/ui-components'

type AddEditProps = {
  construction?: Construction
}

const steps = ["Configuration", "Select Parts"]

const AddEdit: React.FC<AddEditProps> = ({ construction }) => {
  const router = useRouter()
  const [activeStep, setActiveStep] = useState(0)

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  // const isStepFailed = (step: number) => {
  //   if (step === 0) {
  //     return Boolean(errors.name || errors.address || errors.description || errors.customer)
  //   } else if (step === 1) return Boolean(errors.parts)
  // }

  return (
    <>
      <Link href="/constructions" className="btn btn-link">&#60;- Back</Link>
      <Box sx={{ width: '100%' }}>
        <h1>{construction ? 'Add Construction' : 'Edit Construction'}</h1>
        <Stepper activeStep={activeStep} sx={{ mb: "100px" }}>
          {steps.map((label, index) => {
            const labelProps: {
              optional?: React.ReactNode
              error?: boolean
            } = {}
            // if (isStepFailed(index)) {
            //   labelProps.optional = (
            //     <Typography variant="caption" color="error">
            //       Missing required fields
            //     </Typography>
            //   );
            //   labelProps.error = true;
            // }
            return <Step key={label}><StepLabel {...labelProps}>{label}</StepLabel></Step>
          })}
        </Stepper>
        {steps[activeStep] === "Configuration" && (
          construction ? <ConstructionUpdate id={construction.id} /> : <ConstructionCreate />
        )}
        {/* {steps[activeStep] === "Select Parts" && (
            <div className="form-row">
              <Parts />
            </div>)} */}
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleNext} disabled={activeStep === steps.length - 1}>
            Next
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default AddEdit