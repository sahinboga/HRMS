import api from "../../services/api"
import { CallBack } from "./baseAction"

export const jobAdvertismentTypes={
    GET_JOBADVERTİSMENT_START:"GET_JOBADVERTİSMENT_START",
    GET_JOBADVERTİSMENT_SUCCESS:"GET_JOBADVERTİSMENT_SUCCESS",
    GET_JOBADVERTİSMENT_ERROR:"GET_JOBADVERTİSMENT_ERROR",
}


const apiUrl="/jobadvertisements"

export const getAllJobAdvertisments= async (dispatch)=>{

    dispatch({type:jobAdvertismentTypes.GET_JOBADVERTİSMENT_START})
    try {
        const response=await api().get(apiUrl+"/getall")
        dispatch({type:jobAdvertismentTypes.GET_JOBADVERTİSMENT_SUCCESS,payload:response.data.data})
    } catch {
        dispatch({type:jobAdvertismentTypes.GET_JOBADVERTİSMENT_ERROR})
    }
}

export const getJobAdvertisementFilterAndPage=(pageNo,pageSize,filter)=>async(dispatch)=>{
    dispatch({type:jobAdvertismentTypes.GET_JOBADVERTİSMENT_START})
    try {
        const response=await api().post(apiUrl+`/getfilteringandpage?pageNo=${pageNo}&pageSize=${pageSize}`,filter)
        dispatch({type:jobAdvertismentTypes.GET_JOBADVERTİSMENT_SUCCESS,payload:response.data})
    } catch {
        dispatch({type:jobAdvertismentTypes.GET_JOBADVERTİSMENT_ERROR})
    }
}

export const getActiveJobAdvertisements=async(dispatch)=>{
    CallBack(api.apply().get(apiUrl+"getactivejobadvertisement"),dispatch,getJobAdvertisementFilterAndPage)
}

export const addJobAdvert=(jobadvert)=>async(dispatch)=>{
    CallBack(api().post(apiUrl+"/add",jobadvert),dispatch,()=>{})
}

export const passiveJobAdvert=(status,id)=>async(dispatch)=>{
    CallBack(api().post(apiUrl+`/passivejobadvertisement?active=${status}&jobAdvertisementId=`+id),dispatch,getJobAdvertisementFilterAndPage)
}

export const updateJobAdvert=(jobAdvert)=>async(dispatch)=>{
    CallBack(api().put(apiUrl+"/update",jobAdvert),dispatch,()=>{})
}


