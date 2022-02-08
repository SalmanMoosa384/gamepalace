import * as types from "../types";

const initialState={store:[],isLoading:true};
export const store = (state = initialState, action) => {
  switch (action.type) {
    case types.setStoreRequest:
      return initialState;
      case types.getStoreSuccess:
      return {store:action.payload,isLoading:false};
    default:
      return {...state};
  }
};