import api from "../../services/api"

export const employerJobAppTypes={
    GET_BY_JOBADVERT_ID:"GET_BY_JOBADVERT_ID",
    ERROR:"ERROR"
}

const apiUrl="/jobapplications"

export const getAllByEmployerJobApplication=(jobAdvertId)=>async(dispatch)=>{
    try {
        const response= await api().get(apiUrl+"/getallbyjobadvert?id="+jobAdvertId)
        dispatch({type:employerJobAppTypes.GET_BY_JOBADVERT_ID,payload:response.data.data})
    } 
    catch  {
        dispatch({type:employerJobAppTypes.ERROR})
    }
}