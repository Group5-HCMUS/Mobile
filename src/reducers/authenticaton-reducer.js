import React from "react";
import * as ActionsConstant from "../global/constants/actions-constant";
const AuthenticationReducer = (prevState, action) => {
  switch (action.type) {
    case ActionsConstant.LOGIN_REQUEST: {
      return {
        ...prevState,
        isAuthenticating: true,
      };
    }
    case ActionsConstant.LOGIN_SUCCESSED: {
      return {
        ...prevState,
        isAuthenticated: true,
        isAuthenticating: false,
        access_token: action.access_token,
        refresh_token: action.refresh_token,
        userInfo: action.userInfo
      };
    }
    case ActionsConstant.LOGIN_FAILED: {
      return {
        ...prevState,
        isAuthenticated: false,
        isAuthenticating: false,
        messageError: action.messageError
      };
    }
    default: {
      throw new Error();
    }
  }
};

export default AuthenticationReducer;
