import { jobPositionTypes } from "../actions/jobPositionActions";

const defaultState = {
    data: [],
    loading: false,
    error: ""
}
export default function jobPositionReducer(state=defaultState,{type,payload}){

    switch(type){
        case jobPositionTypes.GET_JOBPOSITION_START:
            return {...state,loading:true,error:""}
        case jobPositionTypes.GET_JOBPOSITION_SUCCESS:
            return {...state,loading:false,data:payload}
        case jobPositionTypes.GET_JOBPOSITION_ERROR:
            return {...state,loading:false,error:"Error fetching get jobposition"}
        default: 
            return{ ...state,loading:false,error:""}
    }
}

