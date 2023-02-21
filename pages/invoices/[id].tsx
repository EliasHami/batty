import { withSSRContext } from 'aws-amplify'

import { AddEdit } from 'src/components'
import { getInvoice } from 'src/graphql/queries'

export default AddEdit

export const getServerSideProps = async ({ params, req }: { params: { id?: String }, req: Object }) => {
  const SSR = withSSRContext({ req })
  let data
  try {
    const response = await SSR.API.graphql({ query: getInvoice, variables: { id: params.id } })
    data = response.data.getConstruction
  } catch (error) {
    console.log('error', error)
  }
  const { createdAt, updatedAt, owner, ...invoice } = data
  return { props: { invoice } }
}