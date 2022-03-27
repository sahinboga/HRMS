import Cookies from "js-cookie"
import api from "../../services/api"
import { types } from "../../services/localStorageService"
import { CookieTypes } from "../../utils/cookieTypes"
import { CallBack } from "./baseAction"
import { getUser } from "./userAction"

export const authTypes = {
    SAVE_DATA: "SAVE_DATA"
    // LOGIN_START: "LOGIN_START",
    // LOGIN_SUCCESS: "LOGIN_SUCCESS",
    // LOGIN_ERROR: "LOGIN_ERROR",
    // USER_LOGOUT: "USER_LOGOUT",

    // REGISTER_START: "REGISTER_START",
    // REGISTER_SUCCESS: "REGISTER_SUCCESS",
    // REGISTER_ERROR: "REGISTER_ERROR",
}

const api_url="/auth"

export const saveAuthData = (data) => {
    return {
        type: authTypes.SAVE_DATA,
        payload: data
    }
}

// export const login =(value)=> async(dispatch)=>{
//     dispatch({type:authTypes.LOGIN_START})
//     try {
//         const response= CallBack(api().post(api_url+"/login",value), dispatch, () => {})
//         dispatch({type:authTypes.LOGIN_SUCCESS,payload:response.data.data})
//         Cookies.set(CookieTypes.AUTH, JSON.stringify(response.data.data))
//         localStorage.setItem(types.USER, JSON.stringify(response.data.data))

//         if(response.data.data.role.roleId==3){
//             await dispatch(getUser(response.data.data.userId))
//         }

//         setTimeout(()=>{
//             document.location.href="/dashboard"
//         },100)
//     } catch  {
//         dispatch({type: authTypes.LOGIN_ERROR})
//     }

// }

// export const registerForEmployer=(data)=>async(dispatch)=>{
//     return CallBack(api().post(api_url+"/registerforemployer",data),dispatch,function(){})
// }


// export const registerForJobSeeker=(data)=>async(dispatch)=>{
//     return CallBack(api().post(api_url+"/registerforjobseeker",data),dispatch,function(){})
// }

// export const logout=()=>(dispatch)=>{
//     Cookies.remove(CookieTypes.AUTH)
//     localStorage.removeItem(types.USER)
//     dispatch({type:authTypes.USER_LOGOUT})
// }