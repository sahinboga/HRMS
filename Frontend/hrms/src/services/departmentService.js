import axios from "axios"

export default class DepartmentService{

    getDepartment(){

        return axios.get("http://localhost:8080/api/departments/getall")
    }
}