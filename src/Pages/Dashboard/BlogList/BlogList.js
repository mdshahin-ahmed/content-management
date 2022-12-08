import { React, useEffect, useState } from "react";
import "./BlogList.css";
import swal from "sweetalert";

import axios from "axios";

const BlogList = () => {
  // const [messages, setMessages] = useState([]);

  //   useEffect(() => {
  //     fetch("https://shahin-ahmed-portfolio.vercel.app/api/v1/message")
  //       .then((res) => res.json())
  //       .then((data) => setMessages(data.data));
  //   }, [messages]);

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
            <th className="emailHeading">
              <div className="headingName align-self-center">Email</div>
            </th>
            <th className="subjectlHeading">
              <div className="headingName align-self-center">Subject</div>
            </th>
            <th className="messagelHeading">
              <div className="headingName align-self-center">Message</div>
            </th>
            <th className="dateHeading">
              <div className="headingName align-self-center">Date</div>
            </th>
            <th className="deleteHeading">
              <div className="headingName align-self-center">Delete</div>
            </th>
          </thead>
          <tbody>
            {/* {messages.map((msg, index) => {
                const { _id, name, email, subject, message, createdAt } = msg;

                const dates = new Date(createdAt);
                // const day = dates.getDate();
                // const month = dates.getMonth();
                // const year = dates.getFullYear();
                const time = dates.toLocaleDateString();
                const date = dates.toLocaleTimeString();
                // console.log(month, day, year);
                return (
                  <tr
                    key={_id}
                    className={index % 2 === 0 ? "evenTr" : "oddTr"}
                  >
                    <td className="tableName">{name}</td>
                    <td className="tableEmail">{email}</td>
                    <td className="tableSubject">{subject}</td>
                    <td className="tableMessage">{message}</td>
                    <td className="tableDate">
                      <span>
                        {time}
                        <br />
                        {date}
                      </span>
                    </td>
                    <td className="tableDelete">
                      <i
                        onClick={() => handleDelete(_id)}
                        className="fa-solid fa-trash"
                      ></i>
                    </td>
                  </tr>
                );
              })} */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BlogList;
