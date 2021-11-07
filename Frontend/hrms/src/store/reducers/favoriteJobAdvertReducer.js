import { favoriteTypes } from "../actions/favoriteJobAdvertactions";

const defaultState={
    data:[],
    loading:false,
    error:""
}

export default function favoriteJobAdvertsReducer(state=defaultState,{payload,type}){
    switch (type) {
        case favoriteTypes.GET_FAVORİTE_START:
            return {...state,loading:true,eeror:""}
        case favoriteTypes.GET_FAVORİTE_SUCCESS:
            return {...state,loading:false,data:payload}
        case favoriteTypes.GET_FAVORİTE_ERROR:
            return{...state,loading:false,error:"Error get fetching favorites"}
        default:
            return{...state,loading:false,error:""}
    }
}