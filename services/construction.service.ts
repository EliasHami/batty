import { Constructions, Construction } from 'types'
import { fetchWrapper } from 'helpers' 

const getAll = async():Promise<Constructions> => {
  return fetchWrapper.get<Constructions>('/constructions')
}

const getById = async(id:number):Promise<Construction> => {
  return fetchWrapper.get<Construction>(`/constructions/${id}`)
}

const create = async(params:Construction):Promise<Construction> => {
  return fetchWrapper.post<Construction>('/constructions', params)
}

const update = async(id:number, params:Construction):Promise<Construction> => {
  return fetchWrapper.put<Construction>(`/constructions/${id}`, params)
}

const deleteById = async(id:number):Promise<Construction> => {
  return fetchWrapper.delete<Construction>(`/constructions/${id}`)
}

export const constructionService = {
  getAll,
  getById,
  delete: deleteById,
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