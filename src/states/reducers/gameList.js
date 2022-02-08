import * as types from "../types";

const initialState = { isLoading: true, isLoadmore: false, games: [] };

export const gameList = (state = initialState, action) => {
  switch (action.type) {
    case types.setGameListRequest:
      return initialState;
      break;
    case types.setMoreGameListSuccess:
      return { ...state, isLoadmore: true };
      break;
    case types.getGameListSuccess:
      return {
        ...state,
        isLoading: false,
        isLoadmore: false,
        games: [...state.games, action.payload.results],
        next: action.payload.next,
      };
    default:
      return {...state};
  }
};
