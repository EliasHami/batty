import { AddEdit } from 'components/constructions'
import { constructionRepo } from 'helpers'

export default function Edit({params}:{params : { id : string}}) {
  const construction = constructionRepo.getById(parseInt(params.id)) 
  return <AddEdit construction={construction}/>
}