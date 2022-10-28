import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddClassroomType from "./entities/classroomTypes/AddClassroomType";
import HomeClassroomType from "./entities/classroomTypes/HomeClassroomType";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/homeClassroomType"
            element={<HomeClassroomType />}
          />
          <Route
            exact
            path="/addClassroomType"
            element={<AddClassroomType />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
