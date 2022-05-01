export const authTypes = {
    SET_LOGIN: "SET_LOGIN",
    USER_DATA: "USER_DATA",
}
export const setLoginData = (data) => {
    return {
        type: authTypes.SET_LOGIN,
        payload: data,
    }
}


export const setUserData = data => {
    return {
        type: authTypes.USER_DATA,
        payload: data,
    }
}