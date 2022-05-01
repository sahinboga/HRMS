import axios from "axios"
import api from "./api"

export default class EmployerService{

    getEmployerById(id){

        return api().get("/employers/getemployer?employerId="+id)
    }

    getEmployerByUserId(userId){

        return api().get("/employers/getemployerbyuserid?userId="+userId)
    }
}