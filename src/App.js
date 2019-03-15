import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Home from './components/home/Home.jsx'
import MainLayout from './components/layout/MainLayout.jsx';

class App extends Component {
  render() {
    return (
      <MainLayout>
        <Home></Home>
      </MainLayout>

    );
  }
}

export default App;
