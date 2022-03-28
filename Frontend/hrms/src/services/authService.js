import axios from "axios";
import Cookies from "js-cookie";
import { CookieTypes } from "../utils/cookieTypes";
import api from "./api";

const api_url = "/auth"

export default class AuthService{
    login(user) {
        return api().post(api_url +"/login", user)
    }

    registerJobSekeer(jobSeeker){
        return api().post(api_url+"/registerforjobseeker",jobSeeker)
    }

    registerEmployer(employer){
        return api().post(api_url+"/registerforemployer",employer)
    }

    static getAuth() {
        let auth = Cookies.get(CookieTypes.AUTH)
        if(!auth) {
            return null
        }
        return JSON.parse(auth)
    }

    static getUser() {
        let user = Cookies.get(CookieTypes.USER)
        if(!user) {
            return null
        }
        return JSON.parse(user)
    }

    static isAdmin() {
        return this.getRole() == 1
    }
    
    static isEmployer() {
        return this.getRole() == 2
    }

    static isJobSeeker() {
        return this.getRole() == 3
    }

    static getRole() {
        let auth = this.getAuth()
        if(!!auth) {
            return auth?.role?.id
        }
        return -1
    }
}