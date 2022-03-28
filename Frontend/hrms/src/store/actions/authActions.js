import Cookies from "js-cookie"
import api from "../../services/api"
import { types } from "../../services/localStorageService"
import { CookieTypes } from "../../utils/cookieTypes"
import { CallBack } from "./baseAction"
import { getUser } from "./userAction"

export const authTypes = {
    SAVE_DATA: "SAVE_DATA",
    USER_LOGOUT: "USER_LOGOUT",
}

const api_url="/auth"

export const saveAuthData = (data) => {
    return {
        type: authTypes.SAVE_DATA,
        payload: data
    }
}



export const logout=()=>(dispatch)=>{
    Cookies.remove(CookieTypes.AUTH)
    dispatch({type:authTypes.USER_LOGOUT})
}