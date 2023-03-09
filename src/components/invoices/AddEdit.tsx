import DeleteIcon from '@mui/icons-material/Delete'
import { API } from 'aws-amplify'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FormProvider, SubmitHandler, useFieldArray, useForm, UseFormProps } from 'react-hook-form'

import { Box, Button, CircularProgress, Grid, IconButton, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from '@mui/material'
import { DateField, Link, NumberField, SelectField, TextField } from 'src/components'
import { Alert, alertService } from 'src/services'
import { getErrorMessage } from 'src/utils'

import { DevTool } from "@hookform/devtools"
import { zodResolver } from '@hookform/resolvers/zod'
import { createInvoice, updateInvoice } from 'src/graphql/mutations'
import { Construction, Invoice, invoiceFormSchema } from 'src/types'
import { DurationUnits, Statuses } from 'src/types/API'
import Lines from './Lines'

type AddEditProps = {
  invoice?: Invoice | null,
  constructions?: Construction[],
}

const AddEdit: React.FC<AddEditProps> = ({ invoice, constructions }) => {
  const isAddMode = !invoice
  const router = useRouter()
  const [showTitle, setShowTitle] = useState(false)

  const formOptions: UseFormProps<Invoice> = {
    resolver: zodResolver(invoiceFormSchema),
  }

  if (!isAddMode) {
    formOptions.defaultValues = invoice
  }

  const methods = useForm<Invoice>(formOptions)
  const { handleSubmit, formState, control } = methods
  const { errors } = formState

  const { fields: sections, append: addSection, remove: deleteSection } = useFieldArray({
    control,
    name: "sections"
  })

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

  const handleShowTitle = () => setShowTitle(!showTitle)

  return (
    <>
      <FormProvider {...methods}>
        <Box
          component="form"
          id="hook-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Link href="/invoices" className="btn btn-link">&#60;- Back</Link>
          <Typography sx={{ marginBottom: "10px" }} variant='h3'>{isAddMode ? 'Add Invoice' : invoice.number}</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <NumberField name="number" error={errors.number} label="Number" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DateField name="issueDate" error={errors.issueDate} label="Issue Date" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DateField name="expirationDate" error={errors.expirationDate} label="Expiration Date" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DateField name="workStartDate" error={errors.workStartDate} label="Work start date" />
            </Grid>
            <Grid item xs={12}>
              <NumberField name="workDuration" error={errors.workDuration} label="Work duration" />
            </Grid>
            <Grid item xs={12}>
              <SelectField
                name="workDurationUnit"
                error={errors.workDurationUnit}
                label="Work duration unit"
                options={(Object.keys(DurationUnits) as Array<keyof typeof DurationUnits>).map(key =>
                  <MenuItem key={key} value={DurationUnits[key]}>{key}</MenuItem>)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectField
                name="constructionID"
                error={errors.constructionID}
                label="Construction"
                options={constructions?.map(construction =>
                  <MenuItem key={construction.id} value={construction.id}>{construction.name}</MenuItem>)
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <SelectField
                name="customerID"
                error={errors.customerID}
                label="Customer"
                options={<><MenuItem value={10}>Customer 1</MenuItem>
                  <MenuItem value={20}>Customer 2</MenuItem>
                  <MenuItem value={30}>Customer 3</MenuItem></>}
              />
            </Grid>
            <Grid item xs={12}>
              <Button onClick={handleShowTitle}>+ Add a title to the document</Button>
              {showTitle && (<TextField name="title" error={errors.title} />)}
            </Grid>
            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="lines table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Designation</TableCell>
                      <TableCell>Qty</TableCell>
                      <TableCell>Unit</TableCell>
                      <TableCell>Unit Price excl tax</TableCell>
                      <TableCell>Total excl tax</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {sections?.map((section, i) => (
                      <>
                        <TableRow
                          key={section?.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell colSpan={4}>
                            <TextField name={`sections.${i}.name`} error={errors?.sections?.[i]?.name} />
                          </TableCell>
                          <TableCell>
                            <Tooltip title="Delete">
                              <IconButton onClick={() => deleteSection(i)}>
                                <DeleteIcon />
                              </IconButton>
                            </Tooltip>
                          </TableCell>
                        </TableRow>
                        <Lines errors={errors?.sections?.[i]?.lines} sectionIndex={i} />
                      </>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Button onClick={() => addSection({ name: "", lines: [] })}>+ Add a section</Button>
            </Grid>
          </Grid>
          <Button type="submit" disabled={formState.isSubmitting}>
            {formState.isSubmitting && <CircularProgress />}
            Save
          </Button>
        </Box >
      </FormProvider >
      <DevTool control={control} />
    </>
  )
}

export default AddEdit