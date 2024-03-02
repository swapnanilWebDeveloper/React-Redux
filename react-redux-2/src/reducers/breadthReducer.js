import { 
    incBtd,
    decBtd,
    incBtdByAmt,
    decBtdByAmt
  } from "../actions";

export function breadthReducer(state={width: 0}, action){
  switch(action.type){
     case incBtd: 
          return {width : state.width + 1};
     case decBtd: 
          return {width : state.width - 1};
     case incBtdByAmt: 
          return {width : state.width + action.payload};
     case decBtdByAmt: 
          return {width : state.width - action.payload};
     default :
          return state;    
  }
}