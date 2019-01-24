import axios from 'axios'
import api from '../utils/api'
 
export default{

    getAllItems : ()=>{
        return axios.get(api.items);
    }
}