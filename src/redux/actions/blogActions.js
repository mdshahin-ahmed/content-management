import {
  ADD_CONTENT,
  ADD_TO_HISTORY,
  DELETE_CONTENT,
  GET_CONTENT,
  PRODUCT_LOADED,
} from "../actionTypes/actionTypes";

export const getContent = (data) => {
  return {
    type: GET_CONTENT,
    payload: data,
  };
};

export const addContent = (content) => {
  return {
    type: ADD_CONTENT,
    payload: content,
  };
};

export const removeContent = (id) => {
  return {
    type: DELETE_CONTENT,
    payload: id,
  };
};

export const addToHistory = (product) => {
  return {
    type: ADD_TO_HISTORY,
    payload: product,
  };
};

export const loaded = (products) => {
  return {
    type: PRODUCT_LOADED,
    payload: products,
  };
};
