import React from "react";

function UpdateProperty() {
    return (
        <div>
            <h3>Update Property</h3>
            <form>
                <div>
                    {/* Table generated from API endpoint in db */}
                    <label for="allProperties"><b>All Properties</b></label>
                    <input type="text" placeholder="John" name="firstName"></input>

                    <label for="lastName"><b>Search by Address</b></label>
                    <input type="text" placeholder="123 Elm Street" name="addressSearch"></input>
                    {/* Generated results return in a table */}
                    <label for="propertiesByName"><b>Properties By Name</b></label>
                    <input type="text" placeholder="example@domain.com" name="email"></input>

                    <label for="leaseDate"><b>Update Property Information</b></label>
                    <div>
                        <div>
                            <label for="propertyName"><b>Property Name</b></label>
                            <input type="text" placeholder="101 Elm" name="propertyName"></input>

                            <label for="propertyType"><b>Property Type</b></label>
                            <input type="text" placeholder="Condo/House/Duplex" name="propertyType"></input>

                            <label for="streetAddress"><b>Street Address</b></label>
                            <input type="text" placeholder="1234 Sample Road" name="streetAddress"></input>

                            <label for=" city"><b>City</b></label>
                            <input type="text" placeholder="Austin" name="city"></input>

                            <label for="state"><b>State</b></label>
                            <input type="text" placeholder="Texas" name="state"></input>

                            <label for="zipCode"><b>Zip Code</b></label>
                            <input type="text" placeholder="12345" name="zipCode"></input>

                            <label for="sqFeet"><b>Square Footage</b></label>
                            <input type="text" placeholder="1,250" name="sqFeet"></input>

                            <label for="numBedrooms"><b>Number of Bedrooms</b></label>
                            <input type="text" placeholder="1/2/3/4" name="numBedrooms"></input>

                            <label for="numBathrooms"><b>Number of Bathrooms</b></label>
                            <input type="text" placeholder="1/2/3/4" name="numBathrooms"></input>

                            <label for="balcony"><b>Number of Bedrooms</b></label>
                            <input type="checkbox" name="balcony"></input>

                            <label for="rent"><b>Rent</b></label>
                            <input type="text" placeholder="$1200" name="rent"></input>

                            <label for="petDeposit"><b>Pet Deposit</b></label>
                            <input type="text" placeholder="$500" name="petDeposit"></input>

                            <label for="renterDeposit"><b>Renter Deposit</b></label>
                            <input type="text" placeholder="$200" name="renterDeposit"></input>

                            <label for="appFee"><b>App Fee</b></label>
                            <input type="text" placeholder="$150" name="appFee"></input>
                            <div>
                                <h2>Admin Property Details</h2>
                                <label for="mortgage"><b>Mortgage</b></label>
                                <input type="text" placeholder="$850" name="mortgage"></input>

                                <label for="propertyTaxes"><b>Property Taxes</b></label>
                                <input type="text" placeholder="$10,000" name="propertyTaxes"></input>

                                <label for="propertyInsurance"><b>Property MInsurance</b></label>
                                <input type="text" placeholder="$10,000" name="propertyInsurance"></input>

                                <label for="availability"><b>Availability</b></label>
                                <input type="checkbox" checkbox="checked" name="availability"></input>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <button>Update Property</button>
                    <button>Delete Property</button>
                </div>
            </form>

        </div>
    );
}

export default UpdateProperty;