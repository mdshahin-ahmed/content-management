import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          {/* <Route path="/login" element={<Login></Login>}></Route> */}

          {/* Dashboar route */}

          {/* <Route path="/dashboard" element={<Dashboard></Dashboard>}> */}

          {/* Dashboard inside route  */}

          {/* <Route path="/dashboard" element={<Inbox></Inbox>}></Route>
            <Route path="/dashboard/inbox" element={<Inbox></Inbox>}></Route> */}

          {/* <Route
              path="/dashboard/addProject"
              element={<AddProject></AddProject>}
            ></Route>
            <Route
              path="/dashboard/editProjects"
              element={<EditProject></EditProject>}
            ></Route>
            <Route
              path="/dashboard/editProject/:id"
              element={<UpdateProjects></UpdateProjects>}
            ></Route>
          </Route> */}
          {/* Dashboard roure finished  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
