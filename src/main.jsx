import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPanel from "./components/AdminPanel";
import JobListings from "./components/JobListings";
import Navbar from "./components/Navbar";
import "./index.css";

const App = () => {
  const [jobs, setJobs] = useState([]);

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/admin" element={<AdminPanel jobs={jobs} setJobs={setJobs} />} />
          <Route path="/" element={<JobListings jobs={jobs} />} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);