import fs from 'fs'
import { Construction, Constructions } from "types"

let constructions : Constructions = require('data/constructions.json')

const saveData = ():void => {
  fs.writeFileSync('data/constructions.json', JSON.stringify(constructions, null, 4))
}

const getAll = ():Constructions => {
  return constructions as Constructions
}

const getById = (id:number):Construction | null | undefined => {
  return constructions && constructions.find(c => c.id.toString() === id.toString())
}

type CreateUpdateArgs = {
  name: string,
  address: string,
  type: string
}

const create = ({name, type, address}:CreateUpdateArgs):void => {
  // validate
  if (constructions?.find(c => c.name === name)) {
    throw `Construction with name ${name} already exists`
  }

  // generate new construction id
  const id = constructions?.length ? Math.max(...constructions.map(c => c.id)) + 1 : 1

  // set date created and updated
  const dateCreated = new Date().toISOString()
  const dateUpdated = new Date().toISOString()

  // add and save construction
  const construction = {id, name, type, address, dateCreated, dateUpdated, isDeleting: false}
  constructions?.push(construction as Construction)
  saveData()
}

const update = (id:number, { name, type, address}:CreateUpdateArgs):void => {
  const construction = constructions?.find(c => c.id.toString() === id.toString())
  
  if (!construction) {
    throw `Construction with id ${id} does not exist`
  }

  if (name !== construction.name && constructions?.find(c => c.name === name)) {
    throw `Construction with name ${name} already exists`
  }

  // set date updated
  construction.dateUpdated = new Date().toISOString()

  // update construction and save
  Object.assign(construction, {name, type, address})
  saveData()
}

const _delete = (id:number):void => {
  // filter out deleted construction and save
  constructions = constructions?.filter(c => c.id.toString() !== id.toString()) || null
  saveData()
}


export const constructionRepo = {
  getAll,
  getById,
  delete: _delete,
  create,
  update,
}
