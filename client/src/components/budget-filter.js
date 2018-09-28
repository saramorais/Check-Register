import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filter, getTransactions } from '../actions';

class Filter extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }

  handleChange(e) {
    const searchTerm = e.target.value;
    this.props.filter(searchTerm);
  }

  clearFilter() {
    this.props.getTransactions();
  }

  render() {
    return (
      <div className='row'>
        <div className='col-sm-4 clear'>
          <p onClick={this.clearFilter}>All Transactions</p>
        </div>
        <div className='col-sm-4'>
          <p className='inline'>Filter By Category</p>
          <select name='category' type='text' onChange={this.handleChange}>
            <option>Select</option>
            <option>Dining</option>
            <option>Entertainment</option>
            <option>Fee</option>
            <option>Gas/Car</option>
            <option>Healthcare</option>
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
        </div>
        <div className='col-sm-4'>
          <p className='inline'>Filter By Type</p>
          <select name='type' type='text' onChange={this.handleChange}>
            <option>Select</option>
            <option>Deposit</option>
            <option>Withdraw</option>
          </select>
        </div>
      </div>
    )
  }
}


export default connect(null, { filter, getTransactions })(Filter);