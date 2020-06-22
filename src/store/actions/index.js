import { GAME_MODE, USER_INFO } from "../constants";

export const gameMode = (data) => ({
  type: GAME_MODE,
  payload: data,
});

export const userInfo = (data) => ({
  type: USER_INFO,
  payload: data,
});
