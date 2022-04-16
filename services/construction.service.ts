import { Constructions } from 'types'
 
const getAll = async() => {
  return Promise.resolve([])
}

type ConstructionsService = {
  getAll: () => Promise<Constructions>,
  delete: (id: number) => void,
}

export const constructionService : ConstructionsService= {
  getAll,
  delete: (id:number) => {}
}