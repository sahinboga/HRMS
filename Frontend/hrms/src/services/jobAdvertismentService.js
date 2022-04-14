import axios from "axios";
import api from "./api";

const api_url = "/jobadvertisements"
 export default class JobAdvertisementService{
      
    getFilterAndPage(pageNo,pageSize,filter){
        return api().post(api_url+`/getfilteringandpage?pageNo=${pageNo}&pageSize=${pageSize}`,filter)
    }

    getById(id){
        return api().get(api_url+"/getjobadvertisement?jobAdvertisementId="+id)
    }
 }