import React, { Component } from 'react';
import BudgetList from './components/budget-list';
import './app.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className='title'>
          <h1>BudgetLy</h1>
        </div>
        <BudgetList />
      </div>
    );
  }
}

export default App;
