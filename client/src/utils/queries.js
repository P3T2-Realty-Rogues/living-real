import gql from "graphql-tag";

export const QUERY_USER = gql`
  query user($_id: ID!) {
    user(_id: $_id) {
      _id
      firstName
      lastName
      email
      phoneNumber
      adminFlag
      property {
        propertyName
        streetAddress
      }
      tenantData {
        leaseDate
        activeTenant
      }
    }
  }
`;

export const QUERY_USERS = gql`
  query {
    users {
      _id
      firstName
      lastName
      email
      phoneNumber
      adminFlag
      property {
        _id
        propertyName
        streetAddress
      }
      tenantData {
        leaseDate
        activeTenant
      }
    }
  }
`;

export const QUERY_TENANTS = gql`
  query {
    tenants {
      _id
      firstName
      lastName
      email
      phoneNumber
      adminFlag
      property {
        _id
        propertyName
        streetAddress
      }
      tenantData {
        leaseDate
        activeTenant
      }
    }
  }
`;

export const QUERY_PROPERTY = gql`
  query property($_id: ID!) {
    property(_id: $_id) {
      _id
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
      rent
      petDeposit
      renterDeposit
      appFee
      availability
      pictures
      thumbnail
      directoryName
      ownerInfo {
        mortgage
        propertyTaxes
        propertyInsurance
        tenant {
          _id
          firstName
          lastName
        }
      }
    }
  }
`;

export const QUERY_PROPERTIES = gql`
  query {
    properties {
      _id
      propertyName
      propertyType
      streetAddress
      city
      state
      pool
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
      pictures
      thumbnail
      directoryName
      ownerInfo {
        mortgage
        propertyTaxes
        propertyInsurance
        tenant {
          _id
          firstName
          lastName
        }
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($property: ID!, $rent: Int) {
    checkout(property: $property, rent: $rent) {
      session
    }
  }
`;
