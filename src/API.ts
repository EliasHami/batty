/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateConstructionInput = {
  id?: string | null,
  name: string,
  dateCreated?: string | null,
  dateUpdated?: string | null,
  description: string,
  customer: string,
  address: string,
  estimate_validity?: number | null,
};

export type ModelConstructionConditionInput = {
  name?: ModelStringInput | null,
  dateCreated?: ModelStringInput | null,
  dateUpdated?: ModelStringInput | null,
  description?: ModelStringInput | null,
  customer?: ModelStringInput | null,
  address?: ModelStringInput | null,
  estimate_validity?: ModelIntInput | null,
  and?: Array< ModelConstructionConditionInput | null > | null,
  or?: Array< ModelConstructionConditionInput | null > | null,
  not?: ModelConstructionConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Construction = {
  __typename: "Construction",
  id: string,
  name: string,
  dateCreated?: string | null,
  dateUpdated?: string | null,
  description: string,
  customer: string,
  address: string,
  estimate_validity?: number | null,
  parts?: ModelPartConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelPartConnection = {
  __typename: "ModelPartConnection",
  items:  Array<Part | null >,
  nextToken?: string | null,
};

export type Part = {
  __typename: "Part",
  name: string,
  provisions?: ModelProvisionConnection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  constructionPartsId: string,
  owner?: string | null,
};

export type ModelProvisionConnection = {
  __typename: "ModelProvisionConnection",
  items:  Array<Provision | null >,
  nextToken?: string | null,
};

export type Provision = {
  __typename: "Provision",
  name?: string | null,
  service?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  partProvisionsId?: string | null,
  owner?: string | null,
};

export type UpdateConstructionInput = {
  id: string,
  name?: string | null,
  dateCreated?: string | null,
  dateUpdated?: string | null,
  description?: string | null,
  customer?: string | null,
  address?: string | null,
  estimate_validity?: number | null,
};

export type DeleteConstructionInput = {
  id: string,
};

export type CreatePartInput = {
  name: string,
  id?: string | null,
  constructionPartsId: string,
};

export type ModelPartConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelPartConditionInput | null > | null,
  or?: Array< ModelPartConditionInput | null > | null,
  not?: ModelPartConditionInput | null,
  constructionPartsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePartInput = {
  name?: string | null,
  id: string,
  constructionPartsId?: string | null,
};

export type DeletePartInput = {
  id: string,
};

export type CreateProvisionInput = {
  name?: string | null,
  service?: string | null,
  id?: string | null,
  partProvisionsId?: string | null,
};

export type ModelProvisionConditionInput = {
  name?: ModelStringInput | null,
  service?: ModelStringInput | null,
  and?: Array< ModelProvisionConditionInput | null > | null,
  or?: Array< ModelProvisionConditionInput | null > | null,
  not?: ModelProvisionConditionInput | null,
  partProvisionsId?: ModelIDInput | null,
};

export type UpdateProvisionInput = {
  name?: string | null,
  service?: string | null,
  id: string,
  partProvisionsId?: string | null,
};

export type DeleteProvisionInput = {
  id: string,
};

export type ModelConstructionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  dateCreated?: ModelStringInput | null,
  dateUpdated?: ModelStringInput | null,
  description?: ModelStringInput | null,
  customer?: ModelStringInput | null,
  address?: ModelStringInput | null,
  estimate_validity?: ModelIntInput | null,
  and?: Array< ModelConstructionFilterInput | null > | null,
  or?: Array< ModelConstructionFilterInput | null > | null,
  not?: ModelConstructionFilterInput | null,
};

export type ModelConstructionConnection = {
  __typename: "ModelConstructionConnection",
  items:  Array<Construction | null >,
  nextToken?: string | null,
};

export type ModelPartFilterInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelPartFilterInput | null > | null,
  or?: Array< ModelPartFilterInput | null > | null,
  not?: ModelPartFilterInput | null,
  constructionPartsId?: ModelIDInput | null,
};

export type ModelProvisionFilterInput = {
  name?: ModelStringInput | null,
  service?: ModelStringInput | null,
  and?: Array< ModelProvisionFilterInput | null > | null,
  or?: Array< ModelProvisionFilterInput | null > | null,
  not?: ModelProvisionFilterInput | null,
  partProvisionsId?: ModelIDInput | null,
};

export type ModelSubscriptionConstructionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  dateCreated?: ModelSubscriptionStringInput | null,
  dateUpdated?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  customer?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  estimate_validity?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionConstructionFilterInput | null > | null,
  or?: Array< ModelSubscriptionConstructionFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionPartFilterInput = {
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPartFilterInput | null > | null,
  or?: Array< ModelSubscriptionPartFilterInput | null > | null,
};

export type ModelSubscriptionProvisionFilterInput = {
  name?: ModelSubscriptionStringInput | null,
  service?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProvisionFilterInput | null > | null,
  or?: Array< ModelSubscriptionProvisionFilterInput | null > | null,
};

export type CreateConstructionMutationVariables = {
  input: CreateConstructionInput,
  condition?: ModelConstructionConditionInput | null,
};

export type CreateConstructionMutation = {
  createConstruction?:  {
    __typename: "Construction",
    id: string,
    name: string,
    dateCreated?: string | null,
    dateUpdated?: string | null,
    description: string,
    customer: string,
    address: string,
    estimate_validity?: number | null,
    parts?:  {
      __typename: "ModelPartConnection",
      items:  Array< {
        __typename: "Part",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        constructionPartsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateConstructionMutationVariables = {
  input: UpdateConstructionInput,
  condition?: ModelConstructionConditionInput | null,
};

export type UpdateConstructionMutation = {
  updateConstruction?:  {
    __typename: "Construction",
    id: string,
    name: string,
    dateCreated?: string | null,
    dateUpdated?: string | null,
    description: string,
    customer: string,
    address: string,
    estimate_validity?: number | null,
    parts?:  {
      __typename: "ModelPartConnection",
      items:  Array< {
        __typename: "Part",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        constructionPartsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteConstructionMutationVariables = {
  input: DeleteConstructionInput,
  condition?: ModelConstructionConditionInput | null,
};

export type DeleteConstructionMutation = {
  deleteConstruction?:  {
    __typename: "Construction",
    id: string,
    name: string,
    dateCreated?: string | null,
    dateUpdated?: string | null,
    description: string,
    customer: string,
    address: string,
    estimate_validity?: number | null,
    parts?:  {
      __typename: "ModelPartConnection",
      items:  Array< {
        __typename: "Part",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        constructionPartsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreatePartMutationVariables = {
  input: CreatePartInput,
  condition?: ModelPartConditionInput | null,
};

export type CreatePartMutation = {
  createPart?:  {
    __typename: "Part",
    name: string,
    provisions?:  {
      __typename: "ModelProvisionConnection",
      items:  Array< {
        __typename: "Provision",
        name?: string | null,
        service?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        partProvisionsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    constructionPartsId: string,
    owner?: string | null,
  } | null,
};

export type UpdatePartMutationVariables = {
  input: UpdatePartInput,
  condition?: ModelPartConditionInput | null,
};

export type UpdatePartMutation = {
  updatePart?:  {
    __typename: "Part",
    name: string,
    provisions?:  {
      __typename: "ModelProvisionConnection",
      items:  Array< {
        __typename: "Provision",
        name?: string | null,
        service?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        partProvisionsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    constructionPartsId: string,
    owner?: string | null,
  } | null,
};

export type DeletePartMutationVariables = {
  input: DeletePartInput,
  condition?: ModelPartConditionInput | null,
};

export type DeletePartMutation = {
  deletePart?:  {
    __typename: "Part",
    name: string,
    provisions?:  {
      __typename: "ModelProvisionConnection",
      items:  Array< {
        __typename: "Provision",
        name?: string | null,
        service?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        partProvisionsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    constructionPartsId: string,
    owner?: string | null,
  } | null,
};

export type CreateProvisionMutationVariables = {
  input: CreateProvisionInput,
  condition?: ModelProvisionConditionInput | null,
};

export type CreateProvisionMutation = {
  createProvision?:  {
    __typename: "Provision",
    name?: string | null,
    service?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    partProvisionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateProvisionMutationVariables = {
  input: UpdateProvisionInput,
  condition?: ModelProvisionConditionInput | null,
};

export type UpdateProvisionMutation = {
  updateProvision?:  {
    __typename: "Provision",
    name?: string | null,
    service?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    partProvisionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteProvisionMutationVariables = {
  input: DeleteProvisionInput,
  condition?: ModelProvisionConditionInput | null,
};

export type DeleteProvisionMutation = {
  deleteProvision?:  {
    __typename: "Provision",
    name?: string | null,
    service?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    partProvisionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetConstructionQueryVariables = {
  id: string,
};

export type GetConstructionQuery = {
  getConstruction?:  {
    __typename: "Construction",
    id: string,
    name: string,
    dateCreated?: string | null,
    dateUpdated?: string | null,
    description: string,
    customer: string,
    address: string,
    estimate_validity?: number | null,
    parts?:  {
      __typename: "ModelPartConnection",
      items:  Array< {
        __typename: "Part",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        constructionPartsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListConstructionsQueryVariables = {
  filter?: ModelConstructionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConstructionsQuery = {
  listConstructions?:  {
    __typename: "ModelConstructionConnection",
    items:  Array< {
      __typename: "Construction",
      id: string,
      name: string,
      dateCreated?: string | null,
      dateUpdated?: string | null,
      description: string,
      customer: string,
      address: string,
      estimate_validity?: number | null,
      parts?:  {
        __typename: "ModelPartConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPartQueryVariables = {
  id: string,
};

export type GetPartQuery = {
  getPart?:  {
    __typename: "Part",
    name: string,
    provisions?:  {
      __typename: "ModelProvisionConnection",
      items:  Array< {
        __typename: "Provision",
        name?: string | null,
        service?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        partProvisionsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    constructionPartsId: string,
    owner?: string | null,
  } | null,
};

export type ListPartsQueryVariables = {
  filter?: ModelPartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPartsQuery = {
  listParts?:  {
    __typename: "ModelPartConnection",
    items:  Array< {
      __typename: "Part",
      name: string,
      provisions?:  {
        __typename: "ModelProvisionConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      constructionPartsId: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProvisionQueryVariables = {
  id: string,
};

export type GetProvisionQuery = {
  getProvision?:  {
    __typename: "Provision",
    name?: string | null,
    service?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    partProvisionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListProvisionsQueryVariables = {
  filter?: ModelProvisionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProvisionsQuery = {
  listProvisions?:  {
    __typename: "ModelProvisionConnection",
    items:  Array< {
      __typename: "Provision",
      name?: string | null,
      service?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      partProvisionsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateConstructionSubscriptionVariables = {
  filter?: ModelSubscriptionConstructionFilterInput | null,
  owner?: string | null,
};

export type OnCreateConstructionSubscription = {
  onCreateConstruction?:  {
    __typename: "Construction",
    id: string,
    name: string,
    dateCreated?: string | null,
    dateUpdated?: string | null,
    description: string,
    customer: string,
    address: string,
    estimate_validity?: number | null,
    parts?:  {
      __typename: "ModelPartConnection",
      items:  Array< {
        __typename: "Part",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        constructionPartsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateConstructionSubscriptionVariables = {
  filter?: ModelSubscriptionConstructionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateConstructionSubscription = {
  onUpdateConstruction?:  {
    __typename: "Construction",
    id: string,
    name: string,
    dateCreated?: string | null,
    dateUpdated?: string | null,
    description: string,
    customer: string,
    address: string,
    estimate_validity?: number | null,
    parts?:  {
      __typename: "ModelPartConnection",
      items:  Array< {
        __typename: "Part",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        constructionPartsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteConstructionSubscriptionVariables = {
  filter?: ModelSubscriptionConstructionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteConstructionSubscription = {
  onDeleteConstruction?:  {
    __typename: "Construction",
    id: string,
    name: string,
    dateCreated?: string | null,
    dateUpdated?: string | null,
    description: string,
    customer: string,
    address: string,
    estimate_validity?: number | null,
    parts?:  {
      __typename: "ModelPartConnection",
      items:  Array< {
        __typename: "Part",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        constructionPartsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreatePartSubscriptionVariables = {
  filter?: ModelSubscriptionPartFilterInput | null,
  owner?: string | null,
};

export type OnCreatePartSubscription = {
  onCreatePart?:  {
    __typename: "Part",
    name: string,
    provisions?:  {
      __typename: "ModelProvisionConnection",
      items:  Array< {
        __typename: "Provision",
        name?: string | null,
        service?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        partProvisionsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    constructionPartsId: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePartSubscriptionVariables = {
  filter?: ModelSubscriptionPartFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePartSubscription = {
  onUpdatePart?:  {
    __typename: "Part",
    name: string,
    provisions?:  {
      __typename: "ModelProvisionConnection",
      items:  Array< {
        __typename: "Provision",
        name?: string | null,
        service?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        partProvisionsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    constructionPartsId: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePartSubscriptionVariables = {
  filter?: ModelSubscriptionPartFilterInput | null,
  owner?: string | null,
};

export type OnDeletePartSubscription = {
  onDeletePart?:  {
    __typename: "Part",
    name: string,
    provisions?:  {
      __typename: "ModelProvisionConnection",
      items:  Array< {
        __typename: "Provision",
        name?: string | null,
        service?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        partProvisionsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    constructionPartsId: string,
    owner?: string | null,
  } | null,
};

export type OnCreateProvisionSubscriptionVariables = {
  filter?: ModelSubscriptionProvisionFilterInput | null,
  owner?: string | null,
};

export type OnCreateProvisionSubscription = {
  onCreateProvision?:  {
    __typename: "Provision",
    name?: string | null,
    service?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    partProvisionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateProvisionSubscriptionVariables = {
  filter?: ModelSubscriptionProvisionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateProvisionSubscription = {
  onUpdateProvision?:  {
    __typename: "Provision",
    name?: string | null,
    service?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    partProvisionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteProvisionSubscriptionVariables = {
  filter?: ModelSubscriptionProvisionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteProvisionSubscription = {
  onDeleteProvision?:  {
    __typename: "Provision",
    name?: string | null,
    service?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    partProvisionsId?: string | null,
    owner?: string | null,
  } | null,
};
