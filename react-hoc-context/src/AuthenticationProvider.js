import AuthenticationContext from './AuthenticationContext';
import React from 'react';

const AuthenticationProvider = props => {
    return(
        <AuthenticationContext.Provider value={{loginStatus:true, userInfo:"ToTheNew"}}>
            {props.children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationProvider;