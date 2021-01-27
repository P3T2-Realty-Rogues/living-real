import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PROPERTIES } from "../utils/queries";
import { useParams } from "react-router-dom";
import { UPDATE_PROPERTIES } from "../utils/actions";

//import the idb helper to make transactions with the database
import { idbPromise } from "../utils/helpers";

function UpdatePropertyForm() {
    const { id } = useParams();
    const state = useSelector((state) => state);
    const dispatch = useDispatch();


    const [currentProperty, setCurrentProperty] = useState({})

    const { loading, data } = useQuery(QUERY_PROPERTIES);

    const { properties } = state

    useEffect(() => {
        // already in global store
        if (properties.length) {
            setCurrentProperty(properties.find(property => property._id === id));
        }
        // retrieved from server
        else if (data) {
            dispatch({
                type: UPDATE_PROPERTIES,
                properties: data.properties
            });

            data.properties.forEach((property) => {
                idbPromise('properties', 'put', property);
            });
        }
        // get cache from idb
        else if (!loading) {
            idbPromise('properties', 'get').then((indexedProperties) => {
                dispatch({
                    type: UPDATE_PROPERTIES,
                    properties: indexedProperties
                });
            });
        }
    }, [properties, data, loading, dispatch, id]);

    // Setup the yes/no values for the balcony and pool.
    let balconyPlaceHolder = "No";
    // if( state.currentProperty.balcony.toUpperCase() === 'YES' ) {
    //    balconyPlaceHolder = "Yes";
    // } 

    let poolPlaceHolder = "No";
    // if( state.currentProperty.pool.toUpperCase() === 'YES' ) {
    //    poolPlaceHolder = "Yes";
    // }
    console.log(currentProperty)
    return (
        <form className="flex-row">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-header">{currentProperty?.propertyName}</h3>
                </div>

                <div className="card-body">
                    <div>
                        <label className="form-label" htmlFor="propertyName"><b>Property Name</b></label>
                        <input className="form-input" type="text" placeholder={currentProperty?.propertyName} name="propertyName"></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="propertyType"><b>Property Type</b></label>
                        <input className="form-input" type="text" placeholder={currentProperty?.propertyType} name="propertyType"></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="streetAddress"><b>Street Address</b></label>
                        <input className="form-input" type="text" placeholder={currentProperty?.streetAddress} name="streetAddress"></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor=" city"><b>City</b></label>
                        <input className="form-input" type="text" placeholder={currentProperty?.city} name="city"></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="state"><b>State</b></label>
                        <input className="form-input" type="text" placeholder={currentProperty?.state} name="state"></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="zipCode"><b>Zip Code</b></label>
                        <input className="form-input" type="text" placeholder={currentProperty?.zipCode} name="zipCode"></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="sqFeet"><b>Square Footage</b></label>
                        <input className="form-input" type="text" placeholder={currentProperty?.sqFeet} name="sqFeet"></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="numBedrooms"><b>Number of Bedrooms</b></label>
                        <input className="form-input" type="text" placeholder={currentProperty?.numBedroom} name="numBedrooms"></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="numBathrooms"><b>Number of Bathrooms</b></label>
                        <input className="form-input" type="text" placeholder={currentProperty?.numBathrooms} name="numBathrooms"></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="balcony"><b>Balcony</b></label>
                        <input className="form-input" type="text" name="balcony" placeholder={balconyPlaceHolder}></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="pool"><b>Pool</b></label>
                        <input className="form-input" type="text" name="pool" placeholder={poolPlaceHolder}></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="rent"><b>Rent</b></label>
                        <input className="form-input" type="text" placeholder={currentProperty?.rent} name="rent"></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="petDeposit"><b>Pet Deposit</b></label>
                        <input className="form-input" type="text" placeholder={currentProperty?.petDeposit} name="petDeposit"></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="renterDeposit"><b>Renter Deposit</b></label>
                        <input className="form-input" type="text" placeholder={currentProperty?.renterDeposit} name="renterDeposit"></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="appFee"><b>App Fee</b></label>
                        <input className="form-input" type="text" placeholder={currentProperty?.appFee} name="appFee"></input>
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
                    <h2 className="card-header">
                        Admin Details for {currentProperty?.propertyName}
                    </h2>
                </div>
                <div className="card-body">
                    <div>
                        <label className="form-label" htmlFor="mortgage">
                            <b>Mortgage</b>
                        </label>
                        <input
                            className="form-input"
                            type="text"
                            placeholder={currentProperty?.ownerInfo?.mortgage}
                            name="mortgage"
                        ></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="propertyTaxes">
                            <b>Property Taxes</b>
                        </label>
                        <input
                            className="form-input"
                            type="text"
                            placeholder={currentProperty?.ownerInfo?.propertyTaxes}
                            name="propertyTaxes"
                        ></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="propertyInsurance">
                            <b>Property Insurance</b>
                        </label>
                        <input
                            className="form-input"
                            type="text"
                            placeholder={currentProperty?.ownerInfo?.propertyInsurance}
                            name="propertyInsurance"
                        ></input>
                    </div>
                    <div className="form-label"></div>
                </div>
            </div>
        </form>
    );
}

export default UpdatePropertyForm;
