import React from 'react';
import './styles/App.css';
import AddRecipe from './components/AddRecipe';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AddRecipe/>
      </div>
    );
  }
}


