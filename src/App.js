import React, { Component } from 'react'
import { Provider } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import PostItem from './components/PostItem';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <PostItem />
            <p>................................................</p>
            <Posts />
          </header>
        </div>
      </Provider>
    )
  }
}

export default App
