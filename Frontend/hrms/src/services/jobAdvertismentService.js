import axios from "axios";

 export default class JobAdvertisementService{
      
    getFilterAndPage(pageNo,pageSize,filter){
        return axios.post(`http://localhost:8080/api/jobadvertisements/getfilteringandpage?pageNo=${pageNo}&pageSize=${pageSize}`,filter)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/jobadvertisements/getjobadvertisement?jobAdvertisementId="+id)
    }
 }