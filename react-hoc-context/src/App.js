import React, { Component } from 'react';
import './App.css';
import AuthenticationProvider from './AuthenticationProvider';
import ChildComponent from './ChildComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AuthenticationProvider>
				<div>
					<h3>Parent Component sending "loginStatus" and "userInfo" props through Context : </h3>
					<br/>
					<ChildComponent/>
				</div>
			  </AuthenticationProvider>
      </div>
    );
  }
}

export default App;
