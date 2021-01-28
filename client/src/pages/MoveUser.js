import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useDispatch, useSelector } from "react-redux";
import { QUERY_PROPERTIES, QUERY_USERS } from "../utils/queries";
import { UPDATE_PROPERTIES } from "../utils/actions";

//import the idb helper to make transactions with the database
import { idbPromise } from "../utils/helpers";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Autocomplete from '@material-ui/lab/Autocomplete';

import {MOVE_USER_IN} from '../utils/mutations'



const MoveUser = () => {
    const users = useQuery(QUERY_USERS)
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const [allProperties, setAllProperties] = useState([])

    const { loading, data } = useQuery(QUERY_PROPERTIES);

    const { properties } = state

    const [moveUser] = useMutation(MOVE_USER_IN)

    useEffect(() => {
        // already in global store
        if (properties.length) {
            setAllProperties(properties);
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
    }, [properties, data, loading, dispatch]);

    const [moveData, setMoveData] = useState({ userId: '', propertyId: '' })

    const handleChange = (event) => {
        if (event.target.value === "") {
            return
        } else
        if (event.target.value !== undefined) {
            if (event.target.id.split('-')[0] === "users") {
                setMoveData({ ...moveData, userId: users.data?.users[event.target.attributes[3].value]._id })
            } else if (event.target.id.split('-')[0] === "home") {
                setMoveData({ ...moveData, propertyId: properties[event.target.attributes[3].value]._id })
            };
        }
    };
    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await moveUser({ variables: { userId: moveData.userId, propertyId: moveData.propertyId } })
            setMoveData({userId: '', propertyId: ''})
            window.location.reload()
        } catch (e) {
            console.log(e)
        }
    }

    const [moveOutData, setMoveOutData] = useState({ propertyId: '' })

    const handleMoveOutChange = (event) => {
        
        if (event.target.value === "") {
            return
        } else
        if (event.target.value !== undefined) {
            if (event.target.id.split('-')[0] === "move") {
                setMoveOutData({ propertyId: properties[event.target.attributes[3].value]._id })
            };
        }
    };

    const handleMoveOut = (event) => {
        if (moveOutData.propertyId) {
            console.log(moveOutData)
                
            window.location.replace(`/AdminDash/MoveUserOut/${moveOutData.propertyId}`)
        }
    }

    //this will stop the component from rendering if the data is no available yet
    if (users.data?.users.length === 0 || allProperties.length === 0) {
        return null
    }

    return (
        <>
        <div className='moveContainer'>
            <Autocomplete
                id="users-box"
                options={users.data?.users}
                getOptionLabel={(users) => users.firstName + ' ' + users.lastName}
                style={{ width: "20rem" }}
                renderInput={(params) => <TextField {...params} label="User" variant="outlined" />}
                onChange={handleChange}
            />

            <Autocomplete
                id="home-box"
                options={allProperties}
                getOptionLabel={(property) => property.propertyName}
                style={{ width: "20rem", marginTop: "10px" }}
                renderInput={(params) => <TextField {...params} label="Home" variant="outlined" />}
                onChange={handleChange}
            />
            <div className='contentContainer' style={{ marginTop: "42px" }}><Button onClick={handleSubmit} size='large' variant="contained" color='primary'>Move Tenant In</Button></div>
        </div>

        <div className='moveContainer'>

            <Autocomplete
                id="move-out-box"
                options={allProperties}
                getOptionLabel={(property) => property.propertyName}
                style={{ width: "20rem" }}
                renderInput={(params) => <TextField {...params} label="Home" variant="outlined" />}
                onChange={handleMoveOutChange}
            />
            <div className='contentContainer' style={{ marginTop: "42px" }}><Button onClick={handleMoveOut} size='large' variant="contained" color='secondary'>Edit Tenants</Button></div>
        </div>

        </>
    );
}

export default MoveUser