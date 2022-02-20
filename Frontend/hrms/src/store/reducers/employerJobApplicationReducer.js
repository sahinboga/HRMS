
import { employerJobAppTypes } from "../actions/employerJobApplicationActions"

const defaultState={
    data:null,
    error:""
}

export default function employerJobApplicationReducer(state=defaultState,{type,payload}){
    switch (type) {
        case employerJobAppTypes.GET_BY_JOBADVERT_ID:
            return {...state,data:payload,error:""}
        case employerJobAppTypes.ERROR:
            return {...state,error:"Error fetching get jobseeker job application"}
    
        default:
            return {...state}
    }
}