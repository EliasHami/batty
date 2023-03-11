import { graphqlOperation, withSSRContext } from 'aws-amplify'
import AddEdit from 'src/components/invoices/AddEdit'
import { Construction } from 'src/types'

export default AddEdit

export const getServerSideProps = async ({ params, req }: { params: { id?: String }, req: Object }) => {
  const SSR = withSSRContext({ req })
  let constructions: Construction[] = []
  try {
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
  return { props: { constructions } }
}