import { jobSeekerJobAppTypes } from "../actions/jobSeekerJobApplicationAction";

const defaultState={
    data:null,
    error:""
}

export default function jobSeekerJobApplicationReducer(state=defaultState,{type,payload}){
    switch (type) {
        case jobSeekerJobAppTypes.GET_BY_JOBSEEKER_ID:
            return {...state,data:payload,error:""}
        case jobSeekerJobAppTypes.ERROR:
            return {...state,error:"Error fetching get jobseeker job application"}
    
        default:
            return {...state}
    }
}