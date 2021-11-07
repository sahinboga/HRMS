import api from "../../services/api"

const resumeTypes={
    GET_RESUME_START="GET_RESUME_START",
    GET_RESUME_SUCCESS="GET_RESUME_SUCCESS",
    GET_RESUME_ERROR="GET_RESUME_ERROR"
}

const apiUrl="/resumes"

export const getResume=(resumeId)=>async(dispatch)=>{
    dispatch({type:resumeTypes.GET_RESUME_START})
    try {
        const response=await api().get(apiUrl+"/getresume?resume="+resumeId)
        dispatch({type:resumeTypes.GET_RESUME_SUCCESS,payload:response.data.data})
    } catch {
        dispatch({type:resumeTypes.GET_RESUME_ERROR})
    }
}