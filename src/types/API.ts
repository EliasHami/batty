/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCustomerInput = {
  id?: string | null,
};

export type ModelCustomerConditionInput = {
  and?: Array< ModelCustomerConditionInput | null > | null,
  or?: Array< ModelCustomerConditionInput | null > | null,
  not?: ModelCustomerConditionInput | null,
};

export type Customer = {
  __typename: "Customer",
  id: string,
  Invoices?: ModelInvoiceConnection | null,
  Constructions?: ModelConstructionConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelInvoiceConnection = {
  __typename: "ModelInvoiceConnection",
  items:  Array<Invoice | null >,
  nextToken?: string | null,
};

export type Invoice = {
  __typename: "Invoice",
  id: string,
  number?: string | null,
  amount?: number | null,
  issueDate?: string | null,
  expirationDate?: string | null,
  status?: Statuses | null,
  workStartDate?: string | null,
  workDuration?: number | null,
  workDurationUnit?: DurationUnits | null,
  customerID?: string | null,
  constructionID?: string | null,
  createdAt: string,
  updatedAt: string,
};

export enum Statuses {
  DRAFT = "DRAFT",
  FINALIZED = "FINALIZED",
  SENT = "SENT",
  ACCEPTED = "ACCEPTED",
  REFUSED = "REFUSED",
  CANCELLED = "CANCELLED",
}


export enum DurationUnits {
  DAYS = "DAYS",
  WEEKS = "WEEKS",
  HOURS = "HOURS",
}


export type ModelConstructionConnection = {
  __typename: "ModelConstructionConnection",
  items:  Array<Construction | null >,
  nextToken?: string | null,
};

export type Construction = {
  __typename: "Construction",
  id: string,
  name: string,
  description: string,
  address: string,
  estimate_validity?: number | null,
  parts?: string | null,
  number_lot?: number | null,
  customerID?: string | null,
  Invoices?: ModelInvoiceConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateCustomerInput = {
  id: string,
};

export type DeleteCustomerInput = {
  id: string,
};

export type CreateInvoiceInput = {
  id?: string | null,
  number?: string | null,
  amount?: number | null,
  issueDate?: string | null,
  expirationDate?: string | null,
  status?: Statuses | null,
  workStartDate?: string | null,
  workDuration?: number | null,
  workDurationUnit?: DurationUnits | null,
  customerID?: string | null,
  constructionID?: string | null,
};

export type ModelInvoiceConditionInput = {
  number?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  issueDate?: ModelStringInput | null,
  expirationDate?: ModelStringInput | null,
  status?: ModelStatusesInput | null,
  workStartDate?: ModelStringInput | null,
  workDuration?: ModelIntInput | null,
  workDurationUnit?: ModelDurationUnitsInput | null,
  customerID?: ModelIDInput | null,
  constructionID?: ModelIDInput | null,
  and?: Array< ModelInvoiceConditionInput | null > | null,
  or?: Array< ModelInvoiceConditionInput | null > | null,
  not?: ModelInvoiceConditionInput | null,
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

export type ModelFloatInput = {
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

export type ModelStatusesInput = {
  eq?: Statuses | null,
  ne?: Statuses | null,
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

export type ModelDurationUnitsInput = {
  eq?: DurationUnits | null,
  ne?: DurationUnits | null,
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

export type UpdateInvoiceInput = {
  id: string,
  number?: string | null,
  amount?: number | null,
  issueDate?: string | null,
  expirationDate?: string | null,
  status?: Statuses | null,
  workStartDate?: string | null,
  workDuration?: number | null,
  workDurationUnit?: DurationUnits | null,
  customerID?: string | null,
  constructionID?: string | null,
};

export type DeleteInvoiceInput = {
  id: string,
};

export type CreateConstructionInput = {
  id?: string | null,
  name: string,
  description: string,
  address: string,
  estimate_validity?: number | null,
  parts?: string | null,
  number_lot?: number | null,
  customerID?: string | null,
};

export type ModelConstructionConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  address?: ModelStringInput | null,
  estimate_validity?: ModelIntInput | null,
  parts?: ModelStringInput | null,
  number_lot?: ModelIntInput | null,
  customerID?: ModelIDInput | null,
  and?: Array< ModelConstructionConditionInput | null > | null,
  or?: Array< ModelConstructionConditionInput | null > | null,
  not?: ModelConstructionConditionInput | null,
};

export type UpdateConstructionInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  address?: string | null,
  estimate_validity?: number | null,
  parts?: string | null,
  number_lot?: number | null,
  customerID?: string | null,
};

export type DeleteConstructionInput = {
  id: string,
};

export type CreateServiceInput = {
  id?: string | null,
  name?: string | null,
  unit?: Units | null,
};

export enum Units {
  KG = "KG",
  M2 = "M2",
}


export type ModelServiceConditionInput = {
  name?: ModelStringInput | null,
  unit?: ModelUnitsInput | null,
  and?: Array< ModelServiceConditionInput | null > | null,
  or?: Array< ModelServiceConditionInput | null > | null,
  not?: ModelServiceConditionInput | null,
};

export type ModelUnitsInput = {
  eq?: Units | null,
  ne?: Units | null,
};

export type Service = {
  __typename: "Service",
  id: string,
  name?: string | null,
  unit?: Units | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateServiceInput = {
  id: string,
  name?: string | null,
  unit?: Units | null,
};

export type DeleteServiceInput = {
  id: string,
};

export type ModelCustomerFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelCustomerFilterInput | null > | null,
  or?: Array< ModelCustomerFilterInput | null > | null,
  not?: ModelCustomerFilterInput | null,
};

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection",
  items:  Array<Customer | null >,
  nextToken?: string | null,
};

export type ModelInvoiceFilterInput = {
  id?: ModelIDInput | null,
  number?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  issueDate?: ModelStringInput | null,
  expirationDate?: ModelStringInput | null,
  status?: ModelStatusesInput | null,
  workStartDate?: ModelStringInput | null,
  workDuration?: ModelIntInput | null,
  workDurationUnit?: ModelDurationUnitsInput | null,
  customerID?: ModelIDInput | null,
  constructionID?: ModelIDInput | null,
  and?: Array< ModelInvoiceFilterInput | null > | null,
  or?: Array< ModelInvoiceFilterInput | null > | null,
  not?: ModelInvoiceFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelConstructionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  address?: ModelStringInput | null,
  estimate_validity?: ModelIntInput | null,
  parts?: ModelStringInput | null,
  number_lot?: ModelIntInput | null,
  customerID?: ModelIDInput | null,
  and?: Array< ModelConstructionFilterInput | null > | null,
  or?: Array< ModelConstructionFilterInput | null > | null,
  not?: ModelConstructionFilterInput | null,
};

export type ModelServiceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  unit?: ModelUnitsInput | null,
  and?: Array< ModelServiceFilterInput | null > | null,
  or?: Array< ModelServiceFilterInput | null > | null,
  not?: ModelServiceFilterInput | null,
};

export type ModelServiceConnection = {
  __typename: "ModelServiceConnection",
  items:  Array<Service | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCustomerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
  or?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
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

export type ModelSubscriptionInvoiceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  number?: ModelSubscriptionStringInput | null,
  amount?: ModelSubscriptionFloatInput | null,
  issueDate?: ModelSubscriptionStringInput | null,
  expirationDate?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  workStartDate?: ModelSubscriptionStringInput | null,
  workDuration?: ModelSubscriptionIntInput | null,
  workDurationUnit?: ModelSubscriptionStringInput | null,
  customerID?: ModelSubscriptionIDInput | null,
  constructionID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionInvoiceFilterInput | null > | null,
  or?: Array< ModelSubscriptionInvoiceFilterInput | null > | null,
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

export type ModelSubscriptionFloatInput = {
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

export type ModelSubscriptionConstructionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  estimate_validity?: ModelSubscriptionIntInput | null,
  parts?: ModelSubscriptionStringInput | null,
  number_lot?: ModelSubscriptionIntInput | null,
  customerID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionConstructionFilterInput | null > | null,
  or?: Array< ModelSubscriptionConstructionFilterInput | null > | null,
};

export type ModelSubscriptionServiceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  unit?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionServiceFilterInput | null > | null,
  or?: Array< ModelSubscriptionServiceFilterInput | null > | null,
};

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type CreateCustomerMutation = {
  createCustomer?:  {
    __typename: "Customer",
    id: string,
    Invoices?:  {
      __typename: "ModelInvoiceConnection",
      items:  Array< {
        __typename: "Invoice",
        id: string,
        number?: string | null,
        amount?: number | null,
        issueDate?: string | null,
        expirationDate?: string | null,
        status?: Statuses | null,
        workStartDate?: string | null,
        workDuration?: number | null,
        workDurationUnit?: DurationUnits | null,
        customerID?: string | null,
        constructionID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Constructions?:  {
      __typename: "ModelConstructionConnection",
      items:  Array< {
        __typename: "Construction",
        id: string,
        name: string,
        description: string,
        address: string,
        estimate_validity?: number | null,
        parts?: string | null,
        number_lot?: number | null,
        customerID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type UpdateCustomerMutation = {
  updateCustomer?:  {
    __typename: "Customer",
    id: string,
    Invoices?:  {
      __typename: "ModelInvoiceConnection",
      items:  Array< {
        __typename: "Invoice",
        id: string,
        number?: string | null,
        amount?: number | null,
        issueDate?: string | null,
        expirationDate?: string | null,
        status?: Statuses | null,
        workStartDate?: string | null,
        workDuration?: number | null,
        workDurationUnit?: DurationUnits | null,
        customerID?: string | null,
        constructionID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Constructions?:  {
      __typename: "ModelConstructionConnection",
      items:  Array< {
        __typename: "Construction",
        id: string,
        name: string,
        description: string,
        address: string,
        estimate_validity?: number | null,
        parts?: string | null,
        number_lot?: number | null,
        customerID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCustomerMutationVariables = {
  input: DeleteCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type DeleteCustomerMutation = {
  deleteCustomer?:  {
    __typename: "Customer",
    id: string,
    Invoices?:  {
      __typename: "ModelInvoiceConnection",
      items:  Array< {
        __typename: "Invoice",
        id: string,
        number?: string | null,
        amount?: number | null,
        issueDate?: string | null,
        expirationDate?: string | null,
        status?: Statuses | null,
        workStartDate?: string | null,
        workDuration?: number | null,
        workDurationUnit?: DurationUnits | null,
        customerID?: string | null,
        constructionID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Constructions?:  {
      __typename: "ModelConstructionConnection",
      items:  Array< {
        __typename: "Construction",
        id: string,
        name: string,
        description: string,
        address: string,
        estimate_validity?: number | null,
        parts?: string | null,
        number_lot?: number | null,
        customerID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateInvoiceMutationVariables = {
  input: CreateInvoiceInput,
  condition?: ModelInvoiceConditionInput | null,
};

export type CreateInvoiceMutation = {
  createInvoice?:  {
    __typename: "Invoice",
    id: string,
    number?: string | null,
    amount?: number | null,
    issueDate?: string | null,
    expirationDate?: string | null,
    status?: Statuses | null,
    workStartDate?: string | null,
    workDuration?: number | null,
    workDurationUnit?: DurationUnits | null,
    customerID?: string | null,
    constructionID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInvoiceMutationVariables = {
  input: UpdateInvoiceInput,
  condition?: ModelInvoiceConditionInput | null,
};

export type UpdateInvoiceMutation = {
  updateInvoice?:  {
    __typename: "Invoice",
    id: string,
    number?: string | null,
    amount?: number | null,
    issueDate?: string | null,
    expirationDate?: string | null,
    status?: Statuses | null,
    workStartDate?: string | null,
    workDuration?: number | null,
    workDurationUnit?: DurationUnits | null,
    customerID?: string | null,
    constructionID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInvoiceMutationVariables = {
  input: DeleteInvoiceInput,
  condition?: ModelInvoiceConditionInput | null,
};

export type DeleteInvoiceMutation = {
  deleteInvoice?:  {
    __typename: "Invoice",
    id: string,
    number?: string | null,
    amount?: number | null,
    issueDate?: string | null,
    expirationDate?: string | null,
    status?: Statuses | null,
    workStartDate?: string | null,
    workDuration?: number | null,
    workDurationUnit?: DurationUnits | null,
    customerID?: string | null,
    constructionID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
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
    description: string,
    address: string,
    estimate_validity?: number | null,
    parts?: string | null,
    number_lot?: number | null,
    customerID?: string | null,
    Invoices?:  {
      __typename: "ModelInvoiceConnection",
      items:  Array< {
        __typename: "Invoice",
        id: string,
        number?: string | null,
        amount?: number | null,
        issueDate?: string | null,
        expirationDate?: string | null,
        status?: Statuses | null,
        workStartDate?: string | null,
        workDuration?: number | null,
        workDurationUnit?: DurationUnits | null,
        customerID?: string | null,
        constructionID?: string | null,
        createdAt: string,
        updatedAt: string,
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
    description: string,
    address: string,
    estimate_validity?: number | null,
    parts?: string | null,
    number_lot?: number | null,
    customerID?: string | null,
    Invoices?:  {
      __typename: "ModelInvoiceConnection",
      items:  Array< {
        __typename: "Invoice",
        id: string,
        number?: string | null,
        amount?: number | null,
        issueDate?: string | null,
        expirationDate?: string | null,
        status?: Statuses | null,
        workStartDate?: string | null,
        workDuration?: number | null,
        workDurationUnit?: DurationUnits | null,
        customerID?: string | null,
        constructionID?: string | null,
        createdAt: string,
        updatedAt: string,
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
    description: string,
    address: string,
    estimate_validity?: number | null,
    parts?: string | null,
    number_lot?: number | null,
    customerID?: string | null,
    Invoices?:  {
      __typename: "ModelInvoiceConnection",
      items:  Array< {
        __typename: "Invoice",
        id: string,
        number?: string | null,
        amount?: number | null,
        issueDate?: string | null,
        expirationDate?: string | null,
        status?: Statuses | null,
        workStartDate?: string | null,
        workDuration?: number | null,
        workDurationUnit?: DurationUnits | null,
        customerID?: string | null,
        constructionID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateServiceMutationVariables = {
  input: CreateServiceInput,
  condition?: ModelServiceConditionInput | null,
};

export type CreateServiceMutation = {
  createService?:  {
    __typename: "Service",
    id: string,
    name?: string | null,
    unit?: Units | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateServiceMutationVariables = {
  input: UpdateServiceInput,
  condition?: ModelServiceConditionInput | null,
};

export type UpdateServiceMutation = {
  updateService?:  {
    __typename: "Service",
    id: string,
    name?: string | null,
    unit?: Units | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteServiceMutationVariables = {
  input: DeleteServiceInput,
  condition?: ModelServiceConditionInput | null,
};

export type DeleteServiceMutation = {
  deleteService?:  {
    __typename: "Service",
    id: string,
    name?: string | null,
    unit?: Units | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCustomerQueryVariables = {
  id: string,
};

export type GetCustomerQuery = {
  getCustomer?:  {
    __typename: "Customer",
    id: string,
    Invoices?:  {
      __typename: "ModelInvoiceConnection",
      items:  Array< {
        __typename: "Invoice",
        id: string,
        number?: string | null,
        amount?: number | null,
        issueDate?: string | null,
        expirationDate?: string | null,
        status?: Statuses | null,
        workStartDate?: string | null,
        workDuration?: number | null,
        workDurationUnit?: DurationUnits | null,
        customerID?: string | null,
        constructionID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Constructions?:  {
      __typename: "ModelConstructionConnection",
      items:  Array< {
        __typename: "Construction",
        id: string,
        name: string,
        description: string,
        address: string,
        estimate_validity?: number | null,
        parts?: string | null,
        number_lot?: number | null,
        customerID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomersQuery = {
  listCustomers?:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      id: string,
      Invoices?:  {
        __typename: "ModelInvoiceConnection",
        nextToken?: string | null,
      } | null,
      Constructions?:  {
        __typename: "ModelConstructionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInvoiceQueryVariables = {
  id: string,
};

export type GetInvoiceQuery = {
  getInvoice?:  {
    __typename: "Invoice",
    id: string,
    number?: string | null,
    amount?: number | null,
    issueDate?: string | null,
    expirationDate?: string | null,
    status?: Statuses | null,
    workStartDate?: string | null,
    workDuration?: number | null,
    workDurationUnit?: DurationUnits | null,
    customerID?: string | null,
    constructionID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInvoicesQueryVariables = {
  filter?: ModelInvoiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInvoicesQuery = {
  listInvoices?:  {
    __typename: "ModelInvoiceConnection",
    items:  Array< {
      __typename: "Invoice",
      id: string,
      number?: string | null,
      amount?: number | null,
      issueDate?: string | null,
      expirationDate?: string | null,
      status?: Statuses | null,
      workStartDate?: string | null,
      workDuration?: number | null,
      workDurationUnit?: DurationUnits | null,
      customerID?: string | null,
      constructionID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type InvoicesByCustomerIDQueryVariables = {
  customerID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelInvoiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type InvoicesByCustomerIDQuery = {
  invoicesByCustomerID?:  {
    __typename: "ModelInvoiceConnection",
    items:  Array< {
      __typename: "Invoice",
      id: string,
      number?: string | null,
      amount?: number | null,
      issueDate?: string | null,
      expirationDate?: string | null,
      status?: Statuses | null,
      workStartDate?: string | null,
      workDuration?: number | null,
      workDurationUnit?: DurationUnits | null,
      customerID?: string | null,
      constructionID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type InvoicesByConstructionIDQueryVariables = {
  constructionID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelInvoiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type InvoicesByConstructionIDQuery = {
  invoicesByConstructionID?:  {
    __typename: "ModelInvoiceConnection",
    items:  Array< {
      __typename: "Invoice",
      id: string,
      number?: string | null,
      amount?: number | null,
      issueDate?: string | null,
      expirationDate?: string | null,
      status?: Statuses | null,
      workStartDate?: string | null,
      workDuration?: number | null,
      workDurationUnit?: DurationUnits | null,
      customerID?: string | null,
      constructionID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
    description: string,
    address: string,
    estimate_validity?: number | null,
    parts?: string | null,
    number_lot?: number | null,
    customerID?: string | null,
    Invoices?:  {
      __typename: "ModelInvoiceConnection",
      items:  Array< {
        __typename: "Invoice",
        id: string,
        number?: string | null,
        amount?: number | null,
        issueDate?: string | null,
        expirationDate?: string | null,
        status?: Statuses | null,
        workStartDate?: string | null,
        workDuration?: number | null,
        workDurationUnit?: DurationUnits | null,
        customerID?: string | null,
        constructionID?: string | null,
        createdAt: string,
        updatedAt: string,
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
      description: string,
      address: string,
      estimate_validity?: number | null,
      parts?: string | null,
      number_lot?: number | null,
      customerID?: string | null,
      Invoices?:  {
        __typename: "ModelInvoiceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ConstructionsByCustomerIDQueryVariables = {
  customerID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelConstructionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ConstructionsByCustomerIDQuery = {
  constructionsByCustomerID?:  {
    __typename: "ModelConstructionConnection",
    items:  Array< {
      __typename: "Construction",
      id: string,
      name: string,
      description: string,
      address: string,
      estimate_validity?: number | null,
      parts?: string | null,
      number_lot?: number | null,
      customerID?: string | null,
      Invoices?:  {
        __typename: "ModelInvoiceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetServiceQueryVariables = {
  id: string,
};

export type GetServiceQuery = {
  getService?:  {
    __typename: "Service",
    id: string,
    name?: string | null,
    unit?: Units | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListServicesQueryVariables = {
  filter?: ModelServiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListServicesQuery = {
  listServices?:  {
    __typename: "ModelServiceConnection",
    items:  Array< {
      __typename: "Service",
      id: string,
      name?: string | null,
      unit?: Units | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?:  {
    __typename: "Customer",
    id: string,
    Invoices?:  {
      __typename: "ModelInvoiceConnection",
      items:  Array< {
        __typename: "Invoice",
        id: string,
        number?: string | null,
        amount?: number | null,
        issueDate?: string | null,
        expirationDate?: string | null,
        status?: Statuses | null,
        workStartDate?: string | null,
        workDuration?: number | null,
        workDurationUnit?: DurationUnits | null,
        customerID?: string | null,
        constructionID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Constructions?:  {
      __typename: "ModelConstructionConnection",
      items:  Array< {
        __typename: "Construction",
        id: string,
        name: string,
        description: string,
        address: string,
        estimate_validity?: number | null,
        parts?: string | null,
        number_lot?: number | null,
        customerID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer?:  {
    __typename: "Customer",
    id: string,
    Invoices?:  {
      __typename: "ModelInvoiceConnection",
      items:  Array< {
        __typename: "Invoice",
        id: string,
        number?: string | null,
        amount?: number | null,
        issueDate?: string | null,
        expirationDate?: string | null,
        status?: Statuses | null,
        workStartDate?: string | null,
        workDuration?: number | null,
        workDurationUnit?: DurationUnits | null,
        customerID?: string | null,
        constructionID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Constructions?:  {
      __typename: "ModelConstructionConnection",
      items:  Array< {
        __typename: "Construction",
        id: string,
        name: string,
        description: string,
        address: string,
        estimate_validity?: number | null,
        parts?: string | null,
        number_lot?: number | null,
        customerID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer?:  {
    __typename: "Customer",
    id: string,
    Invoices?:  {
      __typename: "ModelInvoiceConnection",
      items:  Array< {
        __typename: "Invoice",
        id: string,
        number?: string | null,
        amount?: number | null,
        issueDate?: string | null,
        expirationDate?: string | null,
        status?: Statuses | null,
        workStartDate?: string | null,
        workDuration?: number | null,
        workDurationUnit?: DurationUnits | null,
        customerID?: string | null,
        constructionID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Constructions?:  {
      __typename: "ModelConstructionConnection",
      items:  Array< {
        __typename: "Construction",
        id: string,
        name: string,
        description: string,
        address: string,
        estimate_validity?: number | null,
        parts?: string | null,
        number_lot?: number | null,
        customerID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateInvoiceSubscriptionVariables = {
  filter?: ModelSubscriptionInvoiceFilterInput | null,
};

export type OnCreateInvoiceSubscription = {
  onCreateInvoice?:  {
    __typename: "Invoice",
    id: string,
    number?: string | null,
    amount?: number | null,
    issueDate?: string | null,
    expirationDate?: string | null,
    status?: Statuses | null,
    workStartDate?: string | null,
    workDuration?: number | null,
    workDurationUnit?: DurationUnits | null,
    customerID?: string | null,
    constructionID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInvoiceSubscriptionVariables = {
  filter?: ModelSubscriptionInvoiceFilterInput | null,
};

export type OnUpdateInvoiceSubscription = {
  onUpdateInvoice?:  {
    __typename: "Invoice",
    id: string,
    number?: string | null,
    amount?: number | null,
    issueDate?: string | null,
    expirationDate?: string | null,
    status?: Statuses | null,
    workStartDate?: string | null,
    workDuration?: number | null,
    workDurationUnit?: DurationUnits | null,
    customerID?: string | null,
    constructionID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInvoiceSubscriptionVariables = {
  filter?: ModelSubscriptionInvoiceFilterInput | null,
};

export type OnDeleteInvoiceSubscription = {
  onDeleteInvoice?:  {
    __typename: "Invoice",
    id: string,
    number?: string | null,
    amount?: number | null,
    issueDate?: string | null,
    expirationDate?: string | null,
    status?: Statuses | null,
    workStartDate?: string | null,
    workDuration?: number | null,
    workDurationUnit?: DurationUnits | null,
    customerID?: string | null,
    constructionID?: string | null,
    createdAt: string,
    updatedAt: string,
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
    description: string,
    address: string,
    estimate_validity?: number | null,
    parts?: string | null,
    number_lot?: number | null,
    customerID?: string | null,
    Invoices?:  {
      __typename: "ModelInvoiceConnection",
      items:  Array< {
        __typename: "Invoice",
        id: string,
        number?: string | null,
        amount?: number | null,
        issueDate?: string | null,
        expirationDate?: string | null,
        status?: Statuses | null,
        workStartDate?: string | null,
        workDuration?: number | null,
        workDurationUnit?: DurationUnits | null,
        customerID?: string | null,
        constructionID?: string | null,
        createdAt: string,
        updatedAt: string,
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
    description: string,
    address: string,
    estimate_validity?: number | null,
    parts?: string | null,
    number_lot?: number | null,
    customerID?: string | null,
    Invoices?:  {
      __typename: "ModelInvoiceConnection",
      items:  Array< {
        __typename: "Invoice",
        id: string,
        number?: string | null,
        amount?: number | null,
        issueDate?: string | null,
        expirationDate?: string | null,
        status?: Statuses | null,
        workStartDate?: string | null,
        workDuration?: number | null,
        workDurationUnit?: DurationUnits | null,
        customerID?: string | null,
        constructionID?: string | null,
        createdAt: string,
        updatedAt: string,
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
    description: string,
    address: string,
    estimate_validity?: number | null,
    parts?: string | null,
    number_lot?: number | null,
    customerID?: string | null,
    Invoices?:  {
      __typename: "ModelInvoiceConnection",
      items:  Array< {
        __typename: "Invoice",
        id: string,
        number?: string | null,
        amount?: number | null,
        issueDate?: string | null,
        expirationDate?: string | null,
        status?: Statuses | null,
        workStartDate?: string | null,
        workDuration?: number | null,
        workDurationUnit?: DurationUnits | null,
        customerID?: string | null,
        constructionID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateServiceSubscriptionVariables = {
  filter?: ModelSubscriptionServiceFilterInput | null,
};

export type OnCreateServiceSubscription = {
  onCreateService?:  {
    __typename: "Service",
    id: string,
    name?: string | null,
    unit?: Units | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateServiceSubscriptionVariables = {
  filter?: ModelSubscriptionServiceFilterInput | null,
};

export type OnUpdateServiceSubscription = {
  onUpdateService?:  {
    __typename: "Service",
    id: string,
    name?: string | null,
    unit?: Units | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteServiceSubscriptionVariables = {
  filter?: ModelSubscriptionServiceFilterInput | null,
};

export type OnDeleteServiceSubscription = {
  onDeleteService?:  {
    __typename: "Service",
    id: string,
    name?: string | null,
    unit?: Units | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
