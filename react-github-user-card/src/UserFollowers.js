import React from 'react';

class UserFollowers extends React.Component {
//Don't need constructor() why? 
    // constructor(props) {
    //     super(props);
    // } 

    render() {
        return(
            <div>
            {console.log("FD in UF.js: ", this.props)}
                <h4>Followers:</h4>
                
                {this.props.followerData.map(follower => {
                return (
                    <div className="followers">
                        <img src={follower.avatar_url} alt="avatar" />
                       <p>{follower.login}</p>
                    </div>
                )
            })}
            </div>
        )
    }
}


export default UserFollowers;