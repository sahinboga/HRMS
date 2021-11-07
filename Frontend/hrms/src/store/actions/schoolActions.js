import api from "../../services/api";
import { CallBack } from "./baseAction";


export const schoolTypes= {

    GET_SCHOOL_START:"GET_SCHOOL_START",
    GET_SCHOOL_SUCCESS:"GET_SCHOOL_SUCCESS",
    GET_SCHOOL_ERROR:"GET_SCHOOL_ERROR"
}

const apiUrl="/schools";

export const getAllSchools=async (dispatch)=>{

    dispatch({type:schoolTypes.GET_SCHOOL_START})
    try {
        const response=await api().get(apiUrl+"/getall")
        dispatch({type:schoolTypes.GET_SCHOOL_SUCCESS,payload:response.data.data})
    } catch  {
        dispatch({type:schoolTypes.GET_SCHOOL_ERROR})
    }

}

export const addSchools=(school)=>async (dispatch)=>{
    return CallBack(api().post(apiUrl+"/add",school),dispatch,getAllSchools)
}

export const deleteSchools=(schoolId)=>async (dispatch)=>{

    return CallBack(api().delete(apiUrl+"/delete",{data:{schoolId:schoolId}}),dispatch,getAllSchools)
}