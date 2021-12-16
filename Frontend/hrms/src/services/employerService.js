import axios from "axios"

export default class EmployerService{

    getEmployerById(id){

        return axios.get("http://localhost:8080/api/employers/getemployer?employerId="+id)
    }
}