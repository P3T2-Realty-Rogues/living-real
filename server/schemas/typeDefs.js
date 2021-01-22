const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email:  String
    phoneNumber: String
    adminFlag: Boolean
    property: Property
    tenantData: TenantData
  }

  type TenantData {
    leaseDate: String
    activeTenant: Boolean
  }

  type Property {
    _id: ID
    propertyName: String
    propertyType: String
    streetAddress: String
    city: String
    state: String
    zipCode: Int
    sqFeet: Int
    numBathrooms: Float
    numBedroom: Int
    balcony: Boolean
    rent: Float
    petDeposit: Float
    renterDeposit: Float
    appFee: Float
    ownerInfo: OwnerInfo
    availability: Boolean
  }

  type OwnerInfo {
    mortgage: Float
    propertyTaxes: Float
    propertyInsurance: Float
    tenant: [User]
  }

  type Maintenance {
    _id: ID
    tenantID: ID
    date: String
    text: String
    grantAccess: Boolean
    critical: Int # change to regex to allow values 
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    owners: [User]
    tenants: [User]
    properties: [Property] 
    users: [User]
    property(_id: ID!): Property
    user(_id: ID!): User
  }

  type Mutation {

    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      phoneNumber: String!
      adminFlag: Boolean!
      property: ID!
      tenantData: TenantInput
    ): User

    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
      phoneNumber: String
      adminFlag: Boolean
      property: ID
      tenantData: TenantInput
    ): User

    addProperty(
      propertyName: String!
      propertyType: String!
      streetAddress: String!
      city: String!
      state: String!
      zipCode: Int!
      sqFeet: Int!
      numBathrooms: Float!
      numBedroom: Int!
      balcony: Boolean!
      rent: Float!
      petDeposit: Float!
      renterDeposit: Float!
      appFee: Float!
      availability: Boolean!
      ownerInfo: OwnerInfoInput   
    ): Property

    updateProperty(
      property: ID!
      propertyName: String
      propertyType: String
      streetAddress: String
      city: String
      state: String
      zipCode: Int
      sqFeet: Int
      numBathrooms: Float
      numBedroom: Int
      balcony: Boolean
      rent: Float
      petDeposit: Float
      renterDeposit: Float
      appFee: Float
      availability: Boolean
      ownerInfo: OwnerInfoInput   
    ): Property

    login(email: String!, password: String!): Auth

    deleteUser(_id: ID!): User
    deleteProperty(_id: ID!): Property

    addTenant(tenantId: ID!, property: ID!): Property
  }

  input TenantInput{
    leaseDate: String
    activeTenant: Boolean
  }

  input OwnerInfoInput{
    mortgage: Float
    propertyTaxes: Float
    propertyInsurance: Float
  }
`;

module.exports = typeDefs;
