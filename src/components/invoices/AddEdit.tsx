import dayjs from 'dayjs'
import { API } from 'aws-amplify'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm, UseFormProps, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { DatePicker } from '@mui/x-date-pickers'

import { alertService, Alert } from 'src/services'
import { getErrorMessage } from 'src/utils'
import { Link } from 'src/components'
import { Box, Button, MenuItem, Grid, TextField, Typography, CircularProgress } from '@mui/material'

import { Construction, Invoice, invoiceSchema } from 'src/types'
import { createInvoice, updateInvoice } from 'src/graphql/mutations'
import { DurationUnits, Statuses } from 'src/types/API'

type AddEditProps = {
  invoice?: Invoice | null,
  constructions?: Construction[],
}

const AddEdit: React.FC<AddEditProps> = ({ invoice, constructions }) => {
  const isAddMode = !invoice
  const router = useRouter()

  const formOptions: UseFormProps<Invoice> = {
    resolver: yupResolver(invoiceSchema),
  }

  if (!isAddMode) {
    formOptions.defaultValues = invoice
  }

  const methods = useForm<Invoice>(formOptions)
  const { handleSubmit, formState, control } = methods
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
            ...invoice,
            status: Statuses.DRAFT,
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
            status: Statuses.DRAFT,
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
    <Box
      component="form"
      id="hook-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Link href="/invoices" className="btn btn-link">&#60;- Back</Link>
      <Typography variant='h3'>{isAddMode ? 'Add Invoice' : invoice.number}</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="number"
            render={({ field }) => (
              <TextField
                {...field}
                id="number"
                label="Number"
                error={Boolean(errors.number)}
                helperText={errors.number?.message}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            name="issueDate"
            render={({ field }) => (
              <DatePicker
                {...field}
                onChange={value => field.onChange(dayjs(value).format('YYYY-MM-DD'))}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    id="issueDate"
                    error={Boolean(errors.issueDate)}
                    helperText={errors.issueDate?.message}
                    label="Issue Date"
                    fullWidth
                  />
                )}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            name="expirationDate"
            render={({ field }) => (
              <DatePicker
                {...field}
                onChange={value => field.onChange(dayjs(value).format('YYYY-MM-DD'))}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    id="expirationDate"
                    error={Boolean(errors.expirationDate)}
                    helperText={errors.expirationDate?.message}
                    label="Expiration Date"
                    fullWidth
                  />
                )}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            name="workStartDate"
            render={({ field }) => (
              <DatePicker
                {...field}
                onChange={value => field.onChange(dayjs(value).format('YYYY-MM-DD'))}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    id="workStartDate"
                    error={Boolean(errors.workStartDate)}
                    helperText={errors.workStartDate?.message}
                    label="Work start date"
                    fullWidth
                  />
                )}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="workDuration"
            render={({ field }) => (
              <TextField
                {...field}
                id="workDuration"
                type="number"
                label="Work duration"
                error={Boolean(errors.workDuration)}
                helperText={errors.workDuration?.message}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="workDurationUnit"
            render={({ field }) => (
              <TextField
                {...field}
                id="workDurationUnit"
                select
                label="Work duration"
                error={Boolean(errors.workDurationUnit)}
                helperText={errors.workDurationUnit?.message}
                fullWidth
              >
                {(Object.keys(DurationUnits) as Array<keyof typeof DurationUnits>).map(key =>
                  <MenuItem key={key} value={DurationUnits[key]}>{key}</MenuItem>)
                }
              </TextField>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            name="constructionID"
            render={({ field }) => (
              <TextField
                {...field}
                id="constructionID"
                select
                label="Construction"
                error={Boolean(errors.constructionID)}
                helperText={errors.constructionID?.message}
                fullWidth
              >
                {constructions?.map(construction =>
                  <MenuItem key={construction.id} value={construction.id}>{construction.name}</MenuItem>)
                }
              </TextField>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            name="customerID"
            render={({ field }) => (
              <TextField
                {...field}
                id="customerID"
                select
                label="Customer"
                error={Boolean(errors.customerID)}
                helperText={errors.customerID?.message}
                fullWidth
              >
                <MenuItem value={10}>Customer 1</MenuItem>
                <MenuItem value={20}>Customer 2</MenuItem>
                <MenuItem value={30}>Customer 3</MenuItem>
              </TextField>
            )}
          />
        </Grid>
      </Grid>
      <Button type="submit" disabled={formState.isSubmitting}>
        {formState.isSubmitting && <CircularProgress />}
        Save
      </Button>
    </Box >
  )
}

export default AddEdit