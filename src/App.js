import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddBlog from "./Pages/Dashboard/AddBlog/AddBlog";
import BlogList from "./Pages/Dashboard/BlogList/BlogList";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>

            {/* Dashboar route */}

            <Route path="/dashboard" element={<Dashboard></Dashboard>}>
              {/* Dashboard inside route  */}

              <Route path="/dashboard" element={<BlogList></BlogList>}></Route>
              <Route
                path="/dashboard/blogs"
                element={<BlogList></BlogList>}
              ></Route>

              <Route
                path="/dashboard/add-blog"
                element={<AddBlog></AddBlog>}
              ></Route>
              {/* <Route
              path="/dashboard/editProjects"
              element={<EditProject></EditProject>}
            ></Route> */}
              {/* <Route
              path="/dashboard/editProject/:id"
              element={<UpdateProjects></UpdateProjects>}
            ></Route> */}
            </Route>
            {/* Dashboard roure finished  */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
