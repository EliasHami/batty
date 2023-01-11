import { constructionRepo } from 'helpers'
import { getErrorMessage } from 'helpers'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Construction } from 'types'

const handler = async (req:NextApiRequest, res:NextApiResponse) => {
  
  const getConstructions = () => {
    const constructions = constructionRepo.getAll()
    return res.status(200).json(constructions)
  } 

  const createConstruction = () => {
    try {
      constructionRepo.create(req.body as Construction)
      return res.status(200).json({})
    } catch(error) {
      return res.status(400).json({ message : getErrorMessage(error)})
    }
  }

  switch (req.method) {
    case 'GET':
      return getConstructions()
    case 'POST':
      return createConstruction()
    default:
      return res.status(405).end(`Method ${req.method} not allowed`)
  }
}

export default handler