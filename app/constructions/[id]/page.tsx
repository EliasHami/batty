import { cookies } from 'next/headers'
import { withSSRContext } from 'aws-amplify'
import { serializeModel } from "@aws-amplify/datastore/ssr"

import { Construction } from 'src/models'

import AddEdit from '../AddEdit'

export default async function Edit({ params }: { params: { id: string } }) {
  const nextCookies = cookies()
  const SSR = withSSRContext({ req: { headers: { cookie: nextCookies } } })
  let construction
  try {
    const model = await SSR.DataStore.query(Construction, params.id)
    construction = serializeModel(model) as any // can't do anything with JSON type
  } catch (error) {
    console.log('error', error) // côté serveur pas d'alertService
  }
  return <AddEdit construction={construction} />
}