import React from 'react';
import _ from 'lodash';

const Budget = props => {

  function renderTransactions() {
    if(props.transactions) {
      return _.map(props.transactions, transaction => {

        const date = new Date(transaction.transactiondate);
        const formatedDate = date.toLocaleDateString("en-US");

        return (
          <tr key={transaction.id}>
            <th scope="row">{formatedDate}</th>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>$ {parseFloat(transaction.amount).toFixed(2)}</td>
            <td>$ {parseFloat(transaction.balance).toFixed(2)}</td>
          </tr>
        )
      });
    } else {
      return <tr><th>No Transactions Found</th></tr>
    }
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Description</th>
          <th scope="col">Category</th>
          <th scope="col">Amount</th>
          <th scope="col">Balance</th>
        </tr>
      </thead>
      <tbody>
        { renderTransactions() }
      </tbody>
    </table>
 
  )

}

export default Budget;