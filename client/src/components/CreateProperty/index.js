import React from 'react';
import { Link } from "react-router-dom"
// import S3 from 'react-aws-s3';



function CreateProperty() {


  /**
   * {
   *   Response: {
   *     bucket: "myBucket",
   *     key: "image/test-image.jpg",
   *     location: "https://myBucket.s3.amazonaws.com/media/test-file.jpg"
   *   }
   * }
   */




  return (
    <div >
      
      <form className="flex-row">
        <div className="card">
          <div className="card-header">
          <h3 className="card-header">Add a New Property</h3>
          </div>

          <div className="card-body">
            <div>
              <label className="form-label" for="propertyName"><b>Property Name</b></label>
              <input className="form-input" type="text" placeholder="101 Elm" name="propertyName"></input>
            </div>
            <div>
              <label className="form-label" for="propertyType"><b>Property Type</b></label>
              <input className="form-input" type="text" placeholder="Condo/House/Duplex" name="propertyType"></input>
            </div>
            <div>
              <label className="form-label" for="streetAddress"><b>Street Address</b></label>
              <input className="form-input" type="text" placeholder="1234 Sample Road" name="streetAddress"></input>
            </div>
            <div>
              <label className="form-label" for=" city"><b>City</b></label>
              <input className="form-input" type="text" placeholder="Austin" name="city"></input>
            </div>
            <div>
              <label className="form-label" for="state"><b>State</b></label>
              <input className="form-input" type="text" placeholder="Texas" name="state"></input>
            </div>
            <div>
              <label className="form-label" for="zipCode"><b>Zip Code</b></label>
              <input className="form-input" type="text" placeholder="12345" name="zipCode"></input>
            </div>
            <div>
              <label className="form-label" for="sqFeet"><b>Square Footage</b></label>
              <input className="form-input" type="text" placeholder="1,250" name="sqFeet"></input>
            </div>
            <div>
              <label className="form-label" for="numBedrooms"><b>Number of Bedrooms</b></label>
              <input className="form-input" type="text" placeholder="1/2/3/4" name="numBedrooms"></input>
            </div>
            <div>
              <label className="form-label" for="numBathrooms"><b>Number of Bathrooms</b></label>
              <input className="form-input" type="text" placeholder="1/2/3/4" name="numBathrooms"></input>
            </div>
            <div>
              <label className="form-label" for="balcony"><b>Number of Bedrooms</b></label>
              <input className="form-input" type="checkbox" name="balcony"></input>
            </div>
            <div>
              <label className="form-label" for="rent"><b>Rent</b></label>
              <input className="form-input" type="text" placeholder="$1200" name="rent"></input>
            </div>
            <div>
              <label className="form-label" for="petDeposit"><b>Pet Deposit</b></label>
              <input className="form-input" type="text" placeholder="$500" name="petDeposit"></input>
            </div>
            <div>
              <label className="form-label" for="renterDeposit"><b>Renter Deposit</b></label>
              <input className="form-input" type="text" placeholder="$200" name="renterDeposit"></input>
            </div>
            <div>
              <label className="form-label" for="appFee"><b>App Fee</b></label>
              <input className="form-input" type="text" placeholder="$150" name="appFee"></input>
            </div>
            <div>
              <label for="photos"> <b>Upload Photos</b></label>
              <input type="file" id="img" ></input>
              <br />
            </div>
          </div>
        </div>
          <div className="card">
            <div className="card-header">
            <h2 className="card-header">Admin Property Details</h2>
            </div>
            <div className="card-body">
              <div>
                <label className="form-label"  for="mortgage"><b>Mortgage</b></label>
                <input className="form-input" type="text" placeholder="$850" name="mortgage"></input>
              </div>
              <div>
              <label className="form-label" for="propertyTaxes"><b>Property Taxes</b></label>
              <input className="form-input"  type="text" placeholder="$10,000" name="propertyTaxes"></input>
              </div>
              <div>
                <label className="form-label" for="propertyInsurance"><b>Property Insurance</b></label>
                <input className="form-input"  type="text" placeholder="$10,000" name="propertyInsurance"></input>
              </div>
              <div className="form-label"></div>
              <div>
                <br />
              <button className="btn">Create User</button>
              <Link to="/AdminDash" className="btn">Back to Dashboard</Link>
            </div>
            </div>
          </div>
      </form>

    </div>
  );
}

export default CreateProperty;