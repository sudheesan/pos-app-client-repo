import items from '../api/items.api'

export const FETCH_ITEMS_START = 'FETCH_ITEMS_START';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

export const fetchItemStart = () => ({
  type: FETCH_ITEMS_START,
  payload:  true 
});
export const fetchItemSuccess = items => ({
  type: FETCH_ITEMS_SUCCESS,
  payload:  items 
});

export const fetchItemsFailure = error => ({
  type: FETCH_ITEMS_FAILURE,
  payload: { error }
});

export function fetchAllItems() {
  return dispatch => {
    dispatch(fetchItemStart());
    return items.getAllItems()
      .then(
        response => response,
        error => console.log('An error occurred.', error))
      .then(json => {
        dispatch(fetchItemSuccess(json.data));
      })
      .catch(error => dispatch(fetchItemsFailure(error)));
  };
}