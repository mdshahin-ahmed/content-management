import React, { useEffect } from "react";
import Blog from "../Blog/Blog";
import { useDispatch, useSelector } from "react-redux";
import loadContentData from "../../../redux/thunk/blogs/fetchContents";

const Blogs = () => {
  const contents = useSelector((state) => state.content.contents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContentData());
  }, [dispatch]);
  // console.log(contents);

  let content;

  if (!contents.length) {
    content = <h4>Loading...</h4>;
  }

  if (contents.length) {
    content = contents.map((data) => <Blog key={data._id} data={data}></Blog>);
  }

  return (
    <div className="container">
      <div className="row">{content}</div>
    </div>
  );
};

export default Blogs;
