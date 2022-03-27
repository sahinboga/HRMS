import { userTypes } from "../actions/userAction"


const defaultState = {
    data: [],
    loading: false,
    error: ""
}

export default function userReducer(state = defaultState, {type, payload}) {
    switch (type) {
        case userTypes.GET_USER_START:
            return {...state, loading:true, error:""}
        case userTypes.GET_USER_SUCCESS:
            return {...state, loading:false, data:payload}
        case userTypes.GET_USER_ERROR:
            return {...state, loading:false, error:"Error fetching get users"}

        case userTypes.GET_USER:
            return {...state, data:payload}
        default:
            return {...state, loading:false, error:""}
    }
}