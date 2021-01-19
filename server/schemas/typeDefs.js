const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email:  String
    adminFlag: Boolean
    propertyID: []
    tenantData: [TenantData]
  }

  type TenantData {
    _id: ID
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
    ownerInfo: AdminPropertyDetails
  }

  type AdminPropertyDetails {
    mortgage: Float
    propertyTaxes: Float
    propertyInsurance: Float
    availability: Boolean
    tenant: [User]
  }

  #type BulletinBoardData  {
  #  _id: ID
  #  _posterID: ID
  #  text: String
  #}


  type Maintenance {
    _id: ID
    tenantID: Tenant.id # don't know if this works
    date: String
    text: String
    grantAccess: Boolean
    critical: Int # change to regex to allow values 
  }

  type Auth {
    token: ID
    user: Admin
  }

  type Query {
    owners: [Owner]
    tenants: [Tenant]
    properties: 
    bboard: 
    // categories: [Category]
    // products(category: ID, name: String): [Product]
    // product(_id: ID!): Product
    // user: User
    // order(_id: ID!): Order
    // checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addAdmin(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      adminFlag: Boolean!
      propertyID: []
    ):Admin

    addTenant(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      leaseDate: String!
      activeTenant: Boolean!
      approvedRenter: Boolean!
      propertyID: ID!
    ): Tenant

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
      ownerInfo: {AdminPropertyDetails}     
    ): Property

    // updateUser(
    //   firstName: String
    //   lastName: String
    //   email: String
    //   password: String
    // ): User
    // updateProduct(_id: ID!, quantity: Int!): Product
    // login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
