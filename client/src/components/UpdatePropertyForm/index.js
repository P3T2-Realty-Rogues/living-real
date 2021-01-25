import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



function UpdatePropertyForm() {

    console.log("incoming property id", )

    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    
    const currentProperty = state.this
    
    console.log("update form property from state",currentProperty)

    if(!state.updatePropertyForm) {
        return (
        <div>NOTHING TO SHOW</div>
        )
    } else

    return (
        <form className="flex-row">
          <div className="card">
            <div className="card-header">
              <h3 className="card-header"></h3>
            </div>
  
            <div className="card-body">
              <div>
                <label className="form-label" htmlFor="propertyName"><b>Property Name</b></label>
                <input className="form-input" type="text" placeholder="101 Elm" name="propertyName">{}</input>
              </div>
              <div>
                <label className="form-label" htmlFor="propertyType"><b>Property Type</b></label>
                <input className="form-input" type="text" placeholder="Condo/House/Duplex" name="propertyType"></input>
              </div>
              <div>
                <label className="form-label" htmlFor="streetAddress"><b>Street Address</b></label>
                <input className="form-input" type="text" placeholder="1234 Sample Road" name="streetAddress"></input>
              </div>
              <div>
                <label className="form-label" htmlFor=" city"><b>City</b></label>
                <input className="form-input" type="text" placeholder="Austin" name="city"></input>
              </div>
              <div>
                <label className="form-label" htmlFor="state"><b>State</b></label>
                <input className="form-input" type="text" placeholder="Texas" name="state"></input>
              </div>
              <div>
                <label className="form-label" htmlFor="zipCode"><b>Zip Code</b></label>
                <input className="form-input" type="text" placeholder="12345" name="zipCode"></input>
              </div>
              <div>
                <label className="form-label" htmlFor="sqFeet"><b>Square Footage</b></label>
                <input className="form-input" type="text" placeholder="1,250" name="sqFeet"></input>
              </div>
              <div>
                <label className="form-label" htmlFor="numBedrooms"><b>Number of Bedrooms</b></label>
                <input className="form-input" type="text" placeholder="1/2/3/4" name="numBedrooms"></input>
              </div>
              <div>
                <label className="form-label" htmlFor="numBathrooms"><b>Number of Bathrooms</b></label>
                <input className="form-input" type="text" placeholder="1/2/3/4" name="numBathrooms"></input>
              </div>
              <div>
                <label className="form-label" htmlFor="balcony"><b>Number of Bedrooms</b></label>
                <input className="form-input" type="checkbox" name="balcony"></input>
              </div>
              <div>
                <label className="form-label" htmlFor="rent"><b>Rent</b></label>
                <input className="form-input" type="text" placeholder="$1200" name="rent"></input>
              </div>
              <div>
                <label className="form-label" htmlFor="petDeposit"><b>Pet Deposit</b></label>
                <input className="form-input" type="text" placeholder="$500" name="petDeposit"></input>
              </div>
              <div>
                <label className="form-label" htmlFor="renterDeposit"><b>Renter Deposit</b></label>
                <input className="form-input" type="text" placeholder="$200" name="renterDeposit"></input>
              </div>
              <div>
                <label className="form-label" htmlFor="appFee"><b>App Fee</b></label>
                <input className="form-input" type="text" placeholder="$150" name="appFee"></input>
              </div>
              <div>
                <label htmlFor="photos"> <b>Upload Photos</b></label>
                <input type="file" id="img" ></input>
                <br />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h2 className="card-header">*admin details for selected property goes here*</h2>
            </div>
            <div className="card-body">
              <div>
                <label className="form-label" htmlFor="mortgage"><b>Mortgage</b></label>
                <input className="form-input" type="text" placeholder="$850" name="mortgage"></input>
              </div>
              <div>
                <label className="form-label" htmlFor="propertyTaxes"><b>Property Taxes</b></label>
                <input className="form-input" type="text" placeholder="$10,000" name="propertyTaxes"></input>
              </div>
              <div>
                <label className="form-label" htmlFor="propertyInsurance"><b>Property Insurance</b></label>
                <input className="form-input" type="text" placeholder="$10,000" name="propertyInsurance"></input>
              </div>
              <div className="form-label"></div>
            </div>
          </div>
        </form>
      )
}

export default UpdatePropertyForm