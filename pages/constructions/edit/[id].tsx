import { AddEdit } from 'components/constructions'
import { constructionService } from 'services'
import { GetServerSideProps, GetServerSidePropsResult } from 'next'
import { Construction } from 'types'

export default AddEdit

export const getServerSideProps:GetServerSideProps<Construction> = async({params}) => {
  const construction = await constructionService.getById(params && params.id) 
  const result:GetServerSidePropsResult<Construction> = { props : { construction } } 
  // TODO : execité côté serveur, il faut accéder directement à la ressource
  // sinon passer la construction en props et appeler la méthode getById() 
  // Type 'Promise<{ props: { construction: Construction; }; }>' is not assignable to type 'Promise<GetServerSidePropsResult<Construction>>'.
  return result 
}
