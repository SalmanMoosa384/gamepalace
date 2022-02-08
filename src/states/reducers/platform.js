import * as types from "../types";

const initialState={platform:[],isLoading:true};
export const platform = (state = initialState, action) => {
  switch (action.type) {
    case types.setPlatformRequest:
      return initialState;
      case types.getPlatformSuccess:
      return {platform:action.payload,isLoading:false};
    default:
      return {...state};
  }
};