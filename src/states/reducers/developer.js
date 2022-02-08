import * as types from "../types";

const initialState = { developer: [], isLoading: true };
export const developer = (state = initialState, action) => {
  switch (action.type) {
    case types.setDeveloperRequest:
      return initialState;
    case types.getDeveloperSuccess:
      return { developer: action.payload, isLoading: false };
    default:
      return {...state};
  }
};
