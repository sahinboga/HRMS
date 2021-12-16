import { resumeTypes } from "../actions/resumeActions";

const defaultState={

    data:{},
    error:"",
    loading:false
}

export default function resumeReducer(state=defaultState,{payload,type}){
    switch (type) {
        case resumeTypes.GET_RESUME_START:
            return {...state,loading:true,error:""}
        case resumeTypes.GET_RESUME_SUCCESS:
            return {...state,loading:false,data:payload}
        case resumeTypes.GET_RESUME_ERROR:
            return {...state,loading:false,error:"Error fetching get resume"}
    
        default:
            return{...state,loading:false,error:""}
    }
}