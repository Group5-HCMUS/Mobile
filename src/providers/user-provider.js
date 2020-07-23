import React, {useReducer} from 'react';
import UserReducer from '../reducers/user-reducer';
import { addChild } from '../actions/user-action';

const initState = {
    isAddingChild: false,
    messageAddChild: null,
}
export const UserContext = React.createContext();
export const UserProvider = (props) => {
    const [state, dispatch] = useReducer(UserReducer, initState)
    return (
        <UserContext.Provider value={{state, addChild: addChild(dispatch)}}>
            {props.children}
        </UserContext.Provider>
    );
}