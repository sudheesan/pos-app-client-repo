import orders from '../api/orders.api'


export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE';
export const UPDATE_ORDER_SUCCESS = 'UPDATE_ORDER_SUCCESS';
export const UPDATE_ORDER_FAILURE = 'UPDATE_ORDER_FAILURE';


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
      }
      )
      .catch((error) => {
        console.log(error)
        dispatch(updateOrderFailure(error))
      });
  }
}