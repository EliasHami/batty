// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Statuses = {
  "DRAFT": "DRAFT",
  "FINALIZED": "FINALIZED",
  "SENT": "SENT",
  "ACCEPTED": "ACCEPTED",
  "REFUSED": "REFUSED",
  "CANCELLED": "CANCELLED"
};

const DurationUnits = {
  "DAYS": "DAYS",
  "WEEKS": "WEEKS",
  "HOURS": "HOURS"
};

const Units = {
  "KG": "KG",
  "M2": "M2"
};

const { Customer, Invoice, Construction, Service } = initSchema(schema);

export {
  Customer,
  Invoice,
  Construction,
  Service,
  Statuses,
  DurationUnits,
  Units
};