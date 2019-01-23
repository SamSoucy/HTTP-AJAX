import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './components/FriendsList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      error: ""
    };
  }


  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({
          friends: res.data,
          error: ""
        })
      })
      .catch(err => {
        this.setState({
        error: err.response.data.message
      })
      })
    }
  
    render() {
      return (
        <div className="App">
          
          <h1>Friends List!!</h1>

          {this.state.error && <h4>{this.state.error}</h4>}

          <FriendsList friends={this.state.friends} />

      </div>
    );
  }
}
export default App;
