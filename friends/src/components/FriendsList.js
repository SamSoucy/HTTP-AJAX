import React from 'react';
import '../App.css';


const FriendsList = props => {
    return (
      <div>
        {props.friends.map(friend => (
         <div>
           <h2 key={friend.id}>Name: {friend.name}</h2>
           <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            <button OnClick={e=> props.deleteFriend(e, friend.id)} className="md-button form-button">Delete Friend</button>
          </div>))         
        }
      </div>
    )
  }


export default FriendsList;