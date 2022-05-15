import axios from "axios"

export default ()=>{

    return axios.create({
        baseURL:"https://kariyerim.herokuapp.com/api"
        //baseURL:"http://localhost:8080/api/"
    })
}