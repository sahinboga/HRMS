import api from "./api";

const api_url = "auth/"
class AuthService {
    login(data) {
        return api().post(api_url+"login", data)
    }
    registerJobSekeer(data) {
        return api().post(api_url+"registerforjobseeker", data)
    }

    registerEmployer(data){
        return api().post(api_url+"registerforemployer",data)
    }
}

export default new AuthService()