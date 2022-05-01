import Cookies from "js-cookie"
import api from "../../services/api"
import Constant from "../../utils/constants"
import { CookieTypes } from "../../utils/CookieTypes"
import { CallBack } from "./baseAction"

export const employerTypes = {
    GET_EMPLOYER_START: "GET_EMPLOYER_START",
    GET_EMPLOYER_SUCCESS: "GET_EMPLOYER_SUCCESS",
    GET_EMPLOYER_ERROR: "GET_EMPLOYER_ERROR",
    GET_EMPLOYER:"GET_EMPLOYER"
}

const apiUrl="/employers"

export const getEmployer = (employerId) => async (dispatch) => {
    dispatch({ type: employerTypes.GET_EMPLOYER_START })
    try {
        const response = await api().get(apiUrl + "/getemployer?employerId=" + employerId)
        dispatch({ type: employerTypes.GET_EMPLOYER_SUCCESS, payload: response.data.data })
    } catch {
        dispatch({ type: employerTypes.GET_EMPLOYER_ERROR })
    }
}

export const updateEmployer=(employer,logo)=>async(dispatch)=>{
    if(logo){
        await api().post(apiUrl + `/uploadlogo?id=${Constant.employerId}`, logo)
    }
    return CallBack(api().put(apiUrl+"/updateemployer",employer),dispatch,getEmployer(Constant.employerId))
}

export const uploadLogo = (logo) => async (dispatch) => {
    return CallBack(api().post(apiUrl + `/uploadlogo?id=${Constant.employerId}`, logo), dispatch, getEmployer(Constant.employerId))
}

export const deleteLogo=()=>async(dispatch)=>{
    return CallBack(api().delete(apiUrl+`/deletelogo?id=${Constant.employerId}`),dispatch,getEmployer(Constant.employerId))
}

export const getEmployerByUserId=(userId)=>async (dispatch)=>{

    try {
        const response = await api().get(apiUrl + "/getemployerbyuserid?userId="+userId)
        dispatch({type:employerTypes.GET_EMPLOYER, payload:response.data.data})
        
        Cookies.set(CookieTypes.USER, JSON.stringify(response.data.data))
    }catch {

    }
}
