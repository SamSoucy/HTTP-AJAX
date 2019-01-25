import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import './App.css';

import FriendsList from './components/FriendsList'
import FriendForm from "./components/FriendForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: "",
        age: "",
        email: "",
      }
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
  
  handleChanges = e => {
    e.persist();
    this.setState(prevState => {
      return {
        newFriend: {
          ...prevState.newFriend,
          [e.target.name]: e.target.value
        }
      }
    })
  }
  
  render() {
    return (
      <div className="App">
        
          <h1>Friends List!!</h1>
        {this.state.error && <h4>{this.state.error}</h4>}
        
          <FriendsList friends={this.state.friends} />
          <FriendForm newFriend={this.state.newFriend}
            handleChanges={this.handleChanges} 
            addFriend={this.addFriend}/>
        
        {/* <Route
          exact
          path="/friend-form"
          render={props =>
            <FriendForm
              {...props}
              addfriend={this.addfriend}
              newFriend={this.state.newFriend} 
              handleChanges={this.state.handleChanges} />}
        /> */}
        </div>
    );
  }
}
        
        
  

    
    export default App;
