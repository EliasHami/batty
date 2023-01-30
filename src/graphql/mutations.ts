/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createConstruction = /* GraphQL */ `
  mutation CreateConstruction(
    $input: CreateConstructionInput!
    $condition: ModelConstructionConditionInput
  ) {
    createConstruction(input: $input, condition: $condition) {
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateConstruction = /* GraphQL */ `
  mutation UpdateConstruction(
    $input: UpdateConstructionInput!
    $condition: ModelConstructionConditionInput
  ) {
    updateConstruction(input: $input, condition: $condition) {
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteConstruction = /* GraphQL */ `
  mutation DeleteConstruction(
    $input: DeleteConstructionInput!
    $condition: ModelConstructionConditionInput
  ) {
    deleteConstruction(input: $input, condition: $condition) {
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPart = /* GraphQL */ `
  mutation CreatePart(
    $input: CreatePartInput!
    $condition: ModelPartConditionInput
  ) {
    createPart(input: $input, condition: $condition) {
      name
      provisions {
        items {
          name
          service
          id
          createdAt
          updatedAt
          partProvisionsId
          owner
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      constructionPartsId
      owner
    }
  }
`;
export const updatePart = /* GraphQL */ `
  mutation UpdatePart(
    $input: UpdatePartInput!
    $condition: ModelPartConditionInput
  ) {
    updatePart(input: $input, condition: $condition) {
      name
      provisions {
        items {
          name
          service
          id
          createdAt
          updatedAt
          partProvisionsId
          owner
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      constructionPartsId
      owner
    }
  }
`;
export const deletePart = /* GraphQL */ `
  mutation DeletePart(
    $input: DeletePartInput!
    $condition: ModelPartConditionInput
  ) {
    deletePart(input: $input, condition: $condition) {
      name
      provisions {
        items {
          name
          service
          id
          createdAt
          updatedAt
          partProvisionsId
          owner
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      constructionPartsId
      owner
    }
  }
`;
export const createProvision = /* GraphQL */ `
  mutation CreateProvision(
    $input: CreateProvisionInput!
    $condition: ModelProvisionConditionInput
  ) {
    createProvision(input: $input, condition: $condition) {
      name
      service
      id
      createdAt
      updatedAt
      partProvisionsId
      owner
    }
  }
`;
export const updateProvision = /* GraphQL */ `
  mutation UpdateProvision(
    $input: UpdateProvisionInput!
    $condition: ModelProvisionConditionInput
  ) {
    updateProvision(input: $input, condition: $condition) {
      name
      service
      id
      createdAt
      updatedAt
      partProvisionsId
      owner
    }
  }
`;
export const deleteProvision = /* GraphQL */ `
  mutation DeleteProvision(
    $input: DeleteProvisionInput!
    $condition: ModelProvisionConditionInput
  ) {
    deleteProvision(input: $input, condition: $condition) {
      name
      service
      id
      createdAt
      updatedAt
      partProvisionsId
      owner
    }
  }
`;
