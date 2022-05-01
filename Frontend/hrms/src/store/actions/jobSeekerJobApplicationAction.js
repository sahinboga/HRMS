import api from "../../services/api"

export const jobSeekerJobAppTypes={
    GET_BY_JOBSEEKER_ID:"GET_BY_JOBSEEKER_ID",
    ERROR:"ERROR"
}

const apiUrl="/jobapplications"

export const getAllByJobSeekerJobApplication=(jobSeekerId)=>async(dispatch)=>{
    try {
        const response= await api().get(apiUrl+"/getallbyjobseeker?id="+jobSeekerId)
        dispatch({type:jobSeekerJobAppTypes.GET_BY_JOBSEEKER_ID,payload:response.data.data})
    } 
    catch  {
        dispatch({type:jobSeekerJobAppTypes.ERROR})
    }
}
