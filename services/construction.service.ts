import { Constructions } from 'types'
 
const getAll: () => Promise<Constructions> = () => {
  throw new Error('Method not implemented.')
}

export const constructionService = {
  getAll,
  delete: (id:number) => {}
}