import * as Yup from 'yup'

const constructionSchema = Yup.object().shape({
  id: Yup.number().required('Construction ID is required'),
  isDeleting : Yup.boolean().required(),
  dateCreated: Yup.string().required(),
  dateUpdated: Yup.string().required(),
  name: Yup.string().required('Name is required'),
  address: Yup.string().required('Address is required'),
  type: Yup.string().required('Type is required'),
})

interface Construction extends Yup.Asserts<typeof constructionSchema> {}

type Constructions = Array<Construction> | null

export { constructionSchema }
export type { Construction, Constructions }