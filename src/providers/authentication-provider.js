import React, {useReducer} from 'react';
import AuthenticationReducer from '../reducers/authenticaton-reducer';
import { login } from '../actions/authentication-action';

const initState = {
    isAuthenticated: false,
    isAuthenticating: false,
    userInfo: null,
    access_token: null,
    fcm_token: null,
    messageError: null,
}
export const AuthenticationContext = React.createContext();
export const AuthenticationProvider = (props) => {
    const [state, dispatch] = useReducer(AuthenticationReducer, initState)
    return (
        <AuthenticationContext.Provider value={{state, login: login(dispatch)}}>
            {props.children}
        </AuthenticationContext.Provider>
    );
}