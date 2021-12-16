import Constant from "../utils/constants";

export default class StorageService{
    static isAdmin(){
        return Constant.UserRole==Constant.Roles.Admin
    }
    static isEmployer(){
        return Constant.UserRole==Constant.Roles.Employer
    }
    static isJobSeeker(){
        return Constant.UserRole==Constant.Roles.JobSeeker
    }
}