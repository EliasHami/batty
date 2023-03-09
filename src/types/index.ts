import { ObjectSchema, array, number, object, string } from 'yup'
import {
  Construction as C,
  DurationUnits,
  Invoice as I,
  Line,
  LineTypes,
  Section as S,
  Units
} from './API'
import { DeepOmit } from './DeepOmit'

export type Construction = DeepOmit<
  Exclude<C, null>,
  '__typename' | 'owner' | 'createdAt' | 'updatedAt' |  'nextToken'
>

export type Invoice = DeepOmit<
  Exclude<I, null>,
  '__typename' | 'owner' | 'createdAt' | 'updatedAt' |  'nextToken'
>

export type InvoiceForm = DeepOmit<
  Exclude<Invoice, null>,
  'id' | 'status'
>

export type Section = DeepOmit<
  Exclude<S, null>,
  '__typename' | 'owner' | 'createdAt' | 'updatedAt' |  'nextToken'
>

const invoiceSchema : ObjectSchema<InvoiceForm>= object({
  number: string(),
  issueDate: string(),
  expirationDate: string(),
  workStartDate: string(),
  workDuration: number(),
  workDurationUnit: string().oneOf(Object.values(DurationUnits)),
  customerID: string(),
  constructionID: string(),
  title: string(),
  sections: array<Section>().of(object({
    name: string(),
    order: number(),
    lines: array<Line>().of(object({
      name: string(),
      type : string().oneOf(Object.values(LineTypes)),
      service: string(),
      text : string(),
      order: number(),
      quantity: number(),
      unit : string().oneOf(Object.values(Units)),
      price: number(),
      elements: array().of(string())
    }))
  })
)})

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

export { LineTypes, constructionSchema, invoiceSchema }

