import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useDispatch, useSelector } from "react-redux";
import { QUERY_PROPERTIES } from "../utils/queries";
import { UPDATE_PROPERTIES } from "../utils/actions";

//import the idb helper to make transactions with the database
import { idbPromise } from "../utils/helpers";

const MoveUser = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const [allProperties, setAllProperties] = useState([])

    const { loading, data } = useQuery(QUERY_PROPERTIES);

    const { properties } = state

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

    return (
        <div>Hello, World!</div>
    )
}

export default MoveUser