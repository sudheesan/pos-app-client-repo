import { combineReducers } from 'redux';
import orderReducer from './orderReducer';
import itemReducer from './itemsReducer';


export const reducers = combineReducers({
    orderReducer,itemReducer
});