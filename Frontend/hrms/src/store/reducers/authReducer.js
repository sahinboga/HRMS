import { authTypes } from "../actions/authActions";

const initialState = {
    user: null,
}

export default function authReducer(state = initialState, {type, payload}) {
    switch(type) {
        case authTypes.SET_LOGIN:
            return {...state, user: payload}
        default:
            return {...state}
    }
}