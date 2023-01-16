import { constructionRepo, getErrorMessage } from "helpers"
import { NextApiRequest, NextApiResponse } from "next"
import { Construction } from "types"

const handler = (req:NextApiRequest, res:NextApiResponse) => {
  const getConstructionById = () => {
    try {
      const construction = constructionRepo.getById(Number(req.query.id))
      return res.status(200).json(construction)
    } catch (error) {
      return res.status(400).json({ message: getErrorMessage(error) })
    }
  }

  const updateConstruction = () => {
    try {
      constructionRepo.update(Number(req.query.id), req.body)
      return res.status(200).json({})
    } catch (error) {
      return res.status(400).json({ message: getErrorMessage(error) })
    }
  }

  const deleteConstruction = () => {
    try{
      constructionRepo.delete(Number(req.query.id))
      return res.status(200).json({})
    } catch(error) {
      return res.status(400).json({ message : getErrorMessage(error) })
    }
  }

  switch (req.method) {
    case 'GET':
      return getConstructionById()
    case 'PUT':
      return updateConstruction()
    case 'DELETE':
      return deleteConstruction()
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

}

export default handler