import { cookies } from 'next/headers'
import { withSSRContext } from 'aws-amplify'
import { serializeModel } from "@aws-amplify/datastore/ssr"

import { Construction } from 'src/models'
import { Link } from 'src/components'

import GenerateEstimatePDF from './GenerateEstimatePDF'
import Delete from './Delete'

export default async function Constructions() {
  const nextCookies = cookies()
  const SSR = withSSRContext({ req: { headers: { cookie: nextCookies } } })
  let constructions
  try {
    const model = await SSR.DataStore.query(Construction)
    constructions = serializeModel(model) as any // can't do anything with JSON type
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
          {/* @ts-ignore */}
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
