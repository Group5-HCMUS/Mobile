import axios from "axios";
import {
  LOGIN_SUCCESSED,
  LOGIN_REQUEST,
  LOGIN_FAILED,
} from "../global/constants/actions-constant";
import { apiLogin } from "../core/services/authentication-service";
import { apiGetProfile } from "../core/services/user-service";
import * as RootNavigation from "../core/helpers/root-navigation";
import {
  HomeChildScreen,
  HomeParentScreen,
  RootTabScreen,
  AppNavigatorScreen,
} from "../global/constants/screen-name";
import io from 'socket.io-client';
const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};
const loginSuccess = (access_token, refresh_token, userInfo) => {
  return {
    type: LOGIN_SUCCESSED,
    access_token,
    refresh_token,
    userInfo,
  };
};
const loginFailed = (messageError) => {
  return {
    type: LOGIN_FAILED,
    messageError,
  };
};
export const login = (dispatch) => (username, password) => {
  dispatch(loginRequest());
  apiLogin(username, password)
    .then((res) => {
      if (res.status === 200) {
        apiGetProfile(res.data.access_token).then((resInfo) => {
          if (resInfo.status === 200) {
            dispatch(
              loginSuccess(
                res.data.access_token,
                res.data.refresh_token,
                resInfo.data
              )
            );
            global.socket = io('https://restful-custom-api-with-jwt.herokuapp.com/');
            RootNavigation.navigate(AppNavigatorScreen);
          }
        });
      } else {
        dispatch(loginFailed("Username or password not correct"));
      }
    })
    .catch((error) => {
      dispatch(loginFailed("Username or password not correct"));
    });
};
