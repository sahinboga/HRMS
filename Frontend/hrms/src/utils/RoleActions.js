import StorageService from "../services/storageService"

export default function RoleAction({admin,jobseeker,employer,noLogin}){
    if(StorageService.isAdmin()){
        return (
            admin
        )
    }
    else if(StorageService.isJobSeeker()){
        return (
            jobseeker
        )
    }
    else if(StorageService.isEmployer()){
        return (
            employer
        )
    }
    else{
        return noLogin
    }
}