import React from 'react';
import './App.css';
import UserCard from "./UserCard";
import UserFollowers from "./UserFollowers";

class App extends React.Component {

  constructor () {
    super();


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
