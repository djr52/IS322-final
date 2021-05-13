import { combineReducers } from 'redux';

import accountReducer from './accountReducer';
import transactionReducer from "./transactionReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
    accounts: accountReducer,
    transactions: transactionReducer,
    errors: errorReducer
});