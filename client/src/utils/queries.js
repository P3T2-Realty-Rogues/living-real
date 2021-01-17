import gql from 'graphql-tag';

export const QUERY_OWNER = gql`
  {
    owners {
      _id
      firstName
      lastName
      email
      password
	    admin_flag
      property_IDs[]
    }
  }
`;

export const QUERY_TENANT = gql`
  {
    tenants {
      _id
      firstName
      lastName
      email
      password
      lease_date
	    active_tenant
	    approved_renter
	    property_ID
    }
  }
`;

export const QUERY_PROPERTY = gql`
{
  properties {
   _id
   propertyName
   propertyType
   streetAddress
   city
   state
   zipCode
   squareFootage
   numBedrooms
   numBathrooms
   balcony
   monthlyRent
   petDeposit
   renterDeposit
   applicationFee
   ownerInfo: adminPropertyDetails
#----Admin Property Details------- the data here only available to Admins -------------
   monthlyMortgage
   yearlyPropertyTaxes
   yearlyPropertyInsurance
   propertyAvailable
   tenants []
   applicant []
  }
}
`;

export const QUERY_BBOARD = gql`
{
  bboard {
    _id
    poster_ID
    message
	  comments []{
	    _id
	    poster_ID
	    comment
    }
  }
}
`;

// This sets up the checkout query
//export const QUERY_CHECKOUT = gql`
//  query getCheckout($products: [ID]!) {
//    checkout(products: $products) {
//      session
//    }
//  }
//`;