import { AddEdit } from 'src/next12_components'
import { withSSRContext } from 'aws-amplify'
import { serializeModel } from "@aws-amplify/datastore/ssr"

import { Construction } from 'src/models'

export default AddEdit

export const getServerSideProps = async ({ params, req }: { params: { id?: String }, req: Object }) => {
  const SSR = withSSRContext({ req })
  let construction
  try {
    const model = await SSR.DataStore.query(Construction, params?.id)
    construction = serializeModel(model) as any // can't do anything with JSON type
  } catch (error) {
    console.log('error', error)
  }
  return { props: { construction } }
}