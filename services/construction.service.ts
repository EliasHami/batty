import { Constructions, Construction } from 'types'
import { apiUrl } from 'config'
import { fetchWrapper } from 'helpers' 

const baseUrl = `${apiUrl}/constructions`

const getAll = async():Promise<Constructions> => {
  return fetchWrapper.get<Constructions>(baseUrl)
}

const getById = async(id:number):Promise<Construction> => {
  return fetchWrapper.get<Construction>(`${baseUrl}/${id}`)
}

const create = async(params:Construction):Promise<Construction> => {
  return fetchWrapper.post<Construction>(baseUrl, params)
}

const update = async(id:number, params:Construction):Promise<Construction> => {
  return fetchWrapper.put<Construction>(`${baseUrl}/${id}`, params)
}

const _delete = async(id:number):Promise<Construction> => {
  return fetchWrapper.delete<Construction>(`${baseUrl}/${id}`)
}

export const constructionService = {
  getAll,
  getById,
  delete: _delete,
  create,
  update,
}

type AlertService = {
  success: (message: string, options:object) => void,
  error: (message: string) => void,
}

export const alertService : AlertService = {
  success: (message) => {},
  error: (message) => {},
}