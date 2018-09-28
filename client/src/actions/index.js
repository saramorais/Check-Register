import axios from 'axios';

export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
export const FILTER = 'FILTER';

export function getTransactions() {
  const request = axios.get('/api/budget');
  return {
    type: GET_TRANSACTIONS,
    payload: request
  }
}

export function addTransaction(data) {
  const request = axios({
    method: 'post',
    url: '/api/budget',
    data: {
      transactiondate: data.transactiondate,
      description: data.description,
      category: data.category,
      amount: data.amount,
      type: data.type
    }
  });
  return {
    type: ADD_TRANSACTION,
    payload: request
  }
}

export function filter(term) {
  const request = axios.get(`/api/filter/${term}`);
  return {
    type: FILTER,
    payload: request
  }
}