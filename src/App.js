import React, {Component} from 'react';

import './App.css';

import PurchaseButton from './PurchaseButton';

class App extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Google Analytics Sample App</h2>
        <p>
          Discount: No discount, Regular price.
        </p>
        <p>
        <PurchaseButton></PurchaseButton>
        </p>
      </header>
    </div>
  )
  };
}

export default App;
