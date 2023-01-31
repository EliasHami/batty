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
  let data
  try {
    const response = await SSR.API.graphql({ query: getConstruction, variables: { id: params.id } })
    data = response.data.getConstruction
  } catch (error) {
    console.log('error', error) // côté serveur pas d'alertService
  }
  const { createdAt, updatedAt, owner, ...construction } = data
  return <AddEdit construction={construction} />
}