import { Link } from 'src/components'
import Delete from './Delete'
import GenerateEstimatePDF from './GenerateEstimatePDF'
import { Constructions as ConstructionsType } from 'src/types'
import { withSSRContext } from 'aws-amplify'
import { listConstructions } from 'src/graphql/queries'
import { cookies } from 'next/headers'

import awsExports from "src/aws-exports"
import { Amplify } from 'aws-amplify'
Amplify.configure({ ...awsExports, ssr: true }) // je dois faire ssr: true pour que ça fonctionne

export default async function Constructions() {
  const nextCookies = cookies()
  const SSR = withSSRContext({ req: { headers: { cookie: nextCookies } } })
  let constructions: ConstructionsType = []
  try {
    const response = await SSR.API.graphql({ query: listConstructions }) // TODO subscribe to changes because of delete
    constructions = response.data.listConstructions.items
  } catch (error) {
    console.log('error', error) // côté serveur pas d'alertService
  }

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
              <td>{construction.customer}</td>
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
