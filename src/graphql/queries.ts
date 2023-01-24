/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getConstruction = /* GraphQL */ `
  query GetConstruction($id: ID!) {
    getConstruction(id: $id) {
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
        dateCreated
        dateUpdated
        description
        customer
        address
        estimate_validity
        parts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
        }
        id
        createdAt
        updatedAt
        constructionPartsId
      }
      nextToken
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
      partProvisionsId
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
        partProvisionsId
      }
      nextToken
    }
  }
`;
