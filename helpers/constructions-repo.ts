import { Construction } from "types"

const getAll = ():void => {}

const getById = (id:number):void => {}

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
