import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USERS, QUERY_USERS } from "../utils/queries";
import { useParams } from "react-router-dom";
import { UPDATE_USER } from "../utils/actions";

//import the idb helper to make transactions with the database
import { idbPromise } from "../utils/helpers";

function UpdateUserForm() {
    const { id } = useParams();
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log(state)

    const [currentUser, setCurrentUser] = useState({})

    const { loading, data } = useQuery(QUERY_USERS);

    const { users } = state

    useEffect(() => {
        // already in global store
        if (users.length) {
            setCurrentUser(users.find(user => user._id === id));
        }
        // retrieved from server
        else if (data) {
            dispatch({
                type: UPDATE_USER,
                users: data.users
            });

            data.users.forEach((user) => {
                idbPromise('users', 'put', user);
            });
        }
        // get cache from idb
        else if (!loading) {
            idbPromise('users', 'get').then((indexedUsers) => {
                dispatch({
                    type: UPDATE_USER,
                    users: indexedUsers
                });
            });
        }
    }, [users, data, loading, dispatch, id]);

    // Setup the yes/no values for the balcony and pool.
    let balconyPlaceHolder = "No";
    // if( state.currentUser.balcony.toUpperCase() === 'YES' ) {
    //    balconyPlaceHolder = "Yes";
    // } 

    let poolPlaceHolder = "No";
    // if( state.currentUser.pool.toUpperCase() === 'YES' ) {
    //    poolPlaceHolder = "Yes";
    // }
    console.log(currentUser)
    return (
        <form className="flex-row">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-header">{currentUser?.UserName}</h3>
                </div>

                <div className="card-body">
                    <div>
                        <label className="form-label" htmlFor="UserName"><b>User Name</b></label>
                        <input className="form-input" type="text" placeholder={currentUser?.userName} name="UserName"></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="UserType"><b>User Type</b></label>
                        <input className="form-input" type="text" placeholder={currentUser?.UserType} name="UserType"></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="streetAddress"><b>Street Address</b></label>
                        <input className="form-input" type="text" placeholder={currentUser?.streetAddress} name="streetAddress"></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor=" city"><b>City</b></label>
                        <input className="form-input" type="text" placeholder={currentUser?.city} name="city"></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="state"><b>State</b></label>
                        <input className="form-input" type="text" placeholder={currentUser?.state} name="state"></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="zipCode"><b>Zip Code</b></label>
                        <input className="form-input" type="text" placeholder={currentUser?.zipCode} name="zipCode"></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="sqFeet"><b>Square Footage</b></label>
                        <input className="form-input" type="text" placeholder={currentUser?.sqFeet} name="sqFeet"></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="numBedrooms"><b>Number of Bedrooms</b></label>
                        <input className="form-input" type="text" placeholder={currentUser?.numBedroom} name="numBedrooms"></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="numBathrooms"><b>Number of Bathrooms</b></label>
                        <input className="form-input" type="text" placeholder={currentUser?.numBathrooms} name="numBathrooms"></input>
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
                        <input className="form-input" type="text" placeholder={currentUser?.rent} name="rent"></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="petDeposit"><b>Pet Deposit</b></label>
                        <input className="form-input" type="text" placeholder={currentUser?.petDeposit} name="petDeposit"></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="renterDeposit"><b>Renter Deposit</b></label>
                        <input className="form-input" type="text" placeholder={currentUser?.renterDeposit} name="renterDeposit"></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="appFee"><b>App Fee</b></label>
                        <input className="form-input" type="text" placeholder={currentUser?.appFee} name="appFee"></input>
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
                        Admin Details for {currentUser?.userName}
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
                            placeholder={currentUser?.ownerInfo?.mortgage}
                            name="mortgage"
                        ></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="UserTaxes">
                            <b>User Taxes</b>
                        </label>
                        <input
                            className="form-input"
                            type="text"
                            placeholder={currentUser?.ownerInfo?.UserTaxes}
                            name="UserTaxes"
                        ></input>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="UserInsurance">
                            <b>User Insurance</b>
                        </label>
                        <input
                            className="form-input"
                            type="text"
                            placeholder={currentUser?.ownerInfo?.UserInsurance}
                            name="UserInsurance"
                        ></input>
                    </div>
                    <div className="form-label"></div>
                </div>
            </div>
        </form>
    );
}

export default UpdateUserForm;
