'use client'
import { useState } from 'react'
import { API } from 'aws-amplify'
import { deleteConstruction } from 'src/graphql/mutations'
import { alertService } from 'services'
import { getErrorMessage } from 'helpers'

export default function Delete({ id }: { id: string }) {
  const [isDeleting, setIsDeleting] = useState(false)
  async function handleDelete(id: string) {
    setIsDeleting(true)
    try {
      API.graphql({
        authMode: 'AMAZON_COGNITO_USER_POOLS',
        query: deleteConstruction,
        variables: { input: { id } }
      })
    } catch (error) {
      alertService.error(getErrorMessage(error))
    }
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