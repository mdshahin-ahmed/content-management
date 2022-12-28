import { React, useEffect } from "react";
import "./BlogList.css";
// import swal from "sweetalert";

// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import loadContentData from "../../../redux/thunk/blogs/fetchContents";
import deleteContentData from "../../../redux/thunk/blogs/deleteBlog";

const BlogList = () => {
  const contents = useSelector((state) => state.content.contents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContentData());
  }, [dispatch]);

  //   const handleDelete = (id) => {
  //     swal({
  //       title: "Are you sure?",
  //       text: "You will not be able to recover this imaginary file!",
  //       icon: "warning",
  //       buttons: true,
  //       dangerMode: true,
  //     }).then((willDelete) => {
  //       if (willDelete) {
  //         axios
  //           .delete(
  //             `https://shahin-ahmed-portfolio.vercel.app/api/v1/message/${id}`
  //           )
  //           .then((data) => {
  //             if (data.data.data.deletedCount === 1) {
  //               swal("Poof! Your imaginary file has been deleted!", {
  //                 icon: "success",
  //               });
  //             }
  //           });
  //       }
  //     });
  //   };

  return (
    <>
      {!contents.length ? (
        <div chassName="spinnerDiv">
          <div
            className="spinner-border"
            style={{
              color: "#ff0066",
              marginTop: "200px",
              height: "10rem",
              width: "10rem",
              fontSize: "50px",
            }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="tableWrap container my-3">
          <table className="w-100">
            <thead className="tableHeadingWrap">
              <th className="nameHeading">
                <div className="headingName align-self-center">Name</div>
              </th>
              <th className="blogHeading">
                <div className="headingName align-self-center">
                  Blog Heading
                </div>
              </th>
              <th className="dateHeading">
                <div className="headingName align-self-center">Date</div>
              </th>
              <th className="modifyHeading">
                <div className="headingName align-self-center">Modify</div>
              </th>
            </thead>
            <tbody>
              {contents.map((msg, index) => {
                const { _id, name, blogHeading, date } = msg;

                const dates = new Date(date);
                const currentDate = dates.toLocaleDateString();
                const time = dates.toLocaleTimeString();
                return (
                  <tr
                    key={_id}
                    className={index % 2 === 0 ? "evenTr" : "oddTr"}
                  >
                    <td className="tableName">{name}</td>
                    <td className="tableHeading">{blogHeading}</td>
                    <td className="tableDate">
                      <span>
                        {currentDate}
                        <br />
                        {time}
                      </span>
                    </td>
                    <td className="tableModify">
                      <i className="fas fa-edit me-3 edit"></i>
                      <i
                        onClick={() => dispatch(deleteContentData(_id))}
                        className="fa-solid fa-trash delete"
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default BlogList;
