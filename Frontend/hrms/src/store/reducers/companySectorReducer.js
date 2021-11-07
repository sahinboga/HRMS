import { sectorTypes } from "../actions/companySectorActions";

const defaultState = {
    data: [],
    loading: false,
    error: ""
}

export default function companySectorReducer(state=defaultState,{payload,type}){
    switch (type) {
        case sectorTypes.GET_SECTOR_START:
            return {...state,loading:true,error:""}
        case sectorTypes.GET_SECTOR_SUCCESS:
            return{...state,loading:false,data:payload}
        case sectorTypes.GET_SECTOR_ERROR:
            return {...state,loading:false,error:"Error fetching get sectors"}
         
        default:
            return{...state,loading:false,error:""}
    }
}