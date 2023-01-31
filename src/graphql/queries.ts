/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getConstruction = /* GraphQL */ `
  query GetConstruction($id: ID!) {
    getConstruction(id: $id) {
      id
      name
      description
      customer
      address
      estimate_validity
      parts {
        items {
          name
          constructionID
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
export const listConstructions = /* GraphQL */ `
  query ListConstructions(
    $filter: ModelConstructionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConstructions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        customer
        address
        estimate_validity
        parts {
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
      nextToken
      startedAt
    }
  }
`;
export const syncConstructions = /* GraphQL */ `
  query SyncConstructions(
    $filter: ModelConstructionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConstructions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        customer
        address
        estimate_validity
        parts {
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
      nextToken
      startedAt
    }
  }
`;
export const getPart = /* GraphQL */ `
  query GetPart($id: ID!) {
    getPart(id: $id) {
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
      constructionID
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listParts = /* GraphQL */ `
  query ListParts(
    $filter: ModelPartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        provisions {
          nextToken
          startedAt
        }
        constructionID
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncParts = /* GraphQL */ `
  query SyncParts(
    $filter: ModelPartFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncParts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        name
        provisions {
          nextToken
          startedAt
        }
        constructionID
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const partsByConstructionID = /* GraphQL */ `
  query PartsByConstructionID(
    $constructionID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    partsByConstructionID(
      constructionID: $constructionID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        name
        provisions {
          nextToken
          startedAt
        }
        constructionID
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getProvision = /* GraphQL */ `
  query GetProvision($id: ID!) {
    getProvision(id: $id) {
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
export const listProvisions = /* GraphQL */ `
  query ListProvisions(
    $filter: ModelProvisionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProvisions(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncProvisions = /* GraphQL */ `
  query SyncProvisions(
    $filter: ModelProvisionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProvisions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
