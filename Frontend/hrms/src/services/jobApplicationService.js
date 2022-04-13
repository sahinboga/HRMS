import axios from 'axios'
import api from './api'

const api_url="/jobapplications"
export default class jobApplicationService{
    
    apply(jobApplication){
        return api().post(api_url+"/apply",jobApplication)
    }
    
    getAllByEmployerJobApplication(jobAdvertId){
        return api().get(api_url+"/getallbyjobadvert?id="+jobAdvertId)
    }
}
