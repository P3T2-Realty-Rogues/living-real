import gql from "graphql-tag";

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      firstName
      lastName
      adminFlag
    }
  }
}
`;

export const ADD_PROPERTY = gql`
mutation addProperty(
  $propertyName: String!
  $propertyType: String!
  $streetAddress: String!
  $city: String!
  $state: String!
  $zipCode: Int!
  $sqFeet: Int!
  $numBathrooms: Float!
  $numBedroom: Int!
  $balcony: Boolean!
  $pool: Boolean!
  $rent: Float!
  $petDeposit: Float!
  $renterDeposit: Float!
  $appFee: Float!
  $availability: Boolean!
  $ownerInfo: OwnerInfoInput
) {
  addProperty(
    propertyName: $propertyName
    propertyType: $propertyType
    streetAddress: $streetAddress
    city: $city
    state: $state
    zipCode: $zipCode
    sqFeet: $sqFeet
    numBathrooms: $numBathrooms
    numBedroom: $numBedroom
    balcony: $balcony
    pool: $pool
    rent: $rent
    petDeposit: $petDeposit
    renterDeposit: $renterDeposit
    appFee: $appFee
    availability: $availability
    ownerInfo: $ownerInfo
  ) {
    propertyName
    propertyType
    streetAddress
    city
    state
    zipCode
    sqFeet
    numBathrooms
    numBedroom
    balcony
    pool
    rent
    petDeposit
    renterDeposit
    appFee
    availability
    ownerInfo {
      mortgage
      propertyTaxes
      propertyInsurance
      tenant {
        _id
      }
    }
  }
}
`;

export const DELETE_PROPERTY = gql`
mutation deleteProperty($_id: ID!) {
  deleteProperty(_id: $_id) {
    _id
    propertyName
    streetAddress
  }
}
`;

export const ADD_USER = gql`
mutation addUser ($firstName: String!, $lastName: String!, $email: String!, $password: String!, $phoneNumber: String!, $adminFlag: Boolean!, $property: ID, $tenantData: TenantInput) {
	addUser (tenantData: $tenantData, firstName: $firstName, lastName: $lastName, email: $email, password: $password, phoneNumber: $phoneNumber, adminFlag: $adminFlag, property: $property)
  {
			firstName
      lastName
      _id
      email
      phoneNumber
      adminFlag
      tenantData {
        leaseDate
        activeTenant
      }
      property {
        _id
      }
    }
  }
`;

export const DELETE_USER = gql`
mutation deleteUser($_id: ID!) {
  deleteUser(_id: $_id) {
    firstName
    lastName
    _id
  }
}
`;

export const MOVE_USER_IN = gql`
mutation moveUserIn($propertyId: ID!, $userId: ID!) {
  moveUserIn(propertyId: $propertyId, userId: $userId){
    firstName
    property {
      propertyName
      streetAddress
    }
  }
}
`

export const MOVE_USER_OUT= gql`
mutation moveUserOut($propertyId: ID!, $userId: ID!) {
  moveUserOut(propertyId: $propertyId, userId: $userId){
    firstName
    property {
      propertyName
      streetAddress
    }
  }
}
`
