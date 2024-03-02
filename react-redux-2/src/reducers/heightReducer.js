import { 
    incHt,
    decHt,
    incHtByAmt,
    decHtByAmt,
    getAccUserFulfilled,
    getAccUserRejected,
    getAccUserPending
  } from "../actions";

export function heightReducer(state={length: 0}, action){
  switch(action.type){
     case getAccUserFulfilled: 
          return {length : action.payload, pending : false};
     case getAccUserRejected: 
          return {...state, error : action.error, pending : false};
     case getAccUserPending: 
          return {...state, pending : true};
     case incHt: 
          return {length : state.length + 1};
     case decHt: 
          return {length : state.length - 1};
     case incHtByAmt: 
          return {length : state.length + action.payload};
     case decHtByAmt: 
          return {length : state.length - action.payload};
     default :
          return state;    
  }
}