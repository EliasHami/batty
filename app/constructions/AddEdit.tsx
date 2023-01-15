"use client"
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm, UseFormProps, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { constructionService, alertService, Alert } from 'services'
import { Construction, constructionSchema } from 'types'
import { getErrorMessage } from 'helpers'
import { getTabProps, Link, TabPanel } from 'components'
import Parts from './Parts'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react'

type AddEditProps = {
  construction?: Construction | null
}

const AddEdit: React.FC<AddEditProps> = ({ construction }) => {
  const isAddMode = !construction
  const router = useRouter()
  const [eventKey, setEventKey] = useState(0)

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
      router.push('.')
    } catch (error) {
      alertService.error(getErrorMessage(error))
    }
  }

  const updateUser = async (id: number, data: Construction) => {
    try {
      await constructionService.update(id, data)
      alertService.success('Construction updated successfully', { keepAfterRouteChange: true } as Alert)
      router.push('.')
    } catch (error) {
      alertService.error(getErrorMessage(error))
    }
  }

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setEventKey(newValue)
  }

  return (
    <FormProvider {...methods} >
      <form id="hook-form" onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ width: '100%' }}>
          <h1>{isAddMode ? 'Add Construction' : 'Edit Construction'}</h1>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={eventKey} onChange={handleTabChange} aria-label="constructions tabs">
              <Tab label="Configuration" {...getTabProps(0)} />
              <Tab label="Parts" {...getTabProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={eventKey} index={0}>
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
                <label>Address</label>
                <input type="text" {...register("address" as never)} className={'form-control' + (errors.address ? ' is-invalid' : '')} />
                <div className="invalid-feedback">{errors.address?.message}</div>
              </div>
              <div className="form-group col">
                <label>Estimate&apos;s validity</label>
                <input type="text" {...register("estimate_validity" as never)} className={'form-control' + (errors.estimate_validity ? ' is-invalid' : '')} />
                <div className="invalid-feedback">{errors.estimate_validity?.message}</div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={eventKey} index={1}>
            <div className="form-row">
              <Parts />
            </div>
          </TabPanel>
          <div className="form-row">
            <div className="form-group">
              <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary mr-2">
                {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                Save
              </button>
              <button
                onClick={() => reset(formOptions.defaultValues)}
                type="button"
                disabled={formState.isSubmitting}
                className="btn btn-secondary">
                Reset
              </button>
              <Link href="/constructions" className="btn btn-link">Cancel</Link>
            </div>
          </div>
        </Box>
      </form>
    </FormProvider>
  )
}

export default AddEdit