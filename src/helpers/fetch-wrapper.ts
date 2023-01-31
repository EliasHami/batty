export const getErrorMessage = (error: unknown):string => {
  if (error instanceof Error) return error.message
  return String(error)
}

const handleResponse = async <T>(response:Response):Promise<T> => {
  const text = await response.text()
  const data:T = text && JSON.parse(text)

  if (!response.ok) {
    const errorMessage = getErrorMessage(data) || response.statusText
    return Promise.reject(errorMessage)
  }

  return Promise.resolve(data)
}

const get = async <T>(url:string):Promise<T> => {
  const requestOptions = {
    method: 'GET',
  }
  const response = await fetch(url, requestOptions)
  return handleResponse<T>(response)
}

const post = async <T>(url:string, body:T):Promise<T> => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }
  const response = await fetch(url, requestOptions)
  return handleResponse<T>(response)
}

const put = async <T>(url:string, body:T):Promise<T> => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }
  const response = await fetch(url, requestOptions)
  return handleResponse<T>(response)
}

// prefixed with underscored because delete is a reserved word in javascript
const _delete = async <T>(url:string):Promise<T> => {
  const requestOptions = {
    method: 'DELETE',
  }
  const response = await fetch(url, requestOptions)
  return handleResponse<T>(response)
}

export const fetchWrapper = {
  get,
  post,
  put,
  delete: _delete,
}
