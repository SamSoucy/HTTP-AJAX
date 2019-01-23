import React from 'react'


const FriendsList = props => {
    return (
      <div>
        {props.friends.map(friend => (
         <div>
           <h2 key={friend.id}>Name: {friend.name}</h2>
           <p>Age: {friend.age}</p>
           <p>Email: {friend.email}</p>
          </div>))         
        }
      </div>
    )
  }


export default FriendsList;