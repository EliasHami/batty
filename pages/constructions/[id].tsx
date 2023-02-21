import { withSSRContext, Amplify } from 'aws-amplify'

import AddEdit from 'src/components/constructions/AddEdit'
import { getConstruction } from 'src/graphql/queries'

import awsExports from "src/aws-exports"
Amplify.configure({ ...awsExports, ssr: true })

export default AddEdit

export const getServerSideProps = async ({ params, req }: { params: { id?: String }, req: Object }) => {
  const SSR = withSSRContext({ req })
  let data
  try {
    const response = await SSR.API.graphql({ query: getConstruction, variables: { id: params.id } })
    data = response.data.getConstruction
  } catch (error) {
    console.log('error', error)
  }
  const { createdAt, updatedAt, owner, ...construction } = data
  return { props: { construction } }
}