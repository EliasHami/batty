import { useState, useEffect } from 'react'
import {Link } from 'components'
import { constructionService } from 'services'

const NO_CONSTRUCTIONS = 'No constructions yet'

interface Construction {
  id: number,
  name: string,
  address: string,
  type: string,
  isDeleting: boolean,
}

interface Constructions extends Array<Construction>{} | string


export default Index

function Index() {
  const [constructions, setConstructions] = useState<Constructions>([])

  useEffect(() => {
    const fetchConstructions :Constructions = async () => await constructionService.getAll()

    setConstructions(fetchConstructions())
  }, [])

  async function deleteConstruction(id: number) {
    setConstructions(constructions.map(construction => 
      construction.id === id ? {...construction, isDeleting: true} : construction))
    
    await constructionService.delete(id)
    setConstructions(constructions => constructions.filter(construction => construction.id !== id))
    
  }

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
                <Link href={`/constructions/${construction.id}`} className="btn btn-sm btn-primary mr-1">Edit</Link>
                <button 
                  className="btn btn-sm btn-danger btn-delete-construction" 
                  onClick={() => deleteConstruction(construction.id)} 
                  disabled={construction.isDeleting}
                >
                  {construction.isDeleting 
                      ? <span className="spinner-border spinner-border-sm"></span> 
                      : <span>Delete</span>}
                </button>
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