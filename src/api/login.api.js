import axios from 'axios'
import api from '../utils/api'
 
export default{

    login : (credentials)=>{
        return axios.post(api.login,{ withCredentials: true,data:credentials});
    }
};