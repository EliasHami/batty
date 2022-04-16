import { Constructions, Construction } from 'types'
 
const getAll = async() => {
  return Promise.resolve([])
}

type ConstructionsService = {
  getAll: () => Promise<Constructions>,
  delete: (id: number) => void,
  create: (construction: Construction) => void,
  update: (id: number, construction: Construction) => void,
}

type AlertService = {
  success: (message: string, options:object) => void,
  error: (message: string) => void,
}

export const constructionService : ConstructionsService= {
  getAll,
  delete: (id) => {},
  create: (construction) => {},
  update: (id, construction) => {},
}

export const alertService : AlertService = {
  success: (message) => {},
  error: (message) => {},
}