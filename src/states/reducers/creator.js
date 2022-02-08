import * as types from "../types";

const initialState={creator:[],isLoading:true};
export const creator = (state = initialState, action) => {
  switch (action.type) {
    case types.setCreatorRequest:
      return initialState;
      case types.getCreatorSuccess:
      return {creator:action.payload,isLoading:false};
    default:
      return {...state};
  }
};