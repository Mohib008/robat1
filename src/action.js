import {
     CHANGE_SEARCH_FIELD,
     REQUEST_CAR_PENDING,
     REQUEST_CAR_SUCCESS,
     REQUEST_CAR_FAILED
 } from "./constants.js";

export const setSearchField = (text) => {
    return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
    }
}

export const requestCar = () => (dispatch) => {
    dispatch({type: REQUEST_CAR_PENDING});
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json())
        .then(data => dispatch({type: REQUEST_CAR_SUCCESS, payload:data}))
        .then(error => ({type: REQUEST_CAR_FAILED, payload: error}))
}