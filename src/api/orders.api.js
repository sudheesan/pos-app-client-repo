import axios from 'axios'
import api from '../utils/api'
import cookies from '../utils/cookie.util'


export default{

    getAllOrders : ()=>{
        return axios.get(api.orders,{headers:{'x-auth-token': cookies.getCookie("token")}});
    },
    updateCurrentOrder : (order)=>{
        return axios.put(api.orders+"/"+order._id,order,{headers:{'x-auth-token': cookies.getCookie("token")}})
        
    },
    addNewOrder :(order)=>{
        return axios.post(api.orders, order,{headers:{'x-auth-token': cookies.getCookie("token")}});
    }
}