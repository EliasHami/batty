import * as Yup from 'yup'

const constructionSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  address: Yup.string().required('Address is required'),
  type: Yup.string().required('Type is required'),
})

type Construction = Yup.InferType<typeof constructionSchema> & {
  isDeleting : boolean
  id: number
}

type Constructions = Array<Construction> | null

export { constructionSchema }
export type { Construction, Constructions }