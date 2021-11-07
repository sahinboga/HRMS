import api from "../../services/api";
import { CallBack } from "./baseAction";


export const skillTypes= {

    GET_SKILL_START:"GET_SKILL_START",
    GET_SKILL_SUCCESS:"GET_SKILL_SUCCESS",
    GET_SKILL_ERROR:"GET_SKILL_ERROR"
}

const apiUrl="/skills";

export const getAllSkills=async (dispatch)=>{

    dispatch({type:skillTypes.GET_SKILL_START})
    try {
        const response=await api().get(apiUrl+"/getall")
        dispatch({type:skillTypes.GET_SKILL_SUCCESS,payload:response.data.data})
    } catch  {
        dispatch({type:skillTypes.GET_SKILL_ERROR})
    }

}

export const addSkills=(skill)=>async (dispatch)=>{
    return CallBack(api().post(apiUrl+"/add",skill),dispatch,getAllSkills)
}

export const deleteSkills=(skillId)=>async (dispatch)=>{

    return CallBack(api().delete(apiUrl+"/delete",{data:{skillId:skillId}}),dispatch,getAllSkills)
}