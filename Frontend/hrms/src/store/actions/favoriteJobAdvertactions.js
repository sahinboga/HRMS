import api from "../../services/api"
import Constant from "../../utils/constants"
import { CallBack } from "./baseAction"

export const favoriteTypes={

    GET_FAVORİTE_START:"GET_FAVORİTE_START",
    GET_FAVORİTE_SUCCESS:"GET_FAVORİTE_SUCCESS",
    GET_FAVORİTE_ERROR:"GET_FAVORİTE_ERROR"
}

const apiUrl="/favoritejobadverts"

export const getJobSeekerFavorite=(jobSeekerId)=> async (dispatch)=>{
    dispatch({type:favoriteTypes.GET_FAVORİTE_START})
    try {
        const response= await api().get(apiUrl+"/getjobseekerfavorite?jobseeker="+jobSeekerId)
        dispatch({type:favoriteTypes.GET_FAVORİTE_SUCCESS,payload:response.data.data})
    } catch {
        dispatch({type:favoriteTypes.GET_FAVORİTE_ERROR})
    }
}

export const addFavorite=(favorite)=>async(dispatch)=>{
    return CallBack(api().post(apiUrl+"/add",favorite),dispatch,getJobSeekerFavorite(Constant.JobSeekerId))
}

export const deleteFavorite=(id)=>async(dispatch)=>{
    return CallBack(api().delete(apiUrl+"/delete",{data:{favoriteId:id}}),dispatch,getJobSeekerFavorite(Constant.JobSeekerId))
}