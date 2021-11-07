import { cityTypes } from "../actions/cityActions";

const defaultState={
    data:[],
    loading:false,
    error:""
}

export default function cityReducer(state=defaultState,{payload,type}){
    switch (type) {
        case cityTypes.GET_CITY_START:
            return {...state,loading:true,error:""}
        case cityTypes.GET_CITY_SUCCESS:
            return {...state,loading:false,data:payload}
        case cityTypes.GET_CITY_ERROR:
            return {...state,loading:false,error:"Error fetching get cities"}
            
        default:
            return {...state,loading:false,error:""}
    }
}