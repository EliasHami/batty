import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerConstruction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Construction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly dateCreated?: string | null;
  readonly dateUpdated?: string | null;
  readonly description: string;
  readonly customer: string;
  readonly address: string;
  readonly estimate_validity?: number | null;
  readonly parts: (Part | null)[];
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
  readonly dateCreated?: string | null;
  readonly dateUpdated?: string | null;
  readonly description: string;
  readonly customer: string;
  readonly address: string;
  readonly estimate_validity?: number | null;
  readonly parts: AsyncCollection<Part>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Construction = LazyLoading extends LazyLoadingDisabled ? EagerConstruction : LazyConstruction

export declare const Construction: (new (init: ModelInit<Construction>) => Construction) & {
  copyOf(source: Construction, mutator: (draft: MutableModel<Construction>) => MutableModel<Construction> | void): Construction;
}

type EagerPart = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Part, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly provisions?: (Provision | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly constructionPartsId?: string | null;
}

type LazyPart = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Part, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly provisions: AsyncCollection<Provision>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly constructionPartsId?: string | null;
}

export declare type Part = LazyLoading extends LazyLoadingDisabled ? EagerPart : LazyPart

export declare const Part: (new (init: ModelInit<Part>) => Part) & {
  copyOf(source: Part, mutator: (draft: MutableModel<Part>) => MutableModel<Part> | void): Part;
}

type EagerProvision = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Provision, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly service?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly partProvisionsId?: string | null;
}

type LazyProvision = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Provision, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly service?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly partProvisionsId?: string | null;
}

export declare type Provision = LazyLoading extends LazyLoadingDisabled ? EagerProvision : LazyProvision

export declare const Provision: (new (init: ModelInit<Provision>) => Provision) & {
  copyOf(source: Provision, mutator: (draft: MutableModel<Provision>) => MutableModel<Provision> | void): Provision;
}