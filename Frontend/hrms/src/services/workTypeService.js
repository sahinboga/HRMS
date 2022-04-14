import axios from "axios";
import api from "./api";

export default class WorkTypeService{

    getWorkType(){
        return api().get("/worktypes/getall")
    }
}