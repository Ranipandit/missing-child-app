import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome {this.props.location.state.firstname} {this.props.location.state.lastname} to home page</h1>
      </div>
    );
  }
}

export default Home;
