import React from 'react';
import AuthenticationContext from './AuthenticationContext';
import LoginHOC from './LoginHOC';
import './ChildComponent.css';

const ChildComponent = props => {
    return(
        <div className="child-component">
            <h3>Child Component</h3>
            <p>User's Login Status : {props.loginStatus.toString()}</p>
            <p>Available user information : {props.userInfo.toString()}</p>
        </div>
    )
}

ChildComponent.contextType = AuthenticationContext;
export default LoginHOC(ChildComponent);