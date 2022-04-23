export const authTypes = {
    SET_LOGIN: "SET_LOGIN"
}
export const setLoginData = (data) => {
    return {
        type: authTypes.SET_LOGIN,
        payload: data,
    }
}