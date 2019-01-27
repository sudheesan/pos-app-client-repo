import orders from '../api/orders.api'


export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE';
export const UPDATE_ORDER_SUCCESS = 'UPDATE_ORDER_SUCCESS';
export const UPDATE_ORDER_FAILURE = 'UPDATE_ORDER_FAILURE';
export const SET_CURRENT_ORDER_SUCCESS = 'SET_CURRENT_ORDER_SUCCESS';
export const SET_CURRENT_ORDER_FAILURE = 'SET_CURRENT_ORDER_FAILURE';
export const ADD_NEW_ORDER_SUCCESS = 'ADD_NEW_ORDER_SUCCESS';
export const ADD_NEW_ORDER_FAILURE = 'ADD_NEW_ORDER_FAILURE';


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
    return orders.getAllOrders()
      .then(
        response => response,
        error => console.log('An error occurred.', error))
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
        error => console.log('An error occurred.', error))
      .then((json) => {
        dispatch(updateOrderSuccess(json.data));
        dispatch(fetchAllPendingOrders());
      }
      )
      .catch((error) => {
        console.log(error)
        dispatch(updateOrderFailure(error))
      });
  }
}


export function addNewOrder(order) {
  return dispatch => {
    return orders.addNewOrder(order)
      .then(
        response => response,
        error => console.log('An error occurred.', error))
      .then((json) => {
        dispatch(addNewOrderSuccess(json.data));
        dispatch(setCurrentOrderSuccess(json.data));
        dispatch(fetchAllPendingOrders());
      }
      )
      .catch((error) => {
        console.log(error)
        dispatch(addNewOrderFailure(error))
      });
  }
}