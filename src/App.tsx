import React from 'react';
import './App.css';
import {Provider}  from 'react-redux';
import store from './store';
import Dash from './components/Dash';
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Dash/>
    </div>
    </Provider>
    
  );
}

export default App;
