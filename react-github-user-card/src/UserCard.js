import React from 'react';

class UserCard extends React.Component {

    render() {
        return (
            <div className="user-card"> 
                <h3>{this.props.userData.name}</h3>
                <img src={this.props.userData.avatar_url}></img>
                <p>Github Handle: {this.props.userData.login}</p>
                <p> Followers: {this.props.userData.followers} </p>
                {console.log("this.props in UserCard: ", this.props.userData)}
            </div>
        )
    }
}


export default UserCard;