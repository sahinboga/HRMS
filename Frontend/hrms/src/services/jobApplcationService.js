import axios from 'axios'

export default class jobApplicationService{
    
    apply(jobApplication){
        return axios.post("http://localhost:8080/api/jobapplications/apply",jobApplication)
    }
    
    getAllByEmployerJobApplication(jobAdvertId){
        return axios.get("http://localhost:8080/api/jobapplications/getallbyjobadvert?id="+jobAdvertId)
    }
}
