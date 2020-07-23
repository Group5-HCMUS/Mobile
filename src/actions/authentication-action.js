import axios from "axios";
import {
  LOGIN_SUCCESSED,
  LOGIN_REQUEST,
  LOGIN_FAILED,
} from "../global/constants/actions-constant";
import { apiLogin } from "../core/services/authentication-service";
import { apiGetProfile } from "../core/services/user-service";
import * as RootNavigation from '../core/helpers/root-navigation';
import { HomeChildScreen, HomeParentScreen, RootTabScreen } from "../global/constants/screen-name";
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
    userInfo
  };
};
const loginFailed = (messageError) => {
  return {
    type: LOGIN_FAILED,
    messageError
  };
};
export const login = (dispatch) => (username, password) => {
  dispatch(loginRequest());
  apiLogin(username, password)
    .then((res) => {
        console.log('phản hồi: ', res.data);
      if (res.status === 200) {
        apiGetProfile(res.data.access_token).then((resInfo) =>{
            if(resInfo.status === 200){
                dispatch(loginSuccess(res.data.access_token, res.data.refresh_token, resInfo.data))
                RootNavigation.navigate(RootTabScreen);
            }
        });
      } else {
        dispatch(loginFailed());
      }
    })
    .catch((error) => {
      dispatch(loginFailed("Đăng nhập thất bại"));
    });
};
