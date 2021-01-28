import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useDispatch, useSelector } from "react-redux";
import { QUERY_PROPERTIES } from "../utils/queries";
import { UPDATE_PROPERTIES } from "../utils/actions";

//import the idb helper to make transactions with the database
import { idbPromise } from "../utils/helpers";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useBorderSelectStyles } from '@mui-treasury/styles/select/border';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    selectTitle: {
      color: 'white',
      fontSize: '2rem',
      fontWeight: '530',
      lineHeight: '0'
    },
  });

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

    const [val, setVal] = useState(-1);

    const handleChange = (event) => {
        setVal(event.target.value);
    };

    const borderSelectClasses = useBorderSelectStyles();
    const classes = useStyles();

    // moves the menu below the select input
    const menuProps = {
        classes: {
            list: borderSelectClasses.list
        },
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        transformOrigin: {
            vertical: "top",
            horizontal: "left"
        },
        getContentAnchorEl: null
    };

    const iconComponent = (props) => {
        return (
            <ExpandMoreIcon className={props.className + " " + borderSelectClasses.icon} />
        )
    };

    return (
        <div>
            <FormControl className='spacing'>
                <InputLabel
                    className={classes.selectTitle}
                    id="inputLabel"
                >User</InputLabel>
                <Select
                    disableUnderline
                    classes={{ root: borderSelectClasses.select, }}
                    labelId="inputLabel"
                    IconComponent={iconComponent}
                    MenuProps={menuProps}
                    value={val}
                    onChange={handleChange}
                >
                    <MenuItem value={0}>None</MenuItem>
                    <MenuItem value={1}>One</MenuItem>
                    <MenuItem value={2}>Two</MenuItem>
                    <MenuItem value={3}>Three</MenuItem>
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel
                    className={classes.selectTitle}
                    id="inputLabel"
                >Property</InputLabel>
                <Select
                    disableUnderline
                    classes={{ root: borderSelectClasses.select, }}
                    labelId="inputLabel"
                    IconComponent={iconComponent}
                    MenuProps={menuProps}
                    value={val}
                    onChange={handleChange}
                >
                    <MenuItem value={-1}>None</MenuItem>
                    {allProperties.map((property, index) => (
                    <MenuItem value={index}>{property.propertyName}</MenuItem>
                    ))}
                    
                </Select>
            </FormControl>
        </div>
    );
}

export default MoveUser