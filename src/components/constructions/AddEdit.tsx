import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm, UseFormProps, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { API } from 'aws-amplify'

import { alertService, Alert } from 'src/services'
import { getErrorMessage } from 'src/utils'
import { Link } from 'src/components'
import { useState } from 'react'
import { Step, StepLabel, Stepper, Box, Button, Typography } from '@mui/material'

import { Construction, constructionSchema } from 'src/types'
import { createConstruction, updateConstruction } from 'src/graphql/mutations'

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
  }

  if (!isAddMode) {
    formOptions.defaultValues = construction
  }

  const methods = useForm<Construction>(formOptions)
  const { register, handleSubmit, formState } = methods
  const { errors } = formState

  const onSubmit: SubmitHandler<Construction> = (data) => {
    return isAddMode
      ? handleCreateConstruction(data)
      : handleUpdateConstruction(construction.id, data)
  }

  const handleCreateConstruction = async (construction: Construction) => {
    try {
      await API.graphql({
        authMode: 'AMAZON_COGNITO_USER_POOLS',
        query: createConstruction,
        variables: {
          input: {
            ...construction
          }
        }
      })
      alertService.success('Construction added successfully', { keepAfterRouteChange: true } as Alert)
      router.push('/constructions')
    } catch (error) {
      console.log('error', error)
      alertService.error(getErrorMessage(error))
    }
  }

  const handleUpdateConstruction = async (id: string, construction: Construction) => {
    try {
      await API.graphql({
        authMode: 'AMAZON_COGNITO_USER_POOLS',
        query: updateConstruction,
        variables: {
          input: {
            ...construction,
            id,
          }
        }
      })
      alertService.success('Construction updated successfully', { keepAfterRouteChange: true } as Alert)
      router.push('/constructions')
    } catch (error) {
      console.log('error', error)
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
      return Boolean(errors.name || errors.address || errors.description || errors.customerID)
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
                <input type="text" {...register("customerID" as never)} className={'form-control' + (errors.customerID ? ' is-invalid' : '')} />
                <div className="invalid-feedback">{errors.customerID?.message}</div>
              </div>
              <div className="form-group col">
                <label>Estimate&apos;s validity</label>
                <input type="text" {...register("estimate_validity" as never)} className={'form-control' + (errors.estimate_validity ? ' is-invalid' : '')} />
                <div className="invalid-feedback">{errors.estimate_validity?.message}</div>
              </div>
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
                <Button onClick={handleNext} disabled={activeStep === steps.length - 1}>
                  Next
                </Button>
                {activeStep === steps.length - 1 && (
                  <Button type="submit" disabled={formState.isSubmitting}>
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Save
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