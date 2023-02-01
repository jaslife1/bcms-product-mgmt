import logo from '../logo.svg';
import '../styles/App.css';
import React, {Component} from 'react';
import ProductListPage from './ProductListPage';

class App extends Component {

  render() {
    return (
      <div>
        <ProductListPage />
      </div>
    );
  }
}

export default App;
