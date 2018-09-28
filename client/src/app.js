import React, { Component } from 'react';
import BudgetList from './components/budget-list';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>BudgetLy</h1>
        <BudgetList />
      </div>
    );
  }
}

export default App;
