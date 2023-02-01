'use client'
import { useState } from 'react'
import { DataStore } from 'aws-amplify'

import { Construction } from 'src/models'
import { alertService } from 'src/services'
import { getErrorMessage } from 'src/helpers'

export default function Delete({ id }: { id: string }) { // onDelete: () => void
  const [isDeleting, setIsDeleting] = useState(false)
  async function handleDelete(id: string) {
    setIsDeleting(true)
    try {
      await DataStore.delete(Construction, (cons) => cons.id.eq(id))
    } catch (error) {
      console.log('error', error)
      alertService.error(getErrorMessage(error))
    }
    // onDelete()
    setIsDeleting(false)
  }

  return (
    <button
      className="btn btn-sm btn-danger btn-construction"
      onClick={() => handleDelete(id)}
      disabled={isDeleting}
    >
      {isDeleting
        ? <span className="spinner-border spinner-border-sm"></span>
        : <span>Delete</span>}
    </button>
  )
}