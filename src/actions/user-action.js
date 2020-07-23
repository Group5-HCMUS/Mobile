import axios from "axios";
import {
  ADD_CHILD_FAILED,
  ADD_CHILD_REQUEST,
  ADD_CHILD_SUCCESSED,
} from "../global/constants/actions-constant";
import {
  apiGetProfile,
  apiAddChild,
  apiGetListChild,
} from "../core/services/user-service";
import * as RootNavigation from "../core/helpers/root-navigation";
import {
  HomeChildScreen,
  HomeParentScreen,
  RootTabScreen,
} from "../global/constants/screen-name";
import { useContext } from "react";
import { AuthenticationContext } from "../providers/authentication-provider";
const addChildRequest = () => {
  return {
    type: ADD_CHILD_REQUEST,
  };
};
const addChildSuccess = () => {
  return {
    type: ADD_CHILD_SUCCESSED,
    message,
  };
};
const addChildFailed = (messageError) => {
  return {
    type: ADD_CHILD_FAILED,
    message,
  };
};
export const addChild = (dispatch) => (code) => {
  dispatch(addChildRequest());
  apiAddChild(code, authContext.state.access_token)
    .then((res) => {
      if (res.status === 200) {
        dispatch(addChildSuccess("Add child success"));
      } else {
        dispatch(addChildFailed("Add child fail"));
      }
    })
    .catch((error) => {
      dispatch(addChildFailed("Add child fail"));
    });
};

export const getListChild = async (access_token) => {
  await apiGetListChild(access_token)
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
