import Axios from "axios";
import { baseUrl,apikey } from "../helpers";
export const interceptors = ()=>{
    Axios.interceptors.request.use((config)=>{
        config.baseURL=baseUrl;
        config.params={key:apikey,...config.params}
        return config;
    },
    (error)=>{
        return Promise.reject(error)
    }
    )
}