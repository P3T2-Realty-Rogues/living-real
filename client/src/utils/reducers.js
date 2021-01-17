

// Import the React hooks needed
//import { useReducer } from 'react';

// Import the defined actions
import {
    UPDATE_OWNER,    
    UPDATE_TENANT,   
    UPDATE_PROPERTY,
    ADD_TENANT,
    REMOVE_TENANT,
    ADD_PROPERTY,
    REMOVE_PROPERTY,
    CREATE_MAINTENANCE_REQUEST,
    CREATE_BB_POST,            
    CREATE_BB_POST_COMMENT,    
  } from "./actions";

  // Create the initial state for Redux
  const initialState = {
    owners: [],
    tenants: [],
    properties: false,
    maintenance_req: [],
    bb_post: [],
	bb_post_comment: []
  }
  
  export const reducer = (state = initialState, action) => {
      switch (action.type) {
          // If action type value is the value of `UPDATE_OWNERS`, return a new state object with an updated owner array
          case UPDATE_OWNER:
              return {
                  ...state,                          // the 'spread' operator
                  owners: [...action.owners],
              };

          // If action type value is the value of `UPDATE_TENANTS`, return a new state object with an updated tenants array
          case UPDATE_TENANT:
              return {
                  ...state,
                  tenants: [...action.tenants]
              };

          // If action type value is the value of `UPDATE_PROPERTY`, return a new state object with an updated properties array
          case UPDATE_PROPERTY:
              return {
                  ...state,
                  properties: [...action.properties]
              };

          // If action type value is the value of `ADD_TENANT`, return a new state object with an updated properties array
          case ADD_TENANT:
              return {
                  ...state,
                  tenants: [...action.tenants]
              };

          // If action type value is the value of `REMOVE_TENANT`, return a new state object with an updated properties array
          case REMOVE_TENANT:
              return {
                  ...state,
                  tenants: [...action.tenants]
              };

          // If action type value is the value of `ADD_PROPERTIES`, return a new state object with an updated properties array
          case ADD_PROPERTY:
              return {
                  ...state,
                  properties: [...action.properties]
              };

          // If action type value is the value of `REMOVE_PROPERTIES`, return a new state object with an updated properties array
          case REMOVE_PROPERTY:
              return {
                  ...state,
                  properties: [...action.properties]
              };
									  			  
          // If action type value is the value of `CREATE_MAINTENANCE_REQUEST`, return a new state object with an updated maintenance request value.
          case CREATE_MAINTENANCE_REQUEST:
              return {
                  ...state,
                  maintenance_req: action.maintenance_req
              };    
               
          // If action type value is the value of `CREATE_BB_POST`, return a new state object with an updated bb_post array.
          case CREATE_BB_POST:
              return {
                  ...state,
                  bb_post: action.bb_post
              };    
               
          // If action type value is the value of `CREATE_BB_POST_COMMENT`, return a new state object with an updated shopping cart.
          case CREATE_BB_POST_COMMENT:
              return {
                  ...state,
                  bb_post_comment: action.bb_post_comment
              };    
 


          // If it's none of these actions, do not update state at all and keep things the same!
          default:
              return state;
      }
  };


  // Export the default reducer for Redux.
  export default reducer;