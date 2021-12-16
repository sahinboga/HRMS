import { employerTypes } from "../actions/employerActions"

const defaultState={

    data:{},
    error:"",
    loading:false
}

export default function employerReducer(state=defaultState,{payload,type}){
    switch (type) {
        case employerTypes.GET_EMPLOYER_START:
            return {...state,loading:true,error:""}
        case employerTypes.GET_EMPLOYER_SUCCESS:
            return {...state,loading:false,data:payload}
        case employerTypes.GET_EMPLOYER_ERROR:
            return {...state,loading:false,error:"Error fetching get employer"}
    
        default:
            return{...state,loading:false,error:""}
    }
}