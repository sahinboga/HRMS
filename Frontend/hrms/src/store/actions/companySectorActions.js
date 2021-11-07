import api from "../../services/api"
import { CallBack } from "./baseAction"

export const sectorTypes={
    GET_SECTOR_START:"GET_SECTOR_START",
    GET_SECTOR_SUCCESS:"GET_SECTOR_SUCCESS",
    GET_SECTOR_ERROR: "GET_SECTOR_ERROR"
}

const apiUrl="/companysectors"

export const getAllSectors=async(dispatch)=>{

    dispatch({type:sectorTypes.GET_SECTOR_START})
    try {
        const response=await api().get(apiUrl+"/getall")
        dispatch({type:sectorTypes.GET_SECTOR_SUCCESS,payload:response.data.data})
    } catch  {
        dispatch({type:sectorTypes.GET_SECTOR_ERROR})
    }
}

export const addSectors=(sector)=>async(dispatch)=>{
   return CallBack(api().post(apiUrl+"/add",sector),dispatch,getAllSectors)
}
export const deleteSectors=(id)=>async(dispatch)=>{
    return CallBack(api().delete(apiUrl+"/delete",{data:{id:id}}),dispatch,getAllSectors)
 }