/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Invoices {
          nextToken
        }
        Constructions {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInvoice = /* GraphQL */ `
  query GetInvoice($id: ID!) {
    getInvoice(id: $id) {
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
export const listInvoices = /* GraphQL */ `
  query ListInvoices(
    $filter: ModelInvoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvoices(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const invoicesByCustomerID = /* GraphQL */ `
  query InvoicesByCustomerID(
    $customerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInvoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    invoicesByCustomerID(
      customerID: $customerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const invoicesByConstructionID = /* GraphQL */ `
  query InvoicesByConstructionID(
    $constructionID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInvoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    invoicesByConstructionID(
      constructionID: $constructionID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getConstruction = /* GraphQL */ `
  query GetConstruction($id: ID!) {
    getConstruction(id: $id) {
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
        address
        estimate_validity
        parts
        number_lot
        customerID
        Invoices {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const constructionsByCustomerID = /* GraphQL */ `
  query ConstructionsByCustomerID(
    $customerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelConstructionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    constructionsByCustomerID(
      customerID: $customerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        address
        estimate_validity
        parts
        number_lot
        customerID
        Invoices {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getService = /* GraphQL */ `
  query GetService($id: ID!) {
    getService(id: $id) {
      id
      name
      unit
      createdAt
      updatedAt
    }
  }
`;
export const listServices = /* GraphQL */ `
  query ListServices(
    $filter: ModelServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        unit
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
