const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Admin {
    _id: ID
    firstName: String
    lastName: String
    email:  String # convert to regex later
    password: String # convert to regex 
    adminFlag: True
    propertyID: []
  }

  type Tenant {
    _id: ID
    firstName: String
    lastName: String
    email:  String # convert to regex later
    password: String # convert to regex 
    leaseDate: String
    activeTenant: Boolean
    approvedRenter: Boolean
    propertyID: Int
    balanceDue: Int
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
    
    const TenantArr = [Tenant]

  type AdminPropertyDetails {
    mortgage: Float
    propertyTaxes: Float
    propertyInsurance: Float
    avail: Boolean
    tenant: TenantArr
    applicant: !Tenant.approvedRenter
  }

  type BulletinBoardData  {
    _id: ID
    _posterID: ID
    text: String
  }


  type Maintenance {
    _id: ID
    _tenantID: Tenant.id # don't know if this works
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
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addApplicant(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ):A uth
    addOrder(products: [ID]!): Order
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
