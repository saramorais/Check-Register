import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTransaction, getTransactions } from '../actions';

class BudgetAdd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      transactiondate: '',
      description: '',
      category: '',
      amount: '',
      type: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    this.setState({ [e.target.name]: '' });
    const that = this;
    this.props.addTransaction(this.state).then(
      function getTrans() {
        that.props.getTransactions();
      }
    );
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className='container'>
        <div className='row budget-add'>
          <p>Add a New Transaction</p>
          <div className='form-row'>
            <form onSubmit={this.handleSubmit} className='form-group'>
              <input name='transactiondate' type='date' onChange={this.handleChange} placeholder='Date' className='col-md-2' required />
              <input name='description' type='text' onChange={this.handleChange} placeholder='Description' className='col-md-2' required />
              <input name='amount' type="number" step="0.01" onChange={this.handleChange} placeholder='Amount' className='col-md-2' required />
              <select name='category' type='text' onChange={this.handleChange} className='col-md-2'>
                <option>Select Category</option>
                <option>Dining</option>
                <option>Entertainment</option>
                <option>Fee</option>
                <option>Gas/Car</option>
                <option>Healthcare</option>
                <option>Income</option>
                <option>Insurance</option>
                <option>Internet</option>
                <option>Merchandise</option>
                <option>Other</option>
                <option>Personal Care</option>
                <option>Phone/Cable</option>
                <option>Rent/Mortgage</option>
                <option>Services</option>
                <option>Travel</option>
                <option>Utilities</option>
              </select>
              <select name='type' type='text' onChange={this.handleChange} className='col-md-2'>
                <option>Select Type</option>
                <option>Deposit</option>
                <option>Withdraw</option>
              </select>
              <button type='submit' className='btn col-md-2'>ADD</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { transactions: state }
}

export default connect(mapStateToProps, { addTransaction, getTransactions })(BudgetAdd);
