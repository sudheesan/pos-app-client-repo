import {FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_FAILURE} from  '../actions/getAllPendingOrdersAction'

const orderReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            console.log(action);
            return action.payload;
            
           
        case FETCH_PRODUCTS_FAILURE:
            // The request failed. It's done. So set loading to "false".
            // Save the error, so we can display it somewhere.
            // Since it failed, we don't have items to display anymore, so set `items` empty.
            //
            // This is all up to you and your app though:
            // maybe you want to keep the items around!
            // Do whatever seems right for your use case.
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                orders:action.payload.orders
            };
        default:
            return state;
    }
}
export default orderReducer;

