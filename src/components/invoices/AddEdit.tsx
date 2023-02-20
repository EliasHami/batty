import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm, UseFormProps, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { alertService, Alert } from 'src/services'
import { getErrorMessage } from 'src/utils'
import { Link } from 'src/components'
import { API } from '@aws-amplify/api'
import { Box, Button, FormControl, InputLabel, Input, FormHelperText, Select, MenuItem } from '@mui/material'

import { Invoice } from 'src/types/index'
import { object, number, string, array, date } from 'yup'
import { DatePicker } from '@mui/x-date-pickers'
import { createInvoice, updateConstruction, updateInvoice } from 'src/graphql/mutations'

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
      console.log('error', error)
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