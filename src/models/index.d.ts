import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum Units {
  KG = "KG",
  M2 = "M2"
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
  readonly ConstructionServices?: (ConstructionService | null)[] | null;
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
  readonly ConstructionServices: AsyncCollection<ConstructionService>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Construction = LazyLoading extends LazyLoadingDisabled ? EagerConstruction : LazyConstruction

export declare const Construction: (new (init: ModelInit<Construction>) => Construction) & {
  copyOf(source: Construction, mutator: (draft: MutableModel<Construction>) => MutableModel<Construction> | void): Construction;
}

type EagerConstructionService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ConstructionService, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly lot?: number | null;
  readonly parts?: string | null;
  readonly Service?: Service | null;
  readonly constructionID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly constructionServiceServiceId?: string | null;
}

type LazyConstructionService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ConstructionService, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly lot?: number | null;
  readonly parts?: string | null;
  readonly Service: AsyncItem<Service | undefined>;
  readonly constructionID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly constructionServiceServiceId?: string | null;
}

export declare type ConstructionService = LazyLoading extends LazyLoadingDisabled ? EagerConstructionService : LazyConstructionService

export declare const ConstructionService: (new (init: ModelInit<ConstructionService>) => ConstructionService) & {
  copyOf(source: ConstructionService, mutator: (draft: MutableModel<ConstructionService>) => MutableModel<ConstructionService> | void): ConstructionService;
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