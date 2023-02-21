/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      Invoices {
        items {
          id
          number
          issueDate
          expirationDate
          status
          workStartDate
          workDuration
          workDurationUnit
          customerID
          constructionID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      Constructions {
        items {
          id
          name
          description
          address
          estimate_validity
          parts
          number_lot
          customerID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      Invoices {
        items {
          id
          number
          issueDate
          expirationDate
          status
          workStartDate
          workDuration
          workDurationUnit
          customerID
          constructionID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      Constructions {
        items {
          id
          name
          description
          address
          estimate_validity
          parts
          number_lot
          customerID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      Invoices {
        items {
          id
          number
          issueDate
          expirationDate
          status
          workStartDate
          workDuration
          workDurationUnit
          customerID
          constructionID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      Constructions {
        items {
          id
          name
          description
          address
          estimate_validity
          parts
          number_lot
          customerID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createInvoice = /* GraphQL */ `
  mutation CreateInvoice(
    $input: CreateInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    createInvoice(input: $input, condition: $condition) {
      id
      number
      issueDate
      expirationDate
      status
      workStartDate
      workDuration
      workDurationUnit
      customerID
      constructionID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateInvoice = /* GraphQL */ `
  mutation UpdateInvoice(
    $input: UpdateInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    updateInvoice(input: $input, condition: $condition) {
      id
      number
      issueDate
      expirationDate
      status
      workStartDate
      workDuration
      workDurationUnit
      customerID
      constructionID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteInvoice = /* GraphQL */ `
  mutation DeleteInvoice(
    $input: DeleteInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    deleteInvoice(input: $input, condition: $condition) {
      id
      number
      issueDate
      expirationDate
      status
      workStartDate
      workDuration
      workDurationUnit
      customerID
      constructionID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createConstruction = /* GraphQL */ `
  mutation CreateConstruction(
    $input: CreateConstructionInput!
    $condition: ModelConstructionConditionInput
  ) {
    createConstruction(input: $input, condition: $condition) {
      id
      name
      description
      address
      estimate_validity
      parts
      number_lot
      customerID
      Invoices {
        items {
          id
          number
          issueDate
          expirationDate
          status
          workStartDate
          workDuration
          workDurationUnit
          customerID
          constructionID
          createdAt
          updatedAt
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
      description
      address
      estimate_validity
      parts
      number_lot
      customerID
      Invoices {
        items {
          id
          number
          issueDate
          expirationDate
          status
          workStartDate
          workDuration
          workDurationUnit
          customerID
          constructionID
          createdAt
          updatedAt
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
      description
      address
      estimate_validity
      parts
      number_lot
      customerID
      Invoices {
        items {
          id
          number
          issueDate
          expirationDate
          status
          workStartDate
          workDuration
          workDurationUnit
          customerID
          constructionID
          createdAt
          updatedAt
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
export const createService = /* GraphQL */ `
  mutation CreateService(
    $input: CreateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    createService(input: $input, condition: $condition) {
      id
      name
      unit
      createdAt
      updatedAt
    }
  }
`;
export const updateService = /* GraphQL */ `
  mutation UpdateService(
    $input: UpdateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    updateService(input: $input, condition: $condition) {
      id
      name
      unit
      createdAt
      updatedAt
    }
  }
`;
export const deleteService = /* GraphQL */ `
  mutation DeleteService(
    $input: DeleteServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    deleteService(input: $input, condition: $condition) {
      id
      name
      unit
      createdAt
      updatedAt
    }
  }
`;
