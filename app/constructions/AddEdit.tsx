"use client"
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm, UseFormProps, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { constructionService, alertService, Alert } from 'services'
import { Construction, constructionSchema } from 'types'
import { getErrorMessage } from 'helpers'
import { Link } from 'components'
import Parts from './Parts'

import { useState } from 'react'
import { Step, StepLabel, Stepper, Box, Button, Typography } from '@mui/material'

type AddEditProps = {
  construction?: Construction | null
}

const steps = ["Configuration", "Select Parts"]

const AddEdit: React.FC<AddEditProps> = ({ construction }) => {
  const isAddMode = !construction
  const router = useRouter()
  const [activeStep, setActiveStep] = useState(0)

  const formOptions: UseFormProps<Construction> = {
    resolver: yupResolver(constructionSchema),
    defaultValues: constructionSchema.cast(construction)
  }

  if (!isAddMode) {
    formOptions.defaultValues = construction
  }

  const methods = useForm<Construction>(formOptions)
  const { register, handleSubmit, reset, formState } = methods
  const { errors } = formState

  const onSubmit: SubmitHandler<Construction> = (data) => {
    return isAddMode
      ? createUser(data)
      : updateUser(construction.id, data)
  }

  const createUser = async (data: Construction) => {
    try {
      await constructionService.create(data)
      alertService.success('Construction added successfully', { keepAfterRouteChange: true } as Alert)
      router.push('./constructions')
    } catch (error) {
      alertService.error(getErrorMessage(error))
    }
  }

  const updateUser = async (id: number, data: Construction) => {
    try {
      await constructionService.update(id, data)
      alertService.success('Construction updated successfully', { keepAfterRouteChange: true } as Alert)
      router.push('./constructions')
    } catch (error) {
      alertService.error(getErrorMessage(error))
    }
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const isStepFailed = (step: number) => {
    if (step === 0) {
      return Boolean(errors.name || errors.address || errors.description || errors.customer)
    } else if (step === 1) return Boolean(errors.parts)
  }

  return (
    <FormProvider {...methods} >
      <form id="hook-form" onSubmit={handleSubmit(onSubmit)}>
        <Link href="/constructions" className="btn btn-link">&#60;- Back</Link>
        <Box sx={{ width: '100%' }}>
          <h1>{isAddMode ? 'Add Construction' : 'Edit Construction'}</h1>
          <Stepper activeStep={activeStep} sx={{ mb: "100px" }}>
            {steps.map((label, index) => {
              const labelProps: {
                optional?: React.ReactNode
                error?: boolean
              } = {}
              if (isStepFailed(index)) {
                labelProps.optional = (
                  <Typography variant="caption" color="error">
                    Missing required fields
                  </Typography>
                );
                labelProps.error = true;
              }
              return <Step key={label}><StepLabel {...labelProps}>{label}</StepLabel></Step>
            })}
          </Stepper>
          {steps[activeStep] === "Configuration" && (
            <div className="form-row">
              <div className="form-group col">
                <label>Name</label>
                <input type="text" {...register("name" as never)} className={'form-control' + (errors.name ? ' is-invalid' : '')} />
                <div className="invalid-feedback">{errors.name?.message}</div>
              </div>
              <div className="form-group col">
                <label>Address</label>
                <input type="text" {...register("address" as never)} className={'form-control' + (errors.address ? ' is-invalid' : '')} />
                <div className="invalid-feedback">{errors.address?.message}</div>
              </div>
              <div className="form-group col">
                <label>Description</label>
                <input type="text" {...register("description" as never)} className={'form-control' + (errors.description ? ' is-invalid' : '')} />
                <div className="invalid-feedback">{errors.description?.message}</div>
              </div>
              <div className="form-group col">
                <label>Customer</label>
                <input type="text" {...register("customer" as never)} className={'form-control' + (errors.customer ? ' is-invalid' : '')} />
                <div className="invalid-feedback">{errors.customer?.message}</div>
              </div>
              <div className="form-group col">
                <label>Estimate&apos;s validity</label>
                <input type="text" {...register("estimate_validity" as never)} className={'form-control' + (errors.estimate_validity ? ' is-invalid' : '')} />
                <div className="invalid-feedback">{errors.estimate_validity?.message}</div>
              </div>
            </div>)}
          {steps[activeStep] === "Select Parts" && (
            <div className="form-row">
              <Parts />
            </div>)}
          <div className="form-row">
            <div className="form-group">
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
                {activeStep === steps.length - 1 ? (
                  <Button type="submit" disabled={formState.isSubmitting}>
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Save
                  </Button>
                ) : (
                  <Button onClick={handleNext}>
                    Next
                  </Button>
                )}
              </Box>
            </div>
          </div>
        </Box>
      </form>
    </FormProvider>
  )
}

export default AddEdit