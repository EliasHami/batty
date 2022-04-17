import { useRouter } from 'next/router'
import { SubmitHandler, useForm, UseFormProps } from 'react-hook-form'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

import { constructionService, alertService } from 'services'
import { Construction, constructionSchema } from 'types'

type AddEditProps = {
  construction?: Construction
}

const getErrorMessage = (error: unknown) => { // TODO : move to helper
  if (error instanceof Error) return error.message
  return String(error)
}

const AddEdit:React.FC<AddEditProps> = ({ construction }) => {
  const isAddMode = !construction
  const router = useRouter()


  const formOptions:UseFormProps<Construction> = { resolver: yupResolver(constructionSchema) }

  if(!isAddMode) {
    formOptions.defaultValues = construction
  }

  const { register, handleSubmit, reset, formState } = useForm<Construction>(formOptions)
  const { errors } = formState

  const onSubmit: SubmitHandler<Construction> = (data) => {
    return isAddMode
      ? createUser(data)
      : updateUser(construction.id, data)
  }

  const createUser = async (data:Construction) => {
    try {
      await constructionService.create(data)
      alertService.success('Construction added successfully', { keepAfterRouteChange: true })
      router.push('.')
    } catch (error) {
      alertService.error(getErrorMessage(error))
    }
  }

  const updateUser = async (id:number, data:Construction) => {
    try {
      await constructionService.update(id, data)
      alertService.success('Construction updated successfully', { keepAfterRouteChange: true })
      router.push('.')
    } catch (error) {
      alertService.error(getErrorMessage(error))
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>{isAddMode ? 'Add Construction' : 'Edit Construction'}</h1>
      <div className="form-row">
        <div className="form-group col">
          <label>Name</label>
          <input type="text" {...register("name" as never)} className={'form-control' + (errors.name ? ' is-invalid' : '')}/>
          <div className="invaid-feedback">{errors.name?.message}</div>
        </div>
        <div className="form-group col-5">
          <label>Address</label>
          <input type="text" {...register("address" as never)} className={'form-control' + (errors.address ? ' is-invalid' : '')}/>
          <div className="invaid-feedback">{errors.address?.message}</div>
        </div>
        <div className="form-group col-2">
          <label>Type</label>
          <input type="text" {...register("type" as never)} className={'form-control' + (errors.type ? ' is-invalid' : '')}/>
          <div className="invaid-feedback">{errors.type?.message}</div>
        </div>
      </div>
    </form>
  )
}

export default AddEdit