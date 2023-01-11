import React from 'react';
import './App.css';
import SignInOut from './components/SignInOut';
import {Provider}  from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <SignInOut/>
    </div>
    </Provider>
    
  );
}

export default App;
