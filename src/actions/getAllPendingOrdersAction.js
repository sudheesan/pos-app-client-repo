import orders from '../api/orders.api'


export const FETCH_PRODUCTS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_ORDERS_FAILURE';


export const fetchOrdersSuccess = orders => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload:  orders 
});

export const fetchOrdersFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
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