import axios from "axios";

export const incHt = "height/increment";
export const decHt = "height/decrement";
export const incHtByAmt = "height/incrementByAmount_height";
export const decHtByAmt = "height/decrementByAmount_height";

export const incBtd = "breadth/increment";
export const decBtd = "breadth/decrement";
export const incBtdByAmt = "breadth/incrementByAmount_breadth";
export const decBtdByAmt = "breadth/decrementByAmount_breadth";

export const getAccUserPending = 'account/getUser/pending';
export const getAccUserFulfilled= 'account/getUser/fulfilled';
export const getAccUserRejected = 'account/getUser/rejected';

// API related functions
export function getUserAccount(id){
    return async (dispatch,getState) => {
        try{
            dispatch(getAccountUserPending());
            const {data} = await axios.get(`http://localhost:4000/heights/${id}`);
            dispatch(getAccountUserFulFilled(data.length))
        }
        catch(error){
           // console.log("error fetching data....."+error);
            dispatch(getAccountUserRejected(error.message));
        }
    }
}

export function getAccountUserFulFilled(value){
 return {type : getAccUserFulfilled, payload : value}
}

export function getAccountUserRejected(error){
return {type : getAccUserRejected, error : error}
}

export function getAccountUserPending(){
return {type : getAccUserPending }
}

// height related functions
export function increment_height() {
    return { type: incHt }
}

export function decrement_height() {
    return { type: decHt }
}

export function increment_heightByAmount(value) {
    return { type: incHtByAmt, payload: value }
}

export function decrement_heightByAmount(value) {
    return { type: decHtByAmt, payload: value }
}

// breadth related functions....
export function increment_breadth() {
    return { type: incBtd }
}

export function decrement_breadth() {
    return { type: decBtd }
}

export function increment_breadthByAmount(value) {
    return { type: incBtdByAmt, payload: value }
}

export function decrement_breadthByAmount(value) {
    return { type: decBtdByAmt, payload: value }
}