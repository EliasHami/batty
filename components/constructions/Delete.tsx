'use client'
import { useState } from 'react'
import { constructionService } from 'services'

export default function Delete({id}:{id:number}) {
  const [isDeleting, setIsDeleting] = useState(false)
  async function deleteConstruction(id: number) {
    setIsDeleting(true)    
    await constructionService.delete(id)    
  }

  return (
    <button 
      className="btn btn-sm btn-danger btn-construction" 
      onClick={() => deleteConstruction(id)} 
      disabled={isDeleting}
    >
      {isDeleting 
          ? <span className="spinner-border spinner-border-sm"></span> 
          : <span>Delete</span>}
    </button>
  )
}