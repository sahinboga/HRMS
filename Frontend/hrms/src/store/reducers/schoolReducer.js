import { schoolTypes } from "../actions/schoolActions"

const defaultState = {
    data: [],
    loading: false,
    error: ""
}

export default function schoolReducer(state=defaultState,{type,payload}){

    switch(type){
        case schoolTypes.GET_SCHOOL_START:
            return {...state,loading:true,error:""}
        case schoolTypes.GET_SCHOOL_SUCCESS:
            return {...state,loading:false,data:payload}
        case schoolTypes.GET_SCHOOL_ERROR:
            return {...state,loading:false,error:"Error fetching get school"}
        default: 
            return{ ...state,loading:false,error:""}
    }
}