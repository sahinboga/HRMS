import api from "../../services/api"
import { CallBack } from "./baseAction"

export const jobApplicationTypes={
    GET_JOBAPPLICATION_START:"GET_JOBAPPLICATION_START",
    GET_JOBAPPLICATION_SUCCESS:"GET_JOBAPPLICATION_SUCCESS",
    GET_JOBAPPLICATION_ERROR:"GET_JOBAPPLICATION_ERROR",
}

const apiUrl="/jobapplications"

export const apply=(jobApplication)=>async(dispatch)=>{
    console.log(jobApplication)
    CallBack(api().post(apiUrl+"/apply",jobApplication),dispatch,()=>{})
} 

