import * as types from "../types";

const initialState = { filter: [], isLoading: true };
export const gameType = (state = initialState, action) => {
  switch (action.type) {
    case types.setGameTypeRequest:
      return initialState;
    case types.getGameTypeSuccess:
      return { filter: action.payload, isLoading: false };
    default: return {...state};
  }
};
