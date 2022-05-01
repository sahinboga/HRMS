import api from "./api"

export default class JobSeekerService{

    getJobSeekerByUserId(userId){

        return api().get("/jobseekers/getjobseekerbyuserid?userId="+userId)
    }
}