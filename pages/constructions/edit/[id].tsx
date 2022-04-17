import { AddEdit } from 'components/constructions'
import { constructionService } from 'services'
import { GetServerSideProps } from 'next'

export default AddEdit

export const getServerSideProps:GetServerSideProps = async({params}) => {
  const construction = await constructionService.getById(params && params.id)
  
  return {
    props: {
      construction
    }
  }
}
