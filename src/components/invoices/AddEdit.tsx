import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm, UseFormProps, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { alertService, Alert } from 'src/services'
import { getErrorMessage } from 'src/utils'
import { Link } from 'src/components'
import { DataStore } from 'aws-amplify'
import { useState } from 'react'
import { Step, StepLabel, Stepper, Box, Button, Typography, FormControl, InputLabel, Input, FormHelperText, Select, MenuItem } from '@mui/material'

import { Invoice } from 'src/models'
import { object, number, string, array, date } from 'yup'
import { DatePicker } from '@mui/x-date-pickers'

const invoiceSchema = object().shape({
  id: string(),
  number: string().required(),
  amount: number().required("Amount is required"),
  customerID: string().required("Customer is required"),
  constructionID: string().required("Construction is required"),
  issueDate: date().required("Issue date is required"),
  expirationDate: date().required("Expiration date is required"),
  status: string().required("Status is required"),
  workStartDate: date().required("Work start date is required"),
  workDuration: number().required("Work duration is required"),
  workDurationUnit: string()
})

type AddEditProps = {
  invoice?: Invoice | null
}

const AddEdit: React.FC<AddEditProps> = ({ invoice }) => {
  const isAddMode = !invoice
  const router = useRouter()

  const formOptions: UseFormProps<Invoice> = {
    resolver: yupResolver(invoiceSchema),
  }

  if (!isAddMode) {
    formOptions.defaultValues = invoice
  } else {
    // formOptions.defaultValues = invoiceSchema.cast(invoice)
  }

  const methods = useForm<Invoice>(formOptions)
  const { register, handleSubmit, formState } = methods
  const { errors } = formState

  const onSubmit: SubmitHandler<Invoice> = (data) => {
    return isAddMode
      ? handleCreateInvoice(data)
      : handleUpdateInvoice(invoice.id, data)
  }

  const handleCreateInvoice = async (invoice: Invoice) => {
    try {
      // @ts-ignore
      await DataStore.save(new Invoice(invoice))
      alertService.success('Invoice added successfully', { keepAfterRouteChange: true } as Alert)
      router.push('/invoices')
    } catch (error) {
      console.log('error', error)
      alertService.error(getErrorMessage(error))
    }
  }

  const handleUpdateInvoice = async (id: string, invoice: Invoice) => {
    try {
      const original = await DataStore.query(Invoice, id)
      if (!original) return
      await DataStore.save(
        Invoice.copyOf(original, updated => {
          updated.number = invoice.number
          updated.amount = invoice.amount
          updated.customerID = invoice.customerID
          updated.constructionID = invoice.constructionID
          updated.issueDate = invoice.issueDate
          updated.expirationDate = invoice.expirationDate
          updated.status = invoice.status
          updated.workStartDate = invoice.workStartDate
          updated.workDuration = invoice.workDuration
          updated.workDurationUnit = invoice.workDurationUnit
        })
      )
      alertService.success('Invoice updated successfully', { keepAfterRouteChange: true } as Alert)
      router.push('/invoices')
    } catch (error) {
      console.log('error', error)
      alertService.error(getErrorMessage(error))
    }
  }

  return (
    <FormProvider {...methods} >
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
        id="hook-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Link href="/invoices" className="btn btn-link">&#60;- Back</Link>
        <Box sx={{ width: '100%' }}>
          <h1>{isAddMode ? 'Add Invoice' : invoice.number}</h1>
          <Box>
            <FormControl error={Boolean(errors.amount)} variant="standard">
              <InputLabel htmlFor="amount">Amount</InputLabel>
              <Input id="amount" aria-describedby="amount-error" {...register("amount" as never)} />
              {errors.amount && <FormHelperText id="amount-error">{errors.amount.message}</FormHelperText>}
            </FormControl>
            <FormControl error={Boolean(errors.customerID)} variant="standard">
              <InputLabel id="customerID-label">Amount</InputLabel>
              <Select
                labelId="customerID-label"
                id="customerID"
                label="Amount"
                aria-describedby="customerID-error" {...register("customerID" as never)}
              >
                <MenuItem value={10}>Customer 1</MenuItem>
                <MenuItem value={20}>Customer 2</MenuItem>
                <MenuItem value={30}>Customer 3</MenuItem>
              </Select>
              {errors.customerID && <FormHelperText id="customerID-error">{errors.customerID.message}</FormHelperText>}
            </FormControl>
            <FormControl error={Boolean(errors.issueDate)} variant="standard">
              <InputLabel htmlFor="issueDate">Amount</InputLabel>
              <DatePicker
                label="Basic example"

                renderInput={(params) => <Input id="issueDate" {...params} />}
                {...register("issueDate" as never)}
              />
              {errors.issueDate && <FormHelperText id="issueDate-error">{errors.issueDate.message}</FormHelperText>}
            </FormControl>
            <FormControl error={Boolean(errors.amount)} variant="standard">
              <InputLabel htmlFor="amount">Amount</InputLabel>
              <Input id="amount" aria-describedby="amount-error" {...register("amount" as never)} />
              {errors.amount && <FormHelperText id="amount-error">{errors.amount.message}</FormHelperText>}
            </FormControl>
            <FormControl error={Boolean(errors.amount)} variant="standard">
              <InputLabel htmlFor="amount">Amount</InputLabel>
              <Input id="amount" aria-describedby="amount-error" {...register("amount" as never)} />
              {errors.amount && <FormHelperText id="amount-error">{errors.amount.message}</FormHelperText>}
            </FormControl>
            <FormControl error={Boolean(errors.amount)} variant="standard">
              <InputLabel htmlFor="amount">Amount</InputLabel>
              <Input id="amount" aria-describedby="amount-error" {...register("amount" as never)} />
              {errors.amount && <FormHelperText id="amount-error">{errors.amount.message}</FormHelperText>}
            </FormControl>
            <FormControl error={Boolean(errors.amount)} variant="standard">
              <InputLabel htmlFor="amount">Amount</InputLabel>
              <Input id="amount" aria-describedby="amount-error" {...register("amount" as never)} />
              {errors.amount && <FormHelperText id="amount-error">{errors.amount.message}</FormHelperText>}
            </FormControl>
            <FormControl error={Boolean(errors.amount)} variant="standard">
              <InputLabel htmlFor="amount">Amount</InputLabel>
              <Input id="amount" aria-describedby="amount-error" {...register("amount" as never)} />
              {errors.amount && <FormHelperText id="amount-error">{errors.amount.message}</FormHelperText>}
            </FormControl>
            <FormControl error={Boolean(errors.amount)} variant="standard">
              <InputLabel htmlFor="amount">Amount</InputLabel>
              <Input id="amount" aria-describedby="amount-error" {...register("amount" as never)} />
              {errors.amount && <FormHelperText id="amount-error">{errors.amount.message}</FormHelperText>}
            </FormControl>
          </Box>
          {/* <div className="form-row">
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
          </div>
          <div className="form-row">
            <div className="form-group"> */}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>

            <Button type="submit" disabled={formState.isSubmitting}>
              {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
              Save
            </Button>

          </Box>
          {/* </div>
          </div>
        </Box> */}
        </Box>
      </Box>
    </FormProvider>
  )
}

export default AddEdit