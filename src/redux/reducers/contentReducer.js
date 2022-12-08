import {
  ADD_CONTENT,
  DELETE_CONTENT,
  GET_CONTENT,
} from "../actionTypes/actionTypes";

const initialState = {
  contents: [],
  history: [],
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTENT:
      return {
        ...state,
        contents: [...state.contents, action.payload],
      };
    // case DELETE_CONTENT:
    //   return {
    //     ...state,
    //     contents: state.contents.filter(
    //       (product) => product._id !== action.payload
    //     ),
    //   };

    default:
      return state;
  }
};

export default contentReducer;
