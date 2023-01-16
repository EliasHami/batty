import fs from 'fs'
import { Construction, Constructions } from "types"

let constructions : Constructions = require('data/constructions.json')

const saveData = ():void => {
  fs.writeFileSync('data/constructions.json', JSON.stringify(constructions, null, 4))
}

const getAll = ():Constructions => {
  return constructions
}

const getById = (id:number):Construction | null | undefined => {
  return constructions && constructions.find(c => c.id.toString() === id.toString())
}

const create = (construction:Construction):void => {
  // validate
  if (constructions?.find(c => c.name === construction.name)) {
    throw `Construction with name ${construction.name} already exists`
  }

  // generate new construction id
  const id = constructions?.length ? Math.max(...constructions.map(c => c.id)) + 1 : 1

  // set date created and updated
  const dateCreated = new Date().toISOString()
  const dateUpdated = new Date().toISOString()

  // add and save construction
  const dated_construction = {...construction, id, dateCreated, dateUpdated}
  constructions?.push(dated_construction as Construction)
  saveData()
}

const update = (id:number, construction:Construction):void => {
  const current_construction = constructions?.find(c => c.id.toString() === id.toString())
  
  if (!construction) {
    throw `Construction with id ${id} does not exist`
  }

  if (construction.name !== current_construction?.name && constructions?.find(c => c.name === construction.name)) {
    throw `Construction with name ${construction.name} already exists`
  }

  // set date updated
  construction.dateUpdated = new Date().toISOString()

  // update construction and save
  Object.assign(current_construction, construction)
  saveData()
}

const _delete = (id:number):Constructions => {
  // filter out deleted construction and save
  constructions = constructions?.filter(c => c.id.toString() !== id.toString()) || null
  saveData()
  return constructions
}


export const constructionRepo = {
  getAll,
  getById,
  delete: _delete,
  create,
  update,
}
