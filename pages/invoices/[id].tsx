import { graphqlOperation, withSSRContext } from 'aws-amplify'

import AddEdit from 'src/components/invoices/AddEdit'
import { getInvoice, listConstructions } from 'src/graphql/queries'
import { Construction } from 'src/types'

export default AddEdit

export const getServerSideProps = async ({ params, req }: { params: { id?: String }, req: Object }) => {
  const SSR = withSSRContext({ req })
  let data
  let constructions: Construction[] = []
  try {
    const response = await SSR.API.graphql({ query: getInvoice, variables: { id: params.id } })
    data = response.data.getInvoice
    const constructionResponse = await SSR.API.graphql(graphqlOperation(`
    query ListConstructionsIdName {
      listConstructions {
        items {
          id
          name
        }
      }
    }
    `))
    constructions = constructionResponse.data.listConstructions.items
  } catch (error) {
    console.error('error', error)
  }
  const { createdAt, updatedAt, owner, ...invoice } = data
  return { props: { invoice, constructions } }
}