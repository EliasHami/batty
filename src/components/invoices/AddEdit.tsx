import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm, UseFormProps, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { alertService, Alert } from 'src/services'
import { getErrorMessage } from 'src/utils'
import { Link } from 'src/components'
import { API } from 'aws-amplify'
import { Box, Button, FormControl, InputLabel, Input, FormHelperText, Select, MenuItem } from '@mui/material'

import { Invoice, invoiceSchema } from 'src/types'
import { createInvoice, updateInvoice } from 'src/graphql/mutations'
import { DurationUnits, Statuses } from 'src/types/API'

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
      await API.graphql({
        authMode: 'AMAZON_COGNITO_USER_POOLS',
        query: createInvoice,
        variables: {
          input: {
            ...invoice
          }
        }
      })
      alertService.success('Invoice added successfully', { keepAfterRouteChange: true } as Alert)
      router.push('/invoices')
    } catch (error) {
      console.error('error', error)
      alertService.error(getErrorMessage(error))
    }
  }

  const handleUpdateInvoice = async (id: string, invoice: Invoice) => {
    try {
      await API.graphql({
        authMode: 'AMAZON_COGNITO_USER_POOLS',
        query: updateInvoice,
        variables: {
          input: {
            ...invoice,
            id,
          }
        }
      })
      alertService.success('Invoice updated successfully', { keepAfterRouteChange: true } as Alert)
      router.push('/invoices')
    } catch (error) {
      console.error('error', error)

      alertService.error(getErrorMessage(error))
    }
  }

  return (
    <FormProvider {...methods} >
      <Box
        component="form"
        id="hook-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Link href="/invoices" className="btn btn-link">&#60;- Back</Link>
        <Box sx={{ width: '100%' }}>
          <h1>{isAddMode ? 'Add Invoice' : invoice.number}</h1>
          <Box sx={{ display: 'flex', flexDirection: 'column', pt: 2, justifyContent: 'space-between' }}>
            <FormControl error={Boolean(errors.amount)} variant="standard">
              <InputLabel htmlFor="amount">Amount</InputLabel>
              <Input
                id="amount"
                aria-describedby="amount-error"
                {...register("amount" as never)}
              />
              {errors.amount && <FormHelperText id="amount-error">{errors.amount.message}</FormHelperText>}
            </FormControl>
            <FormControl error={Boolean(errors.constructionID)} variant="standard">
              <InputLabel htmlFor="constructionID">Construction</InputLabel>
              <Select
                input={<Input id="constructionID" />}
                aria-describedby="constructionID-error"
                {...register("constructionID" as never)}
              >
                <MenuItem value={10}>Construction 1</MenuItem>
                <MenuItem value={20}>Construction 2</MenuItem>
                <MenuItem value={30}>Construction 3</MenuItem>
              </Select>
              {errors.constructionID && <FormHelperText id="constructionID-error">{errors.constructionID.message}</FormHelperText>}
            </FormControl>
            <FormControl error={Boolean(errors.customerID)} variant="standard">
              <InputLabel htmlFor="customerID">Customer</InputLabel>
              <Select
                input={<Input id="customerID" />}
                aria-describedby="customerID-error"
                {...register("customerID" as never)}
              >
                <MenuItem value={10}>Customer 1</MenuItem>
                <MenuItem value={20}>Customer 2</MenuItem>
                <MenuItem value={30}>Customer 3</MenuItem>
              </Select>
              {errors.customerID && <FormHelperText id="customerID-error">{errors.customerID.message}</FormHelperText>}
            </FormControl>
            <FormControl error={Boolean(errors.issueDate)} variant="standard">
              <InputLabel htmlFor="issueDate">Issue Date</InputLabel>
              <Input
                id="issueDate"
                type="date"
                aria-describedby="issueDate-error"
                {...register("issueDate" as never)}
              />
              {errors.issueDate && <FormHelperText id="issueDate-error">{errors.issueDate.message}</FormHelperText>}
            </FormControl>
            <FormControl error={Boolean(errors.expirationDate)} variant="standard">
              <InputLabel htmlFor="expirationDate">Expiration Date</InputLabel>
              <Input
                id="expirationDate"
                type="date"
                aria-describedby="expirationDate-error"
                {...register("expirationDate" as never)}
              />
              {errors.expirationDate && <FormHelperText id="expirationDate-error">{errors.expirationDate.message}</FormHelperText>}
            </FormControl>
            <FormControl error={Boolean(errors.workStartDate)} variant="standard">
              <InputLabel htmlFor="workStartDate">Work start date</InputLabel>
              <Input
                id="workStartDate"
                type="date"
                aria-describedby="workStartDate-error"
                {...register("workStartDate" as never)}
              />
              {errors.workStartDate && <FormHelperText id="workStartDate-error">{errors.workStartDate.message}</FormHelperText>}
            </FormControl>
            <FormControl error={Boolean(errors.workDuration)} variant="standard">
              <InputLabel htmlFor="workDuration">Work duration</InputLabel>
              <Input
                id="workDuration"
                type="number"
                aria-describedby="workDuration-error"
                {...register("workDuration" as never)}
              />
              {errors.workDuration && <FormHelperText id="workDuration-error">{errors.workDuration.message}</FormHelperText>}
            </FormControl>
            <FormControl error={Boolean(errors.workDurationUnit)} variant="standard">
              <InputLabel htmlFor="workDurationUnit">Work duration unit</InputLabel>
              <Select
                aria-describedby="workDurationUnit-error"
                input={<Input id="workDurationUnit" />}
                {...register("workDurationUnit" as never)}
              >
                {(Object.keys(DurationUnits) as Array<keyof typeof DurationUnits>).map(key =>
                  <MenuItem key={key} value={DurationUnits[key]}>{key}</MenuItem>)
                }
              </Select>
              {errors.workDurationUnit && <FormHelperText id="workDurationUnit-error">{errors.workDurationUnit.message}</FormHelperText>}
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button type="submit" disabled={formState.isSubmitting}>
              {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </FormProvider>
  )
}

export default AddEdit