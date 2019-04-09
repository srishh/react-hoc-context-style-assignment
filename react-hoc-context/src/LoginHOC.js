import React, { Component } from 'react';
import AuthenticationContext from './AuthenticationContext';

const loginHOC = (WrappedComponent) => {
    class LoginHOC extends Component {
        static contextType = AuthenticationContext;
        render() {
            return(
                <WrappedComponent {...this.props} type={this.context.type} loginStatus={this.context.loginStatus} userInfo={this.context.userInfo}/>
            );
        }
    }
    return LoginHOC; 
}

export default loginHOC;
