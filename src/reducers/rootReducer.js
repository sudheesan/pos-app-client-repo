import { combineReducers } from 'redux';
import orderReducer from './orderReducer';
import itemReducer from './itemsReducer';
import loginReducer from './loginReducer';


export const reducers = combineReducers({
    orderReducer,itemReducer,loginReducer
});