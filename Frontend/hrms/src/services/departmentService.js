import axios from "axios"
import api from "./api"

export default class DepartmentService{

    getDepartment(){

        return api().get("/departments/getall")
    }
}