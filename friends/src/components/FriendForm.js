import React from "react";
import '../App.css'

function FriendForm(props) {
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     if (props.isUpdating) {
    //         props.updateFriend();
    //     } else {
    //         props.addFriend();
    //     }
    // }
      
    
    return (
        <div>
            <h2><strong>Add New Friend!!</strong></h2>
        <form onSubmit={props.handleChanges}>
            <input
                type="text"
                name="name"
                value={props.friend.name}
                placeholder="Name"
                onChange={props.handleChanges}
                />
                <div className="baseline" />
                
                <input
                type="number"
                name="age"
                value={props.friend.age}
                placeholder="Age"
                onChange={props.handleChanges}
                />
                <div className="baseline" />
                
                <input
                type="text"
                name="email"
                value={props.friend.email}
                placeholder="email"
                onChange={props.handleChanges}
                />
                <div className="baseline" />
                <button type="submit" className="md-button form-button">
                    {props.isUpdating ? 'Update friend' :  "Add new Friend"}
                </button>
        
        </form>
        </div>
    );
    }

export default FriendForm;
