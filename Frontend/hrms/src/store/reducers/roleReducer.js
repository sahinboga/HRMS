import { roleTypes } from "../actions/roleActions"


const defaultState = {
    data: [],
    loading: false,
    error: ""
}


export default function roleReducer(state=defaultState, {type, payload}){
    switch (type) {
        case roleTypes.GET_ROLE_START:
            return {...state, loading:true, error:""}
        case roleTypes.GET_ROLE_SUCCESS:
            return {...state, loading:false, data:payload}
        case roleTypes.GET_ROLE_ERROR:
            return {...state, loading:false, error:"Get fetching role"}
        default:
            return {...state, loading:false, error:""}
    }
}