// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Construction, Part, Provision } = initSchema(schema);

export {
  Construction,
  Part,
  Provision
};