import { object, number, string, array, date, ObjectSchema } from 'yup'
import { DeepOmit } from './DeepOmit'
import {
  Construction as C,
  Invoice as I,
  Statuses,
  DurationUnits
} from './API'

export type Construction = DeepOmit<
  Exclude<C, null>,
  '__typename' | 'owner' | 'createdAt' | 'updatedAt' |  'nextToken'
>

export type Invoice = DeepOmit<
  Exclude<I, null>,
  '__typename' | 'owner' | 'createdAt' | 'updatedAt' |  'nextToken'
>


const invoiceSchema: ObjectSchema<Invoice> = object({
  id: string().required('Id is required'),
  number: string(),
  amount: number(),
  issueDate: string(),
  expirationDate: string(),
  status: string().oneOf(Object.values(Statuses)),
  workStartDate: string(),
  workDuration: number(),
  workDurationUnit: string().oneOf(Object.values(DurationUnits)),
  customerID: string(),
  constructionID: string(),
})

const constructionSchema: ObjectSchema<Construction> = object({
  id: string().required('Id is required'),
  name: string().required('Name is required'),
  description: string().required('Description is required'),
  address: string().required('Address is required'),
  estimate_validity: number(),
  parts: string(),
  number_lot: number(),
  customerID: string(),
  Invoices: object({
    items: array<Invoice>().required() // .of(invoiceSchema) passe tout les sous-champs à optionnel typescript number?:
  }),
})

export { invoiceSchema, constructionSchema }
