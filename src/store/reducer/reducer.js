import { GAME_MODE, USER_INFO } from "../constants";

const defaultUserState = {
  mode: null,
  userInfo: {},
};

const userReducer = (state = defaultUserState, action) => {
  switch (action.type) {
    case GAME_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    case USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
