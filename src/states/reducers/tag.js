import * as types from "../types";

const initialState={tag:[],isLoading:true};
export const tag = (state = initialState, action) => {
  switch (action.type) {
    case types.setTagRequest:
      return initialState;
      case types.getTagSuccess:
      return {tag:action.payload,isLoading:false};
    default:
      return {...state};
  }
};