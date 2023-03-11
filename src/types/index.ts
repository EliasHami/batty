import { z } from 'zod'
import {
  Construction as C, DurationUnits, Invoice as I, LineTypes,
  Section as S, Statuses, Units
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

const invoiceSchema = z.object({
  id: z.string(),
  status: z.nativeEnum(Statuses),
  number: z.string(),
  issueDate: z.string(),
  expirationDate: z.string(),
  workStartDate: z.string(),
  workDuration: z.number(),
  workDurationUnit: z.nativeEnum(DurationUnits),
  customerID: z.string(),
  constructionID: z.string(),
  title: z.string(),
  sections: z.array(z.object({
    name: z.string(),
    order: z.number().default(0),
    lines: z.array(z.object({
      name: z.string(),
      type : z.nativeEnum(LineTypes),
      service: z.string(),
      text : z.string(),
      order: z.number().default(0),
      quantity: z.number(),
      unit : z.nativeEnum(Units),
      price: z.number(),
      elements: z.array(z.string())
    }))
  })
)})

const invoiceFormSchema : z.ZodType<InvoiceForm>= invoiceSchema.omit({id:true, status:true})

const constructionSchema:  z.ZodType<Construction> = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  address: z.string(),
  estimate_validity: z.number(),
  parts: z.string(),
  number_lot: z.number(),
  customerID: z.string(),
  Invoices: z.object({
    items: z.array(invoiceSchema),
  }),
})

export { invoiceFormSchema, constructionSchema, LineTypes }
