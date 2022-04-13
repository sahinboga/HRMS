import axios from "axios"
import api from "./api"

export default class LanguageService{

    getLanguage(){

        return api().get("/languages/getall")
    }
}