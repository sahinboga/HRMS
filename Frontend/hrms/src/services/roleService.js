import axios from "axios"

export default class RoleService{

    getRoles(){

        return axios.get("http://localhost:8080/api/roles/getall")
    }
}