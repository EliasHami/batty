import { Link } from 'components'
import {Delete, GenerateEstimatePDF} from 'components/constructions'
import { constructionRepo } from 'helpers'

export default function Constructions() {
  let constructions = constructionRepo.getAll()

  return (
    <div>
      <h1>Constructions</h1>
      <Link href="/constructions/add" className="btn btn-sm btn-success mb-2">Add Construction</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{ width: '30%'}}>Name</th>
            <th style={{ width: '30%'}}>Address</th>
            <th style={{ width: '30%'}}>Type</th>
            <th style={{ width: '10%'}}></th>
          </tr>
        </thead>
        <tbody>
          {constructions && constructions.map(construction => (
            <tr key={construction.id}>
              <td>{construction.name}</td>
              <td>{construction.address}</td>
              <td>{construction.type}</td>
              <td style={{ whiteSpace: 'nowrap'}}>
                <GenerateEstimatePDF construction={construction} />
                <Link href={`/constructions/${construction.id}`} className="btn btn-sm btn-primary mr-1">Edit</Link>
                <Delete id={construction.id} />
              </td>
            </tr>
          ))}
          {!constructions && 
            <tr>
              <td colSpan={4}>
                <div className="spinner-border spinner-border-lg align-center"/>
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
