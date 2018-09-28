import { combineReducers } from 'redux';

import transactionsReducer from './reducer-transactions';

export default combineReducers({
  transactions: transactionsReducer
});