import { jobApplicationTypes } from "../actions/jobApplicationActions"

const defaultState={
    data:[],
    loading:false,
    error:"",
}

export default function jobApplicationReducer(state=defaultState,{type,payload}){

    switch(type){
        case jobApplicationTypes.GET_JOBAPPLICATION_START:
            return {...state,loading:true,error:""}
        case jobApplicationTypes.GET_JOBAPPLICATION_SUCCESS:
            return {...state,loading:false,data:payload}
        case jobApplicationTypes.GET_JOBAPPLICATION_ERROR:
            return {...state,loading:false,error:"Error fetching get jobposition"}
        default: 
            return{ ...state,loading:false,error:""}
    }
}