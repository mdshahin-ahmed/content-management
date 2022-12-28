// import axios from "axios";
import swal from "sweetalert";
import { removeContent } from "../../actions/blogActions";
const deleteContentData = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/blog/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(removeContent(id));
      swal("Poof! Your imaginary file has been deleted!", {
        icon: "success",
      });
    }
  };
};

export default deleteContentData;
