import { jobAdvertismentTypes } from "../actions/jobAdvertisementAction";

const defaultState={
    data:[],
    loading:false,
    error:"",
    totalJobAdvertCount:0
}

export default function jobAdvertismentReducer(state=defaultState,{type,payload}){
    switch (type) {
        case jobAdvertismentTypes.GET_JOBADVERTİSMENT_START:
            return {...state,loading:true,error:""}
        case jobAdvertismentTypes.GET_JOBADVERTİSMENT_SUCCESS:
            return {...state,loading:false,data:payload.data,totalJobAdvertCount: parseInt(payload.message)}
        case jobAdvertismentTypes.GET_JOBADVERTİSMENT_ERROR:
            return {...state,loading:false,error:"Error get fetching jobadvertisments"}
       
        default:
            return {...state,loading:false,error:""}
    }
}