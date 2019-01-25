import React, { Component } from 'react';
import axios from 'axios';
// import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink,} from 'react-router-dom';
import './App.css';

import FriendsList from './components/FriendsList'
import FriendForm from "./components/FriendForm";

const baseUrl = "http://localhost:5000";

const clearedFriend = {
  name: '',
  age: '',
  email: ''
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend: clearedFriend,
    };
  }


  componentDidMount() {
    axios
      .get(`${baseUrl}/friends`)
      .then(res => {
        this.setState({
          friends: res.data,
          
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  handleChanges = e => {
    e.preventDefault();
    e.persist();
    this.setState(prevState => {
      return {
        friend: {
          ...prevState.friend,
          [e.target.name]: e.target.value
        }
      }
    })
  }

  addFriend = () => {
    axios
      .post(`${baseUrl}/friends`, this.state.friend)
      .then(res => {
        this.setState({ friends: res.data })
      })
      .catch(err => console.log(err));
  };

  deleteFriend = (e, friendId) => {
    e.preventDefault();
    axios
      .delete(`${baseUrl}/friends/${friendId}`)
    .then(res => {
      this.setState({ friends: res.data });
      this.props.history.push("/");
    });
  };

  
  
  render() {
    return (
      <div className="App">
        
          <h1>Friends List!!</h1>
        <div className="nav-links">
          
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/friend-form">
          {this.state.isUpdating ? "Update" : "Add"} Friend
        </NavLink>
        </div>
        
        
        <Route 
          exact
          path="/"
          render={props =>
            <FriendsList
              {...props}
              deleteFriend={this.state.deleteFriend}
              friends={this.state.friends} />}
               />
        
        <Route
        exact
          path="/friend-form"
          render={props =>
            <FriendForm
              {...props}
              addFriend={this.state.addFriend}
              friend={this.state.friend}
              handleChanges={this.state.handleChanges} />}
        />
        </div>
    );
  }
}
        
        
  

    
    export default App;
