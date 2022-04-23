import Constant from "../utils/constants";
import { CookieTypes } from "../utils/CookieTypes";
import CookieService from "./cookieService";

export default class StorageService{

    static checkRoleWithId(id) {
        const user = CookieService.get(CookieTypes.AUTH)
        return user && user.role.id == id
    }

    static isAdmin(){
        return this.checkRoleWithId(Constant.Roles.Admin)
    }
    static isEmployer(){
        return this.checkRoleWithId(Constant.Roles.Employer)
    }
    static isJobSeeker(){
        return this.checkRoleWithId(Constant.Roles.JobSeeker)
    }
}