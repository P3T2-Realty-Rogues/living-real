import React, { useState } from "react";
import { ADD_PROPERTY } from '../../utils/mutations';
import Upload from '../Upload'
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import Auth from "../../utils/auth";



function CreateProperty() {

  const [formState, setFormState] = useState({
    propertyName: "",
    propertyType: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    sqFeet: "",
    numBathrooms: "",
    numBedroom: "",
    rent: "",
    petDeposit: "",
    renterDeposit: "",
    appFee: "",
    // mortgage: "",
    // propertyTaxes: "",
    // propertyInsurance: "",
    availability: true
  });


  const [addProperty, { error }] = useMutation(ADD_PROPERTY);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await addProperty({
      variables: {
        propertyName: formState.propertyName,
        propertyType: formState.propertyType,
        streetAddress: formState.streetAddress,
        city: formState.city,
        state: formState.state,
        zipCode: parseInt(formState.zipCode),
        sqFeet: parseInt(formState.sqFeet),
        numBathrooms: parseInt(formState.numBathrooms),
        numBedroom: parseInt(formState.numBedroom),
        balcony: document.getElementById("balcony").checked,
        pool: document.getElementById("pool").checked,
        rent: parseInt(formState.rent),
        petDeposit: parseInt(formState.petDeposit),
        renterDeposit: parseInt(formState.renterDeposit),
        appFee: parseInt(formState.appFee),
        availability: formState.availability,
        // mortgage: parseInt(formState.mortgage),
        // propertyTaxes: parseInt(formState.propertyTaxes),
        // propertyInsurance: parseInt(formState.propertyInsurance),
      },
    });
    // const token = mutationResponse.data.addProperty.token;
    // Auth.login(token);
    window.location.replace( "/AdminDash");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };


  return (
    <div className="col-auto">
      <form className="col-auto flex-row flex-column-sm" onSubmit={handleFormSubmit}>
        <div className="card col-auto">
          <div className="card-header">
            <h3 className="card-header">Add a New Property</h3>
          </div>

          <div className="card-body">
            <div>
              <label className="form-label" for="propertyName">
                <b>Property Name</b>
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="101 Elm"
                name="propertyName"
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="form-label" for="propertyType">
                <b>Property Type</b>
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="Condo/House/Duplex"
                name="propertyType"
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="form-label" for="streetAddress">
                <b>Street Address</b>
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="1234 Sample Road"
                name="streetAddress"
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="form-label" for=" city">
                <b>City</b>
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="Austin"
                name="city"
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="form-label" for="state">
                <b>State</b>
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="Texas"
                name="state"
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="form-label" for="zipCode">
                <b>Zip Code</b>
              </label>
              <input
                className="form-input"
                type="number"
                maxLength="15"
                placeholder="12345"
                name="zipCode"
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="form-label" for="sqFeet">
                <b>Square Footage</b>
              </label>
              <input
                className="form-input"
                type="number"
                placeholder="1,250"
                name="sqFeet"
                onChange={handleChange}
              ></input>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3 className="card-header">More Details</h3>
          </div>
          <div className="card-body">

            <div id="property-checkbox">
              <label className="form-label" htmlFor="balcony">
                <b>Balcony</b>
              </label>
              <input
                id="balcony"
                className="form-input"
                type="checkbox"
                name="balcony"
                placeholder="Balcony yes/no"
                onChange={handleChange}
              ></input>
              {/* </div>
            <div> */}
              <label className="form-label" htmlFor="pool">
                <b>Pool</b>
              </label>
              <input
                id="pool"
                className="form-input"
                type="checkbox"
                name="pool"
                placeholder="Pool yes/no"
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="form-label" for="numBedroom">
                <b>Number of Bedrooms</b>
              </label>
              <input
                className="form-input"
                type="number"
                placeholder="1/2/3/4"
                name="numBedroom"
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="form-label" for="numBathrooms">
                <b>Number of Bathrooms</b>
              </label>
              <input
                className="form-input"
                type="number"
                placeholder="1/2/3/4"
                name="numBathrooms"
                onChange={handleChange}
              ></input>
            </div>

            <div>
              <label className="form-label" for="rent">
                <b>Rent</b>
              </label>
              <input
                className="form-input"
                type="number"
                placeholder="$1200"
                name="rent"
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="form-label" for="petDeposit">
                <b>Pet Deposit</b>
              </label>
              <input
                className="form-input"
                type="number"
                placeholder="$500"
                name="petDeposit"
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="form-label" for="renterDeposit">
                <b>Renter Deposit</b>
              </label>
              <input
                className="form-input"
                type="number"
                placeholder="$200"
                name="renterDeposit"
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="form-label" for="appFee">
                <b>App Fee</b>
              </label>
              <input
                className="form-input"
                type="number"
                placeholder="$150"
                name="appFee"
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <Upload />
              <br />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-header">Admin Property Details</h3>
          </div>
          <div className="card-body">
            {/* <div>
              <label className="form-label" for="mortgage">
                <b>Mortgage</b>
              </label>
              <input
                className="form-input"
                type="number"
                placeholder="$850"
                name="mortgage"
              ></input>
            </div> */}
            {/* <div>
              <label className="form-label" for="propertyTaxes">
                <b>Property Taxes</b>
              </label>
              <input
                className="form-input"
                type="number"
                placeholder="$10,000"
                name="propertyTaxes"
              ></input>
            </div>
            <div>
              <label className="form-label" for="propertyInsurance">
                <b>Property Insurance</b>
              </label>
              <input
                className="form-input"
                type="number"
                placeholder="$10,000"
                name="propertyInsurance"
              ></input>
            </div> */}
            <div className="form-label"></div>
            <div>
              <br />
              <button className="btn">Create Property</button>
              <Link to="/AdminDash" className="btn">
                Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateProperty;