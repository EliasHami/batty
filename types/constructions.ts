import * as Yup from 'yup'

const constructionSchema = Yup.object().shape({
  id: Yup.number().required().default(1),
  isDeleting : Yup.boolean().default(false),
  dateCreated: Yup.string(),
  dateUpdated: Yup.string(),
  name: Yup.string().required('Name is required'),
  address: Yup.string().required('Address is required'),
  type: Yup.string().required('Type is required'),
})

interface Construction extends Yup.Asserts<typeof constructionSchema> {}

type Constructions = Array<Construction> | null

export { constructionSchema }
export type { Construction, Constructions }