import axios from "axios";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

import "./AddBlog.css";

const AddBlog = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // setLoading(true);
    // axios
    //   .post("https://shahin-ahmed-portfolio.vercel.app/api/v1/project", data)
    //   .then((res) => {
    //     if (res.data.status === "success") {
    //       reset();
    //       setLoading(false);
    //       swal({
    //         title: "Good job!",
    //         text: "Add Project Successfully!",
    //         icon: "success",
    //         button: "Done",
    //       });
    //     }
    //   });
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
                    {...register("liveSiteLink", { required: true })}
                  />
                  <br />
                  <textarea
                    className="pInputField"
                    placeholder="Enter Description"
                    {...register("gitHubLink", { required: true })}
                  />

                  {loading ? (
                    <div
                      className="mt-3 spinner-border text-danger"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    <input className="btn-pink  mt-3" type="submit" />
                  )}
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
