import axios from 'axios'
import api from '../utils/api'
 
export default{

    getAllOrders : ()=>{
        return axios.get(api.orders);
    },
    updateCurrentOrder : (order)=>{
        return axios.put(api.orders+"/"+order._id,order)
        
    },
    addNewOrder :(order)=>{
        return axios.post(api.orders, order);
    }
}