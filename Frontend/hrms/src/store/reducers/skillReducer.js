import { skillTypes } from "../actions/SkillActions"

const defaultState = {
    data: [],
    loading: false,
    error: ""
}

export default function skillReducer(state=defaultState,{type,payload}){

    switch(type){
        case skillTypes.GET_SKILL_START:
            return {...state,loading:true,error:""}
        case skillTypes.GET_SKILL_SUCCESS:
            return {...state,loading:false,data:payload}
        case skillTypes.GET_SKILL_ERROR:
            return {...state,loading:false,error:"Error fetching get skill"}
        default: 
            return{ ...state,loading:false,error:""}
    }
}