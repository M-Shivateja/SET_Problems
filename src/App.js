import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Set1 from "./component/set1/Set1";
import Set2 from "./component/set2/Set2";
import Set3 from "./component/set3/Set3";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="bg-gray-800 p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/set1" className="text-white">
                Set 1
              </Link>
            </li>
            <li>
              <Link to="/set2" className="text-white">
                Set 2
              </Link>
            </li>
            <li>
              <Link to="/set3" className="text-white">
                Set 3
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/set1" element={<Set1 />} />
          <Route path="/set2" element={<Set2 />} />
          <Route path="/set3" element={<Set3 />} />
          <Route
            path="/"
            element={
              <h1 className="text-center mt-10">
                Welcome to the Problem Sets!
              </h1>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
