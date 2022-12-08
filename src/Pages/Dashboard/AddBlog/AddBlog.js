import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addContentData from "../../../redux/thunk/blogs/addBlogData";

import "./AddBlog.css";

const AddBlog = () => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    const content = {
      ...data,
      date: new Date(),
    };
    dispatch(addContentData(content));
    reset();
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      <div>
        <div className="container ">
          <div className="row">
            <div className="col-12 col-lg-6 mx-auto">
              <div className="shadow addProjectWrap px-5 py-4 mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className="pInputField"
                    placeholder="Enter Blog Heading"
                    {...register("blogHeading", { required: true })}
                  />
                  <br />
                  <textarea
                    className="pInputField"
                    placeholder="Enter Image URL"
                    {...register("src", { required: true })}
                  />
                  <br />
                  <textarea
                    className="pInputField"
                    placeholder="Enter Your Name"
                    {...register("name", { required: true })}
                  />
                  <br />
                  <textarea
                    className="pInputField"
                    placeholder="Enter Description"
                    {...register("description", { required: true })}
                  />

                  <input className="btn-pink  mt-3" type="submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
