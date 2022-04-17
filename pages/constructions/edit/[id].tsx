import { AddEdit } from 'components/constructions'
import { constructionService } from 'services'
import { GetServerSideProps } from 'next'
import { Construction } from 'types'

export default AddEdit

export const getServerSideProps:GetServerSideProps<Construction> = async({params}) => {
  const construction = await constructionService.getById(params && params.id) 
  // TODO : execité côté serveur, il faut accéder directement à la ressource
  // sinon passer la construction en props et appeler la méthode getById() 
  
  return {
    props: {
      construction
    }
  }
}
