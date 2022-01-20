import axios from 'axios'

export default class jobApplcationService{
    
    apply(jobApplication){
        return axios.post("http://localhost:8080/api/jobapplications/apply",jobApplication)
    }
        
}
