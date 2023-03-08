/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onCreateCustomer(filter: $filter) {
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
          title
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onUpdateCustomer(filter: $filter) {
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
          title
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onDeleteCustomer(filter: $filter) {
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
          title
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
export const onCreateInvoice = /* GraphQL */ `
  subscription OnCreateInvoice(
    $filter: ModelSubscriptionInvoiceFilterInput
    $owner: String
  ) {
    onCreateInvoice(filter: $filter, owner: $owner) {
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
      sections {
        name
        order
        lines {
          name
          type
          service
          text
          quantity
          unit
          price
          order
          elements
        }
      }
      title
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateInvoice = /* GraphQL */ `
  subscription OnUpdateInvoice(
    $filter: ModelSubscriptionInvoiceFilterInput
    $owner: String
  ) {
    onUpdateInvoice(filter: $filter, owner: $owner) {
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
      sections {
        name
        order
        lines {
          name
          type
          service
          text
          quantity
          unit
          price
          order
          elements
        }
      }
      title
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteInvoice = /* GraphQL */ `
  subscription OnDeleteInvoice(
    $filter: ModelSubscriptionInvoiceFilterInput
    $owner: String
  ) {
    onDeleteInvoice(filter: $filter, owner: $owner) {
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
      sections {
        name
        order
        lines {
          name
          type
          service
          text
          quantity
          unit
          price
          order
          elements
        }
      }
      title
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateConstruction = /* GraphQL */ `
  subscription OnCreateConstruction(
    $filter: ModelSubscriptionConstructionFilterInput
    $owner: String
  ) {
    onCreateConstruction(filter: $filter, owner: $owner) {
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
          title
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
export const onUpdateConstruction = /* GraphQL */ `
  subscription OnUpdateConstruction(
    $filter: ModelSubscriptionConstructionFilterInput
    $owner: String
  ) {
    onUpdateConstruction(filter: $filter, owner: $owner) {
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
          title
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
export const onDeleteConstruction = /* GraphQL */ `
  subscription OnDeleteConstruction(
    $filter: ModelSubscriptionConstructionFilterInput
    $owner: String
  ) {
    onDeleteConstruction(filter: $filter, owner: $owner) {
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
          title
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
export const onCreateService = /* GraphQL */ `
  subscription OnCreateService($filter: ModelSubscriptionServiceFilterInput) {
    onCreateService(filter: $filter) {
      id
      name
      unit
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateService = /* GraphQL */ `
  subscription OnUpdateService($filter: ModelSubscriptionServiceFilterInput) {
    onUpdateService(filter: $filter) {
      id
      name
      unit
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteService = /* GraphQL */ `
  subscription OnDeleteService($filter: ModelSubscriptionServiceFilterInput) {
    onDeleteService(filter: $filter) {
      id
      name
      unit
      createdAt
      updatedAt
    }
  }
`;
