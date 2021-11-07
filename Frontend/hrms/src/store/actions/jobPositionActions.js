import api from "../../services/api";
import { CallBack } from "./baseAction";

export const jobPositionTypes={

    GET_JOBPOSITION_START:"GET_JOBPOSITION_START",
    GET_JOBPOSITION_SUCCESS:"GET_JOBPOSITION_SUCCCESS",
    GET_JOBPOSITION_ERROR:"GET_JOBPOSITION_ERROR"
}

const apiUrl="/jobpositions";

export const getAllJobPositions=async (dispatch)=>{

    dispatch({type:jobPositionTypes.GET_JOBPOSITION_START})
    try {
        const response=await api().get(apiUrl+"/getall")
        dispatch({type:jobPositionTypes.GET_JOBPOSITION_SUCCESS,payload:response.data.data})
    } catch  {
        dispatch({type:jobPositionTypes.GET_JOBPOSITION_ERROR})
    }

}

export const addJobPositions =(jobPosition)=>async(dispatch)=>{

    return  CallBack(api().post(apiUrl+"/add",jobPosition),dispatch,getAllJobPositions)
    
}

export const deleteJobPositions =(jobPositionId)=>async(dispatch)=>{

    return CallBack( api().delete(apiUrl+"/delete",{data:{id:jobPositionId}}),dispatch,getAllJobPositions)
    
}

