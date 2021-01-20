const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email:  String
    phoneNumber: String
    adminFlag: Boolean
    propertyId: [String]
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
    # bboard: 
    users: [User]
  }

  type Mutation {
    addAdmin(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      adminFlag: Boolean!
      propertyId: [ID]
    ):User

    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      phoneNumber: String!
      adminFlag: Boolean!
      propertyId: [String!]
      leaseDate: String!
      activeTenant: Boolean!
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
      ownerInfo: AdminPropertyInput   
    ): Property
  }

  input AdminPropertyInput{
    mortgage: Float
    propertyTaxes: Float
    propertyInsurance: Float
    availability: Boolean
    tenant: [String] #change later
  }
`;

module.exports = typeDefs;
