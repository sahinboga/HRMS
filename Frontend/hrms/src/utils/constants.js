import CookieService from "../services/cookieService"
import { CookieTypes } from "./CookieTypes"

export default class Constant{

    static getUserId() {
        const user = CookieService.get(CookieTypes.AUTH)
        if(user) {
            return user.userId
        }
        return -1

    }
    
    static employerId=this.getUserId()
    static JobSeekerId=this.getUserId()
    static UserRole=this.getUserId()
    static Roles={
        Admin:1,
        Employer:2,
        JobSeeker:3
    }

    static RoleBasedRoute = {
        Admin: "/admin-dashboard",
        JobSeeker: "/jobseeker",
        Employer: "/employer"
    }
}

