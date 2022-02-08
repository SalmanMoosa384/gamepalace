import * as types from "../types";

const initialState = { genre: [], isLoading: true };
export const genre = (state = initialState, action) => {
  switch (action.type) {
    case types.setGenreRequest:
      return initialState;
    case types.getGenreSuccess:
      return { genre: action.payload, isLoading: false };
    default:
      return {...state};
  }
};
