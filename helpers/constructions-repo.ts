import fs from 'fs'
import { Construction, Constructions } from "types"

const constructions : Constructions = require('data/constructions.json')

const getAll = ():Constructions => {
  return constructions as Constructions
}

const getById = (id:number):Construction | null | undefined => {
  return constructions && constructions.find(c => c.id.toString() === id.toString())
}

const create = (construction:Construction):void => {}

const update = (id:number, construction:Construction):void => {}

const _delete = (id:number):void => {}


export const constructionRepo = {
  getAll,
  getById,
  delete: _delete,
  create,
  update,
}
