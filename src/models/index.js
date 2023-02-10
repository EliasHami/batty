// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Units = {
  "KG": "KG",
  "M2": "M2"
};

const { Construction, ConstructionService, Service } = initSchema(schema);

export {
  Construction,
  ConstructionService,
  Service,
  Units
};