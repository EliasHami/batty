'use client'
import { useState, useTransition } from 'react'
import { DataStore } from 'aws-amplify'

import { Construction } from 'src/models'
import { alertService } from 'src/services'
import { getErrorMessage } from 'src/utils'
import { useRouter } from 'next/navigation'

export default function Delete({ id }: { id: string }) { // onDelete: () => void
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  async function handleDelete(id: string) {
    setIsDeleting(true)
    try {
      await DataStore.delete(Construction, (cons) => cons.id.eq(id))
    } catch (error) {
      console.log('error', error)
      alertService.error(getErrorMessage(error))
    }
    setIsDeleting(false)
    startTransition(() => {
      router.refresh()
    })
  }

  return (
    <button
      className="btn btn-sm btn-danger btn-construction"
      onClick={() => handleDelete(id)}
      disabled={isPending}
    >
      {isDeleting || isPending
        ? <span className="spinner-border spinner-border-sm"></span>
        : <span>Delete</span>}
    </button>
  )
}