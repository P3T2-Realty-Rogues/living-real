import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



function UpdatePropertyForm() {

    

    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    
    console.log("incoming property id", state.currentProperty.propertyName)
    // console.log("update form property from state",currentProperty)

    if(!state.updatePropertyForm) {
        return (
        <div>NOTHING TO SHOW</div>
        )
    } else

    return (
        <form className="flex-row">
          <div className="card">
            <div className="card-header">
              <h3 className="card-header">{state.currentProperty.propertyName}</h3>
            </div>
  
            <div className="card-body">
              <div>
                <label className="form-label" htmlFor="propertyName"><b>Property Name</b></label>
                <input className="form-input" type="text" placeholder={state.currentProperty.propertyName} name="propertyName"></input>
              </div>
              <div>
                <label className="form-label" htmlFor="propertyType"><b>Property Type</b></label>
                <input className="form-input" type="text" placeholder={state.currentProperty.propertyType} name="propertyType"></input>
              </div>
              <div>
                <label className="form-label" htmlFor="streetAddress"><b>Street Address</b></label>
                <input className="form-input" type="text" placeholder={state.currentProperty.streetAddress} name="streetAddress"></input>
              </div>
              <div>
                <label className="form-label" htmlFor=" city"><b>City</b></label>
                <input className="form-input" type="text" placeholder={state.currentProperty.city} name="city"></input>
              </div>
              <div>
                <label className="form-label" htmlFor="state"><b>State</b></label>
                <input className="form-input" type="text" placeholder={state.currentProperty.state} name="state"></input>
              </div>
              <div>
                <label className="form-label" htmlFor="zipCode"><b>Zip Code</b></label>
                <input className="form-input" type="text" placeholder={state.currentProperty.zipCode} name="zipCode"></input>
              </div>
              <div>
                <label className="form-label" htmlFor="sqFeet"><b>Square Footage</b></label>
                <input className="form-input" type="text" placeholder={state.currentProperty.sqFeet} name="sqFeet"></input>
              </div>
              <div>
                <label className="form-label" htmlFor="numBedrooms"><b>Number of Bedrooms</b></label>
                <input className="form-input" type="text" placeholder={state.currentProperty.numBedrooms} name="numBedrooms"></input>
              </div>
              <div>
                <label className="form-label" htmlFor="numBathrooms"><b>Number of Bathrooms</b></label>
                <input className="form-input" type="text" placeholder={state.currentProperty.numBathrooms} name="numBathrooms"></input>
              </div>
              <div>
                <label className="form-label" htmlFor="balcony"><b>Balcony</b></label>
                <input className="form-input" type="checkbox" name="balcony" checked={state.currentProperty.balcony}></input>
              </div>
              <div>
                <label className="form-label" htmlFor="balcony"><b>Pool</b></label>
                <input className="form-input" type="checkbox" name="balcony" checked={state.currentProperty.pool}></input>
              </div>
              <div>
                <label className="form-label" htmlFor="rent"><b>Rent</b></label>
                <input className="form-input" type="text" placeholder={state.currentProperty.rent} name="rent"></input>
              </div>
              <div>
                <label className="form-label" htmlFor="petDeposit"><b>Pet Deposit</b></label>
                <input className="form-input" type="text" placeholder={state.currentProperty.rentDeposit} name="petDeposit"></input>
              </div>
              <div>
                <label className="form-label" htmlFor="renterDeposit"><b>Renter Deposit</b></label>
                <input className="form-input" type="text" placeholder={state.currentProperty.renterDeposit} name="renterDeposit"></input>
              </div>
              <div>
                <label className="form-label" htmlFor="appFee"><b>App Fee</b></label>
                <input className="form-input" type="text" placeholder={state.currentProperty.appFee} name="appFee"></input>
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
              <h2 className="card-header">Admin Details for {state.currentProperty.propertyName}</h2>
            </div>
            <div className="card-body">
              <div>
                <label className="form-label" htmlFor="mortgage"><b>Mortgage</b></label>
                <input className="form-input" type="text" placeholder={state.currentProperty.ownerInfo.mortgage} name="mortgage"></input>
              </div>
              <div>
                <label className="form-label" htmlFor="propertyTaxes"><b>Property Taxes</b></label>
                <input className="form-input" type="text" placeholder={state.currentProperty.ownerInfo.propertyTaxes} name="propertyTaxes"></input>
              </div>
              <div>
                <label className="form-label" htmlFor="propertyInsurance"><b>Property Insurance</b></label>
                <input className="form-input" type="text" placeholder={state.currentProperty.ownerInfo.propertyInsurance} name="propertyInsurance"></input>
              </div>
              <div className="form-label"></div>
            </div>
          </div>
        </form>
      )
}

export default UpdatePropertyForm