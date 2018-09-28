import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTransactions } from '../actions';
import BudgetAdd from './budget-add';
import Filter from './budget-filter';
import _ from 'lodash';

class BudgetList extends Component {

  componentDidMount() {
    this.props.getTransactions();
  }

  getBalance() {
    if(this.props.currentBalance) {
      const balance = parseFloat(this.props.currentBalance).toFixed(2);
      return <p>$ { balance }</p>;
    } else {
      return <p>No Balance</p>
    }
  }

  renderTransactions() {
    if(this.props.transactions) {
      return _.map(this.props.transactions, transaction => {

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

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='current-balance'>
            <p>Current Balance</p>
            { this.getBalance() }
          </div>
          <BudgetAdd />
          <hr />
          <Filter />
          <hr />
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
              { this.renderTransactions() }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    transactions: state.transactions.transactions,
    currentBalance: state.transactions.currentBalance
  }
}

export default connect(mapStateToProps, { getTransactions })(BudgetList);