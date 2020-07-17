import {
    CHANGE_SEARCH_FIELD,
    REQUEST_CAR_PENDING,
    REQUEST_CAR_SUCCESS,
    REQUEST_CAR_FAILED
} from "./constants.js";

const intialStateSearch = {
    searchField: ""
}

export const searchCar = (state=intialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
          return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}

const intialStateCar = {
    isPinding: false,
    car: [],
    error: ""
}

export const requestCar = (state=intialStateCar, action={}) => {
    switch(action.type) {
        case REQUEST_CAR_PENDING:
            return Object.assign({}, state, {isPinding: true})
        case REQUEST_CAR_SUCCESS:
            return Object.assign({}, state, {car: action.payload, isPinding: false})
        case REQUEST_CAR_FAILED:
            return Object.assign({}, state, { error: action.payload, isPinding: false})
        default:
            return state;            
    }
}