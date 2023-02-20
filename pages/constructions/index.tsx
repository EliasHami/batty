import { withSSRContext } from 'aws-amplify'

import { Construction } from 'src/types'
import { listConstructions } from 'src/graphql/queries'
import { Link } from 'src/components'
import Delete from 'src/components/constructions/Delete'
import GenerateEstimatePDF from 'src/components/constructions/GenerateEstimatePDF'

import { Amplify } from 'aws-amplify'
import awsExports from "src/aws-exports"
Amplify.configure({ ...awsExports, ssr: true })

export default function Constructions({ constructions }: { constructions: Construction[] }) {

  return (
    <div>
      <h1>Constructions</h1>
      <Link href="/constructions/add" className="btn btn-sm btn-success mb-2">Add Construction</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{ width: '22%' }}>Name</th>
            <th style={{ width: '22%' }}>Address</th>
            <th style={{ width: '22%' }}>Description</th>
            <th style={{ width: '22%' }}>Customer</th>
            <th style={{ width: '10%' }}></th>
          </tr>
        </thead>
        <tbody>
          {constructions && constructions.map(construction => (
            <tr key={construction.id}>
              <td>{construction.name}</td>
              <td>{construction.address}</td>
              <td>{construction.description}</td>
              <td>{construction.customerID}</td>
              <td style={{ whiteSpace: 'nowrap' }}>
                <GenerateEstimatePDF construction={construction} />
                <Link href={`/constructions/${construction.id}`} className="btn btn-sm btn-primary mr-1">Edit</Link>
                <Delete id={construction.id} />
              </td>
            </tr>
          ))}
          {!constructions &&
            <tr>
              <td colSpan={4}>
                <div className="spinner-border spinner-border-lg align-center" />
              </td>
            </tr>
          }
          {constructions && !constructions.length &&
            <tr>
              <td colSpan={4} className="text-center">
                <div className="p-2">No constructions to display</div>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export async function getServerSideProps({ req }: { req: Object }) {
  const SSR = withSSRContext({ req })
  let constructions: Construction[] = []
  try {
    const response = await SSR.API.graphql({ query: listConstructions })
    constructions = response.data.listConstructions.items
  } catch (error) {
    console.log('error', error)
  }
  return {
    props: { constructions }
  }
}
