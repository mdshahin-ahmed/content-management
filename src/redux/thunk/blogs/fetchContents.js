import { getContent } from "../../actions/blogActions";

const loadContentData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/blogs");
    const data = await res.json();
    if (data.data.length) {
      dispatch(getContent(data.data));
    }
  };
};

export default loadContentData;
