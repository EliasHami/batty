import { withSSRContext } from 'aws-amplify'
import { serializeModel } from "@aws-amplify/datastore/ssr"

import { AddEdit } from 'src/components'
import { Construction } from 'src/models'

export default AddEdit

export const getServerSideProps = async ({ params, req }: { params: { id?: String }, req: Object }) => {
  const SSR = withSSRContext({ req })
  let construction, constructionServices
  try {
    const model = await SSR.DataStore.query(Construction, params?.id)
    const submodel = await model.ConstructionServices.toArray()
    construction = serializeModel(model) as any // can't do anything with JSON type
    constructionServices = serializeModel(submodel) as any // can't do anything with JSON type
  } catch (error) {
    console.log('error', error)
  }
  return { props: { construction, constructionServices } }
}