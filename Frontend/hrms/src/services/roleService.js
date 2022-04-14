import api from "./api"

export default class RoleService{

    getRoles(){

        return api().get("/roles/getall")
    }
}