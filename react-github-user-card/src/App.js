import React from 'react';
import './App.css';
import UserCard from "./UserCard";
import UserFollowers from "./UserFollowers";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {},
      followerData: []
    };

  }

  //let user input git hub user name
  //const userInput = ...

  componentDidMount() {
    this.fetchUserData();
    this.fetchFollowerData();
  }

  fetchUserData = () => {
    axios.get("https://api.github.com/users/Jay-Wood")
    .then(res => {
      return res.data;
    })
    .then( userData => {
      this.setState({userData: userData})
    })
    .catch( err => console.log("catch error:", err))
  }

  fetchFollowerData = () => {
    axios.get("https://api.github.com/users/Jay-Wood/followers")
    .then(res => {
      return res.data;
    })
    .then( followerData => {
      this.setState({followerData: followerData})
      console.log("FollowerData in app", followerData)
    })
    .catch( err => console.log("catch error:", err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>GitHub User Cards</h1>
        </header>
        <div className="card-container" >
          <UserCard userData={this.state.userData} />
          <UserFollowers followerData={this.state.followerData}/>
        
        {/* Adding Followers to double check the map func is working */}
          {/* <div>
          <h2>Followers</h2>
          {this.state.followerData.map(follower => {
                return (
                       <p>{follower.login}</p>
                )
            })}
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;
