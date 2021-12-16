import api from "../../services/api"
import { CallBack } from "./baseAction"
import Constant from "../../utils/constants"

export const resumeTypes = {
    GET_RESUME_START: "GET_RESUME_START",
    GET_RESUME_SUCCESS: "GET_RESUME_SUCCESS",
    GET_RESUME_ERROR: "GET_RESUME_ERROR"
}

const apiUrl = "/resumes"

export const getResume = (jobSeekerId) => async (dispatch) => {
    dispatch({ type: resumeTypes.GET_RESUME_START })
    try {
        const response = await api().get(apiUrl + "/getresume?jsId=" + jobSeekerId)
        dispatch({ type: resumeTypes.GET_RESUME_SUCCESS, payload: response.data.data })
    } catch {
        dispatch({ type: resumeTypes.GET_RESUME_ERROR })
    }
}

export const updateResume = (resume, photo) => async (dispatch) => {
    if (photo){

        const response= await api().post(apiUrl + `/uploadphoto?id=${Constant.JobSeekerId}`, photo)
        console.log(response.data)
    }
    return CallBack(api().put(apiUrl + "/update", resume), dispatch, getResume(Constant.JobSeekerId))
}

/*profil işlemi */
export const uploadPhoto = (photo) => async (dispatch) => {
    return CallBack(api().post(apiUrl + `/uploadphoto?id=${Constant.JobSeekerId}`, photo), dispatch, getResume(Constant.JobSeekerId))
}

export const deletePhoto=()=>async(dispatch)=>{
    return CallBack(api().delete(apiUrl+`/deletephoto?id=${Constant.JobSeekerId}`),dispatch,getResume(Constant.JobSeekerId))
}
/*Deneyim İşlemleri*/
const exp_api = "/experiences"
export const updateExperience = (exp) => async (dispatch) => {

    return CallBack(api().put(exp_api + "/update", exp), dispatch, getResume(Constant.JobSeekerId))
}

export const addExperience = (exp) => async (dispatch) => {
    return CallBack(api().post(exp_api + "/add", exp), dispatch, getResume(Constant.JobSeekerId))
}

export const deleteExperience = (expId) => async (dispatch) => {
    return CallBack(api().delete(exp_api + "/delete", { data: { experienceId: expId } }), dispatch, getResume(Constant.JobSeekerId))
}

/*Eğitim İşlemleri*/
const edu_api = "/educations"
export const addEducation = (edu) => async (dispatch) => {
    return CallBack(api().post(edu_api + "/add", edu), dispatch, getResume(Constant.JobSeekerId))
}
export const updateEducation = (edu) => async (dispatch) => {
    return CallBack(api().put(edu_api + "/update", edu), dispatch, getResume(Constant.JobSeekerId))
}

export const deleteEducation = (eduId) => async (dispatch) => {
    return CallBack(api().delete(edu_api + "/delete", { data: { educationId: eduId } }), dispatch, getResume(Constant.JobSeekerId))
}

/*Dil İşlemleri*/
const lang_api = "/userlanguages"
export const addLanguage = (lang) => async (dispatch) => {
    return CallBack(api().post(lang_api + "/add", lang), dispatch, getResume(Constant.JobSeekerId))
}
export const updateLanguage = (lang) => async (dispatch) => {
    return CallBack(api().put(lang_api + "/update", lang), dispatch, getResume(Constant.JobSeekerId))
}

export const deleteLanguage = (langId) => async (dispatch) => {
    return CallBack(api().delete(lang_api + "/delete", { data: { userLanguageid: langId } }), dispatch, getResume(Constant.JobSeekerId))
}

/*Yetenek İşlemleri*/
const skill_api = "/userskills"
export const updateSkill = (skill) => async (dispatch) => {
    return CallBack(api().put(skill_api + "/update", skill), dispatch, getResume(Constant.JobSeekerId))
}
