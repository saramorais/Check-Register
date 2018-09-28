import { ADD_TRANSACTION, GET_TRANSACTIONS, FILTER } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case GET_TRANSACTIONS:
      return {
        transactions: action.payload['data'],
        currentBalance: action.payload['data'][0]['balance']
      };
    case FILTER:
      return {
        transactions:action.payload['data'],
        currentBalance: state.currentBalance
      };
    case ADD_TRANSACTION:
      return state;
    default:
      return state;
  }
}