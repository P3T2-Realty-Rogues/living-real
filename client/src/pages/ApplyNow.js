import React from 'react';
import { Link } from "react-router-dom"
import Upload from '../components/Upload'




function ApplyNow() {

  console.log( "In the 'ApplyNow()' function.");

  return (
    <div >
      
      <form className="flex-row">
        <div className="card">
          <div className="card-header">
          <h3 className="card-header">Apply for a Property</h3>
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

            {/* The fields below are entered by the applicant. */}
            <div>
              <label className="form-label" for="firstName"><b>First Name</b></label>
              <input className="form-input" type="text" placeholder="your first name" name="firstName"></input>
            </div>
            <div>
              <label className="form-label" for="numBedrooms"><b>Last Name</b></label>
              <input className="form-input" type="text" placeholder="your last name" name="lastName"></input>
            </div>
            <div>
              <label className="form-label" for="numBathrooms"><b>Email</b></label>
              <input className="form-input" type="text" placeholder="your email" name="email"></input>
            </div>
            <div>
            <label className="form-label" htmlFor="balcony"><b>Phone Number</b></label>
                <input className="form-input" type="text" name="phone" placeholder="your phone number"></input>
            </div>
              <div>
              <label className="form-label" for="appFee"><b>App Fee</b></label>
              <input className="form-input" type="text" placeholder="$150" name="appFee"></input>
            </div>
            <div>
              <Upload />
              <br />
            </div>
          </div>
        </div>
      </form>

    </div>
  );
}

export default ApplyNow;