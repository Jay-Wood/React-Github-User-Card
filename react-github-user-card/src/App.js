import React from 'react';
import './App.css';
import UserCard from "./UserCard";
import UserFollowers from "./UserFollowers";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {}
    };
  }

  //let user input git hub user name
  //const userInput = ...

  componentDidMount() {
    this.fetchUserData();
  }

  fetchUserData = () => {
    axios.get("https://api.github.com/users/Jay-Wood")
    .then(res => {
      console.log(res.data)
      return res.data;
    })
    .then( userData => this.setState({userData: userData})
    )
    .catch( err => console.log("catch error:", err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>GitHub User Cards</h1>
        </header>
        <div className="card-container">
          <UserCard />
          <UserFollowers />
        </div>
      </div>
    );
  }
}

export default App;
