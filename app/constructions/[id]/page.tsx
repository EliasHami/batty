import AddEdit from '../AddEdit'
import { withSSRContext } from 'aws-amplify'
import { getConstruction } from 'src/graphql/queries'
import { cookies } from 'next/headers'

import awsExports from "src/aws-exports"
import { Amplify } from 'aws-amplify'
Amplify.configure({ ...awsExports, ssr: true }) // je dois faire ssr: true pour que ça fonctionne

export default async function Edit({ params }: { params: { id: string } }) {
  const nextCookies = cookies()
  const SSR = withSSRContext({ req: { headers: { cookie: nextCookies } } })
  console.log('params.id', params.id)
  const response = await SSR.API.graphql({ query: getConstruction, input: { id: params.id } })
  const construction = response.data.getConstruction.items

  return <AddEdit construction={construction} />
}