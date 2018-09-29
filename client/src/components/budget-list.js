import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTransactions } from '../actions';
import BudgetAdd from './budget-add';
import Filter from './budget-filter';
import Budget from './budget';

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
      return <Budget transactions={this.props.transactions} />
    } else {
      return <p>No Transactions Found</p>
    }
  }

  render() {
    return (
      <div>
        <div className='current-balance'>
          <div className='balance-box'>
            <p>Current Balance</p>
            { this.getBalance() }
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <BudgetAdd />
            <hr />
            <Filter />
            <hr />
            { this.renderTransactions() }
          </div>
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