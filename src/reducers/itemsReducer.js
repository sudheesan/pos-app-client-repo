import { FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE, FETCH_ITEMS_START } from '../actions/getItemAction'
const initialState = {
    items:[],
    isLoading:false
}
const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEMS_START:
            // All done: set loading "true".
           return  {
                ...state,
                isLoading:action.payload
            }
        case FETCH_ITEMS_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
               ...state,
                items:action.payload,
                isLoading:false
            }

        case FETCH_ITEMS_FAILURE:
            // The request failed. It's done. So set loading to "false".
            // Save the error, so we can display it somewhere.
            // Since it failed, we don't have items to display anymore, so set `items` empty.
            //
            // This is all up to you and your app though:
            // maybe you want to keep the items around!
            // Do whatever seems right for your use case.
            return {
                ...state,
                isLoadingloading: false,
                error: action.payload.error,
                items: action.payload
            };
        default:
            return state;
    }
}
export default itemReducer;

