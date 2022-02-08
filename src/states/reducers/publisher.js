import * as types from "../types";

const initialState={publisher:[],isLoading:true};
export const publisher = (state = initialState, action) => {
  switch (action.type) {
    case types.setPublisherRequest:
      return initialState;
      case types.getPublisherSuccess:
      return {publisher:action.payload,isLoading:false};
    default:
      return {...state};
  }
};