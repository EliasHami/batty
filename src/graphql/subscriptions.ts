/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConstruction = /* GraphQL */ `
  subscription OnCreateConstruction(
    $filter: ModelSubscriptionConstructionFilterInput
  ) {
    onCreateConstruction(filter: $filter) {
      id
      name
      dateCreated
      dateUpdated
      description
      customer
      address
      estimate_validity
      parts {
        items {
          name
          id
          createdAt
          updatedAt
          constructionPartsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateConstruction = /* GraphQL */ `
  subscription OnUpdateConstruction(
    $filter: ModelSubscriptionConstructionFilterInput
  ) {
    onUpdateConstruction(filter: $filter) {
      id
      name
      dateCreated
      dateUpdated
      description
      customer
      address
      estimate_validity
      parts {
        items {
          name
          id
          createdAt
          updatedAt
          constructionPartsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteConstruction = /* GraphQL */ `
  subscription OnDeleteConstruction(
    $filter: ModelSubscriptionConstructionFilterInput
  ) {
    onDeleteConstruction(filter: $filter) {
      id
      name
      dateCreated
      dateUpdated
      description
      customer
      address
      estimate_validity
      parts {
        items {
          name
          id
          createdAt
          updatedAt
          constructionPartsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePart = /* GraphQL */ `
  subscription OnCreatePart($filter: ModelSubscriptionPartFilterInput) {
    onCreatePart(filter: $filter) {
      name
      provisions {
        items {
          name
          service
          id
          createdAt
          updatedAt
          partProvisionsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      constructionPartsId
    }
  }
`;
export const onUpdatePart = /* GraphQL */ `
  subscription OnUpdatePart($filter: ModelSubscriptionPartFilterInput) {
    onUpdatePart(filter: $filter) {
      name
      provisions {
        items {
          name
          service
          id
          createdAt
          updatedAt
          partProvisionsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      constructionPartsId
    }
  }
`;
export const onDeletePart = /* GraphQL */ `
  subscription OnDeletePart($filter: ModelSubscriptionPartFilterInput) {
    onDeletePart(filter: $filter) {
      name
      provisions {
        items {
          name
          service
          id
          createdAt
          updatedAt
          partProvisionsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      constructionPartsId
    }
  }
`;
export const onCreateProvision = /* GraphQL */ `
  subscription OnCreateProvision(
    $filter: ModelSubscriptionProvisionFilterInput
  ) {
    onCreateProvision(filter: $filter) {
      name
      service
      id
      createdAt
      updatedAt
      partProvisionsId
    }
  }
`;
export const onUpdateProvision = /* GraphQL */ `
  subscription OnUpdateProvision(
    $filter: ModelSubscriptionProvisionFilterInput
  ) {
    onUpdateProvision(filter: $filter) {
      name
      service
      id
      createdAt
      updatedAt
      partProvisionsId
    }
  }
`;
export const onDeleteProvision = /* GraphQL */ `
  subscription OnDeleteProvision(
    $filter: ModelSubscriptionProvisionFilterInput
  ) {
    onDeleteProvision(filter: $filter) {
      name
      service
      id
      createdAt
      updatedAt
      partProvisionsId
    }
  }
`;
