import React from 'react';

class UserCard extends React.Component {

    render() {
        return (
            <div className="user-card"> 
                <h3>{this.props.userData.name}</h3>
                <img src={this.props.userData.avatar_url} alt="avatar"></img>
                <p>Github Handle: {this.props.userData.login}</p>
                <p> Followers: {this.props.userData.followers} </p>
            </div>
        )
    }
}


export default UserCard;