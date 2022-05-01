import { authTypes } from "../actions/authActions";

const initialState = {
    user: null,
    userData: null
}

export default function authReducer(state = initialState, {type, payload}) {
    switch(type) {
        case authTypes.SET_LOGIN:
            return {...state, user: payload}
        case authTypes.USER_DATA:
            return { ...state, userData: payload }
        default:
            return {...state}
    }
}