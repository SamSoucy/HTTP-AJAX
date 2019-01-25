import React from "react";

function FriendForm(props) {
    return (
        <div>
            <h2><strong>Add New Friend!!</strong></h2>
        <form onSubmit={props.submit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={props.newFriend.name}
                onChange={props.handleChanges}
                />
                <div className="baseline" />
                
                <input
                type="number"
                name="age"
                placeholder="Age"
                value={props.newFriend.age}
                onChange={props.handleChanges}
                />
                <div className="baseline" />
                
                <input
                type="text"
                name="email"
                placeholder="email"
                value={props.newFriend.email}
                onChange={props.handleChanges}
                />
                <div className="baseline"/>
        
        </form>
        </div>
    );
}

export default FriendForm;
