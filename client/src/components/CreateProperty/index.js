import React, { useState } from "react";
import { ADD_PROPERTY } from '../../utils/actions';
import Upload from '../Upload'
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import Auth from "../../utils/auth";



function CreateProperty() {

  //  const [formState, setFormState] = useState({
  //   propertyName: "",
  //   propertyType: "",
  //   streetAddress: "",
  //   city: "",
  //   state: "",
  //   zipCode: "",
  //   sqFeet: "",
  //   numBathrooms: "",
  //   numBedroom: "",
  //   balcony: "",
  //   rent: "",
  //   petDeposit: "",
  //   renterDeposit: "",
  //   appFee: "",

  //  });

  //  const [addProperty, { error }] = useMutation(ADD_PROPERTY);

  //  const handleFormSubmit = async (event) => {
  //    event.preventDefault();
  //    const mutationResponse = await addProperty({
  //      variables: {
  //        propertyName: formState.propertyName,
  //        propertyType: formState.propertyType,
  //        streetAddress: formState.streetAddress,
  //        city: formState.city,
  //        state: formState.state,
  //        zipCode: formState.zipCode,
  //        sqFeet: formState.sqFeet,
  //        numBathrooms: formState.numBathrooms,
  //        numBedroom: formState.numBedroom,
  //        balcony: formState.balcony,
  //        pool: formState.pool,
  //        rent: formState.rent,
  //        petDeposit: formState.petDeposit,
  //        renterDeposit: formState.renterDeposit,
  //        appFee: formState.appFee,
  //        availability: formState.availability,
  //      },
  //    });
  //    const token = mutationResponse.data.addUser.token;
  //    Auth.login(token);
  //  };
  //  const handleChange = (event) => {
  //    const { name, value } = event.target;
  //    setFormState({
  //      ...formState,
  //      [name]: value,
  //    });
     
  //  };

  
  return (
    <div>
      <form className="flex-row" >
        <div className="card">
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
                // onChange={handleChange}
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
                // onChange={handleChange}
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
                // onChange={handleChange}
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
                // onChange={handleChange}
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
                // onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="form-label" for="zipCode">
                <b>Zip Code</b>
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="12345"
                name="zipCode"
                // onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="form-label" for="sqFeet">
                <b>Square Footage</b>
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="1,250"
                name="sqFeet"
                // onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="form-label" for="numBedrooms">
                <b>Number of Bedrooms</b>
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="1/2/3/4"
                name="numBedrooms"
                // onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="form-label" for="numBathrooms">
                <b>Number of Bathrooms</b>
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="1/2/3/4"
                name="numBathrooms"
                // onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="form-label" htmlFor="balcony">
                <b>Balcony</b>
              </label>
              <input
                className="form-input"
                type="text"
                name="balcony"
                placeholder="Balcony yes/no"
                // onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="form-label" htmlFor="pool">
                <b>Pool</b>
              </label>
              <input
                className="form-input"
                type="text"
                name="pool"
                placeholder="Pool yes/no"
                // onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="form-label" for="rent">
                <b>Rent</b>
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="$1200"
                name="rent"
                // onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="form-label" for="petDeposit">
                <b>Pet Deposit</b>
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="$500"
                name="petDeposit"
                // onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="form-label" for="renterDeposit">
                <b>Renter Deposit</b>
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="$200"
                name="renterDeposit"
                // onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="form-label" for="appFee">
                <b>App Fee</b>
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="$150"
                name="appFee"
                // onChange={handleChange}
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
            <h2 className="card-header">Admin Property Details</h2>
          </div>
          <div className="card-body">
            <div>
              <label className="form-label" for="mortgage">
                <b>Mortgage</b>
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="$850"
                name="mortgage"
              ></input>
            </div>
            <div>
              <label className="form-label" for="propertyTaxes">
                <b>Property Taxes</b>
              </label>
              <input
                className="form-input"
                type="text"
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
                type="text"
                placeholder="$10,000"
                name="propertyInsurance"
              ></input>
            </div>
            <div className="form-label"></div>
            <div>
              <br />
              <button className="btn">Create User</button>
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