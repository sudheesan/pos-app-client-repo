import orders from '../api/orders.api';
import ActionAlert from '../components/notification/ActionNotifier'

export const FETCH_ORDERS_START = 'FETCH_ORDERS_START';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE';
export const UPDATE_ORDER_SUCCESS = 'UPDATE_ORDER_SUCCESS';
export const UPDATE_ORDER_FAILURE = 'UPDATE_ORDER_FAILURE';
export const SET_CURRENT_ORDER_SUCCESS = 'SET_CURRENT_ORDER_SUCCESS';
export const SET_CURRENT_ORDER_FAILURE = 'SET_CURRENT_ORDER_FAILURE';
export const ADD_NEW_ORDER_START = 'ADD_NEW_ORDER_START';
export const ADD_NEW_ORDER_SUCCESS = 'ADD_NEW_ORDER_SUCCESS';
export const ADD_NEW_ORDER_FAILURE = 'ADD_NEW_ORDER_FAILURE';


export const fetchOrderStart = () => ({
  type: FETCH_ORDERS_START,
  payload: true
});

export const fetchOrdersSuccess = orders => ({
  type: FETCH_ORDERS_SUCCESS,
  payload: orders
});

export const fetchOrdersFailure = error => ({
  type: FETCH_ORDERS_FAILURE,
  payload: { error }
});

export const updateOrderSuccess = order => ({
  type: UPDATE_ORDER_SUCCESS,
  payload: order
});

export const updateOrderFailure = error => ({
  type: UPDATE_ORDER_FAILURE,
  payload: { error }
});

export const setCurrentOrderSuccess = order => ({
  type: SET_CURRENT_ORDER_SUCCESS,
  payload: order
});

export const setCurrentOrderFailure = order => ({
  type: SET_CURRENT_ORDER_FAILURE,
  payload: order
});

export const addNewOrderStart = () => ({
  type: ADD_NEW_ORDER_START,
  payload: true
});

export const addNewOrderSuccess = order => ({
  type: ADD_NEW_ORDER_SUCCESS,
  payload: order
});

export const addNewOrderFailure = order => ({
  type: ADD_NEW_ORDER_FAILURE,
  payload: order
});


export function fetchAllPendingOrders() {
  return dispatch => {
    dispatch(fetchOrderStart());
    return orders.getAllOrders()
      .then(
        response => response,
        error => {throw error})
      .then(json => {
        dispatch(fetchOrdersSuccess(json.data));
      })
      .catch(error => dispatch(fetchOrdersFailure(error)));
  };
}


export function updateOrder(order) {
  return dispatch => {
    return orders.updateCurrentOrder(order)
      .then(
        response => response,
        (error) => {throw error} )
      .then((json) => {
        dispatch(updateOrderSuccess(json.data));
        ActionAlert.createNotification({type:'success',notification:'Order updated successfully',resource:'Order'})();
        dispatch(setCurrentOrderSuccess(json.data));
        dispatch(fetchAllPendingOrders());
      }
      )
      .catch((error) => {
        dispatch(updateOrderFailure(error));
        ActionAlert.createNotification({type:'error',notification:'error while updating order',resource:'Order'})();
      });
  }
}


export function addNewOrder(order) {
  return dispatch => {
    dispatch(addNewOrderStart());
    return orders.addNewOrder(order)
      .then(
        response => response,
        (error) =>{throw error} )
      .then((json) => {
        dispatch(addNewOrderSuccess(json.data));
        ActionAlert.createNotification({type:'success',notification:'Order added successfully',resource:'Order'})();
        dispatch(setCurrentOrderSuccess(json.data));
        dispatch(fetchAllPendingOrders());
      }
      )
      .catch((error) => {
        dispatch(addNewOrderFailure(error));
        ActionAlert.createNotification({type:'warning',notification:error.response.data.message,resource:'Order'})();
      });
  }
}