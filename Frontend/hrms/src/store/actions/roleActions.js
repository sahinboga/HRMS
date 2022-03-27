import api from "../../services/api";


export const roleTypes = {
    GET_ROLE_START: "GET_ROLE_START",
    GET_ROLE_SUCCESS: "GET_ROLE_SUCCESS",
    GET_ROLE_ERROR: "GET_ROLE_ERROR",
}

const api_url = "/roles"

export const getAllRoles = async (dispatch) => {
    dispatch({type: roleTypes.GET_ROLE_START})
    try {
        const response = await api().get(api_url + "/getall");
        dispatch({type: roleTypes.GET_ROLE_SUCCESS, payload: response.data.data})
    }catch {
        dispatch({type: roleTypes.GET_ROLE_ERROR})
    }
}