import React, { useState } from "react";
import { ADD_PROPERTY } from "../../utils/mutations";
import Upload from "../Upload";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import Auth from "../../utils/auth";
import { AiOutlineSend } from "react-icons/ai";
import {RiArrowGoBackLine} from "react-icons/ri";

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
    availability: true,
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
    window.location.replace("/AdminDash");
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
              <label className="form-label" htmlFor="propertyName">
                <b>Property Name</b>
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="101 Elm"
                name="propertyName"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div>
              <label className="form-label" htmlFor="propertyType">
                <b>Property Type</b>
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="Condo/House/Duplex"
                name="propertyType"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div>
              <label className="form-label" htmlFor="streetAddress">
                <b>Street Address</b>
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="1234 Sample Road"
                name="streetAddress"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className = "form-detail">
              <label className="form-label" htmlFor="city">
                <b>City</b>
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="Austin"
                name="city"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className = "form-detail">
              <label className="form-label" htmlFor="state">
                <b>State</b>
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="Texas"
                name="state"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className = "form-detail">
              <label className="form-label" htmlFor="zipCode">
                <b>Zip Code</b>
              </label>
              <input
                className="form-input"
                type="number"
                maxLength="15"
                placeholder="12345"
                name="zipCode"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className = "form-detail">
              <label className="form-label" htmlFor="sqFeet">
                <b>Square Footage</b>
              </label>
              <input
                className="form-input"
                type="number"
                placeholder="1,250"
                name="sqFeet"
                onChange={handleChange}
                required
              ></input>
            </div>
          </div>
        </div>
        <div className="card col-auto">
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
                required
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
                required
              ></input>
            </div>
            <div  className = "form-detail">
              <label className="form-label" htmlFor="numBedroom">
                <b>Bedrooms</b>
              </label>
              <input
                className="form-input"
                type="number"
                placeholder="1/2/3/4"
                name="numBedroom"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className = "form-detail">
              <label className="form-label" htmlFor="numBathrooms">
                <b>Bathrooms</b>
              </label>
              <input
                className="form-input"
                type="number"
                placeholder="1/2/3/4"
                name="numBathrooms"
                onChange={handleChange}
                required
              ></input>
            </div>

            <div className = "form-detail">
              <label className="form-label" htmlFor="rent">
                <b>Rent</b>
              </label>
              <input
                className="form-input"
                type="number"
                placeholder="$1200"
                name="rent"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className = "form-detail">
              <label className="form-label" htmlFor="petDeposit">
                <b>Pet Deposit</b>
              </label>
              <input
                className="form-input"
                type="number"
                placeholder="$500"
                name="petDeposit"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className = "form-detail">
              <label className="form-label" htmlFor="renterDeposit">
                <b>Renter Deposit</b>
              </label>
              <input
                className="form-input"
                type="number"
                placeholder="$200"
                name="renterDeposit"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className = "form-detail">
              <label className="form-label" htmlFor="appFee">
                <b>App Fee</b>
              </label>
              <input
                className="form-input"
                type="number"
                placeholder="$150"
                name="appFee"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="form-label">
              <br />
              <br />
              <Upload />
              <br />
              
            </div>
          </div>
        </div>

        <div className="options-card">
          <div className="card-header">
            <h3 className="card-header">Options</h3>
          </div>
          <div className="card-body">
            <div className="form-label"></div>
            <div>
              
              <button className="create-btn">
              <AiOutlineSend size={30} color="default"></AiOutlineSend> 
                &nbsp; 
                <p>Create Property</p>
              </button>
              <Link to="/AdminDash" className="back-btn">
                <RiArrowGoBackLine size={30} color="var(--light)"></RiArrowGoBackLine>
                <p>Back</p>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateProperty;
