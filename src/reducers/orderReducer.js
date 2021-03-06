import { FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAILURE, UPDATE_ORDER_SUCCESS, UPDATE_ORDER_FAILURE, SET_CURRENT_ORDER_SUCCESS, SET_CURRENT_ORDER_FAILURE, ADD_NEW_ORDER_SUCCESS, ADD_NEW_ORDER_FAILURE ,FETCH_ORDERS_START} from '../actions/orderAction'
const intialState = {
    oders: [],
    currentOrder: {},
    updateNotification: {},
    isLoading :true
}
const orderReducer = (state = intialState, action) => {
    switch (action.type) {
        case FETCH_ORDERS_START:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                isLoading:action.payload
            }
        case FETCH_ORDERS_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                orders: action.payload,
                isLoading:false
            }

        case FETCH_ORDERS_FAILURE:
            // The request failed. It's done. So set loading to "false".
            // Save the error, so we can display it somewhere.
            // Since it failed, we don't have items to display anymore, so set `items` empty.
            //
            // This is all up to you and your app though:
            // maybe you want to keep the items around!
            // Do whatever seems right for your use case.
            return {
                ...state,
                isLoading:false,
                error: action.payload.error,
            };
        case UPDATE_ORDER_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                uodatedOrder: action.payload
            };

        case UPDATE_ORDER_FAILURE:

            return {
                ...state
            }

        case SET_CURRENT_ORDER_SUCCESS:

            return {
                ...state,
                currentOrder: action.payload
            }

        case SET_CURRENT_ORDER_FAILURE:

            return action.payload;

        case ADD_NEW_ORDER_SUCCESS:

            return {
                ...state,
                currentOrder: action.payload
            }

        case ADD_NEW_ORDER_FAILURE:

            return {
                ...state
            }


        default:
            return state;
    }
}
export default orderReducer;

