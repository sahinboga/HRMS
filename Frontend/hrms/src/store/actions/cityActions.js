import api from "../../services/api"
export const cityTypes={
    
    GET_CITY_START:"GET_CITY_START",
    GET_CITY_SUCCESS:"GET_CITY_SUCCESS",
    GET_CITY_ERROR: "GET_CITY_ERROR"
}

const apiUrl="/cities"

export const getAllCity=async (dispatch)=>{

    dispatch({type:cityTypes.GET_CITY_START})
    try {
        const response=await api().get(apiUrl+"/getall")
        dispatch({type:cityTypes.GET_CITY_SUCCESS,payload:response.data.data})
    } catch  {
        dispatch({type:cityTypes.GET_CITY_ERROR})
    }
}