import axios from "axios"
import api from "./api"

export default class SkillService{

    getSkill(){

        return api().get("/skills/getall")
    }
}