/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConstruction = /* GraphQL */ `
  subscription OnCreateConstruction(
    $filter: ModelSubscriptionConstructionFilterInput
    $owner: String
  ) {
    onCreateConstruction(filter: $filter, owner: $owner) {
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
          _version
          _deleted
          _lastChangedAt
          constructionPartsId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateConstruction = /* GraphQL */ `
  subscription OnUpdateConstruction(
    $filter: ModelSubscriptionConstructionFilterInput
    $owner: String
  ) {
    onUpdateConstruction(filter: $filter, owner: $owner) {
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
          _version
          _deleted
          _lastChangedAt
          constructionPartsId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteConstruction = /* GraphQL */ `
  subscription OnDeleteConstruction(
    $filter: ModelSubscriptionConstructionFilterInput
    $owner: String
  ) {
    onDeleteConstruction(filter: $filter, owner: $owner) {
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
          _version
          _deleted
          _lastChangedAt
          constructionPartsId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreatePart = /* GraphQL */ `
  subscription OnCreatePart(
    $filter: ModelSubscriptionPartFilterInput
    $owner: String
  ) {
    onCreatePart(filter: $filter, owner: $owner) {
      name
      provisions {
        items {
          name
          service
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          partProvisionsId
          owner
        }
        nextToken
        startedAt
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      constructionPartsId
      owner
    }
  }
`;
export const onUpdatePart = /* GraphQL */ `
  subscription OnUpdatePart(
    $filter: ModelSubscriptionPartFilterInput
    $owner: String
  ) {
    onUpdatePart(filter: $filter, owner: $owner) {
      name
      provisions {
        items {
          name
          service
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          partProvisionsId
          owner
        }
        nextToken
        startedAt
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      constructionPartsId
      owner
    }
  }
`;
export const onDeletePart = /* GraphQL */ `
  subscription OnDeletePart(
    $filter: ModelSubscriptionPartFilterInput
    $owner: String
  ) {
    onDeletePart(filter: $filter, owner: $owner) {
      name
      provisions {
        items {
          name
          service
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          partProvisionsId
          owner
        }
        nextToken
        startedAt
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      constructionPartsId
      owner
    }
  }
`;
export const onCreateProvision = /* GraphQL */ `
  subscription OnCreateProvision(
    $filter: ModelSubscriptionProvisionFilterInput
    $owner: String
  ) {
    onCreateProvision(filter: $filter, owner: $owner) {
      name
      service
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      partProvisionsId
      owner
    }
  }
`;
export const onUpdateProvision = /* GraphQL */ `
  subscription OnUpdateProvision(
    $filter: ModelSubscriptionProvisionFilterInput
    $owner: String
  ) {
    onUpdateProvision(filter: $filter, owner: $owner) {
      name
      service
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      partProvisionsId
      owner
    }
  }
`;
export const onDeleteProvision = /* GraphQL */ `
  subscription OnDeleteProvision(
    $filter: ModelSubscriptionProvisionFilterInput
    $owner: String
  ) {
    onDeleteProvision(filter: $filter, owner: $owner) {
      name
      service
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      partProvisionsId
      owner
    }
  }
`;
