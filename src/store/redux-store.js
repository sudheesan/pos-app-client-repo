import { createStore,applyMiddleware } from 'redux';
import orderReducer from "../reducers/orderReducer"
import thunk from "redux-thunk"
const store = createStore(orderReducer,applyMiddleware(thunk));

export default store;