import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum Statuses {
  DRAFT = "DRAFT",
  FINALIZED = "FINALIZED",
  SENT = "SENT",
  ACCEPTED = "ACCEPTED",
  REFUSED = "REFUSED",
  CANCELLED = "CANCELLED"
}

export enum DurationUnits {
  DAYS = "DAYS",
  WEEKS = "WEEKS",
  HOURS = "HOURS"
}

export enum Units {
  KG = "KG",
  M2 = "M2"
}



type EagerCustomer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Customer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Invoices?: (Invoice | null)[] | null;
  readonly Constructions?: (Construction | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCustomer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Customer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Invoices: AsyncCollection<Invoice>;
  readonly Constructions: AsyncCollection<Construction>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Customer = LazyLoading extends LazyLoadingDisabled ? EagerCustomer : LazyCustomer

export declare const Customer: (new (init: ModelInit<Customer>) => Customer) & {
  copyOf(source: Customer, mutator: (draft: MutableModel<Customer>) => MutableModel<Customer> | void): Customer;
}

type EagerInvoice = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Invoice, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly number?: string | null;
  readonly amount?: number | null;
  readonly issueDate?: string | null;
  readonly expirationDate?: string | null;
  readonly status?: Statuses | keyof typeof Statuses | null;
  readonly workStartDate?: string | null;
  readonly workDuration?: number | null;
  readonly workDurationUnit?: DurationUnits | keyof typeof DurationUnits | null;
  readonly customerID?: string | null;
  readonly constructionID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInvoice = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Invoice, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly number?: string | null;
  readonly amount?: number | null;
  readonly issueDate?: string | null;
  readonly expirationDate?: string | null;
  readonly status?: Statuses | keyof typeof Statuses | null;
  readonly workStartDate?: string | null;
  readonly workDuration?: number | null;
  readonly workDurationUnit?: DurationUnits | keyof typeof DurationUnits | null;
  readonly customerID?: string | null;
  readonly constructionID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Invoice = LazyLoading extends LazyLoadingDisabled ? EagerInvoice : LazyInvoice

export declare const Invoice: (new (init: ModelInit<Invoice>) => Invoice) & {
  copyOf(source: Invoice, mutator: (draft: MutableModel<Invoice>) => MutableModel<Invoice> | void): Invoice;
}

type EagerConstruction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Construction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly customer: string;
  readonly address: string;
  readonly estimate_validity?: number | null;
  readonly parts?: string | null;
  readonly number_lot?: number | null;
  readonly customerID?: string | null;
  readonly Invoices?: (Invoice | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConstruction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Construction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly customer: string;
  readonly address: string;
  readonly estimate_validity?: number | null;
  readonly parts?: string | null;
  readonly number_lot?: number | null;
  readonly customerID?: string | null;
  readonly Invoices: AsyncCollection<Invoice>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Construction = LazyLoading extends LazyLoadingDisabled ? EagerConstruction : LazyConstruction

export declare const Construction: (new (init: ModelInit<Construction>) => Construction) & {
  copyOf(source: Construction, mutator: (draft: MutableModel<Construction>) => MutableModel<Construction> | void): Construction;
}

type EagerService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Service, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly unit?: Units | keyof typeof Units | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Service, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly unit?: Units | keyof typeof Units | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Service = LazyLoading extends LazyLoadingDisabled ? EagerService : LazyService

export declare const Service: (new (init: ModelInit<Service>) => Service) & {
  copyOf(source: Service, mutator: (draft: MutableModel<Service>) => MutableModel<Service> | void): Service;
}