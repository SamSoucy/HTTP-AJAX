import React, { Component } from 'react';
import axios from "axios";
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      error: ""
    };
}

componentDidMout() {
  axios
    .get("http://localhost:5000/friends")
    .then(res => {
      this.setState({
        friends: res.data,
        error: ""
      });
    })
    .catch(err => {
      this.setState({ error: err });
});
    
}

  render() {
    return (
      <div className="App">
                
        {this.state.error && <h4>{this.state.error}</h4>}

        {this.state.friends.map(friend =>
          <div>
            <h1>{friend.name}</h1>
            <p><span>Age:</span> {friend.age}</p>
            <p><span>Email:</span> {friend.email}</p>
          </div>)}

       </div>
    );
  }
}

export default App;
