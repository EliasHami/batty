import * as Yup from 'yup'

const partSchema = Yup.object().shape({
  name: Yup.string().required('Parts name are required'),
  provisions: Yup.array().of(
    Yup.object({
      name: Yup.string(),
      service: Yup.string() // TODO new structure
    })
  )
})

interface Part extends Yup.Asserts<typeof partSchema> {}

type Parts = Array<Part> | null

const constructionSchema = Yup.object().shape({
  id: Yup.number().required().default(1),
  dateCreated: Yup.string(),
  dateUpdated: Yup.string(),
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  customer: Yup.string().required('Name is required'), // TODO new structure
  address: Yup.string().required('Address is required'),
  estimate_validity: Yup.number().default(30),
  parts: Yup.array().of(partSchema)
})

interface Construction extends Yup.Asserts<typeof constructionSchema> {}

type Constructions = Array<Construction> | null

export { constructionSchema }
export type { Construction, Constructions, Part, Parts }