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
  users{
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
query property($_id:ID!) {
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
    ownerInfo {
      mortgage
      propertyTaxes
      propertyInsurance
      tenant {
        firstName
        lastName
      }
    }
  }
}
`;

// export const QUERY_BBOARD = gql`
// {
//   bboard {
//     _id
//     poster_ID
//     message
// 	  comments []{
// 	    _id
// 	    poster_ID
// 	    comment
//     }
//   }
// }
// `;

// This sets up the checkout query
//export const QUERY_CHECKOUT = gql`
//  query getCheckout($products: [ID]!) {
//    checkout(products: $products) {
//      session
//    }
//  }
//`;
