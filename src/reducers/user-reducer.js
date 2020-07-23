import React from "react";
import * as ActionsConstant from "../global/constants/actions-constant";
const UserReducer = (prevState, action) => {
  switch (action.type) {
    case ActionsConstant.ADD_CHILD_REQUEST: {
      return {
        ...prevState,
        isAddingChild: true,
      };
    }
    case ActionsConstant.ADD_CHILD_SUCCESSED: {
      return {
        ...prevState,
        isAddingChild: false,
        messageAddChild: action.messageAddChild,
      };
    }
    case ActionsConstant.ADD_CHILD_FAILED: {
      return {
        ...prevState,
        isAddingChild: false,
        messageAddChild: action.messageAddChild,
      };
    }
    default: {
      throw new Error();
    }
  }
};

export default UserReducer;
