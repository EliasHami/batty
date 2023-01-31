import { Construction } from './APITypes'
import { object, number, string, array, ObjectSchema } from 'yup'


const partSchema = object().shape({
  name: string().required('Parts name are required'),
  provisions: array().of(
    object({
      name: string(),
      service: string() // TODO new structure
    })
  )
})

const constructionSchema: ObjectSchema<Construction> = object().shape({
  id: string(),
  name: string().required('Name is required'),
  description: string().required('Description is required'),
  customer: string().required('Customer is required'), // TODO new structure
  address: string().required('Address is required'),
  estimate_validity: number().default(30),
  parts: array().of(partSchema).required('Parts are required')
})

export default constructionSchema 