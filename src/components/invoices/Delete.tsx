import { useState, useTransition } from 'react'
import { API } from 'aws-amplify'
import { deleteInvoice } from 'src/graphql/mutations'
import { alertService } from 'src/services'
import { getErrorMessage } from 'src/utils'
import { useRouter } from 'next/navigation'

export default function Delete({ id }: { id: string }) {
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  async function handleDelete(id: string) {
    setIsDeleting(true)
    try {
      await API.graphql({
        authMode: 'AMAZON_COGNITO_USER_POOLS',
        query: deleteInvoice,
        variables: { input: { id } }
      })
    } catch (error) {
      console.error('error', error)
      alertService.error(getErrorMessage(error))
    }
    setIsDeleting(false)
    startTransition(() => {
      router.refresh()
    })
  }

  return (
    // https://mui.com/material-ui/react-tooltip/
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