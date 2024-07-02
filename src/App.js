import React, { Component } from 'react';
import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css";

import AddJob from "./components/add-job.component";
import Job from "./components/job.component";
import JobsList from "./components/job-list.component";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to="/jobs" className="navbar-brand">
            Test
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/jobs"} className="nav-link">
                Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/insert"} className="nav-link">
                Insert
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<JobsList/>} />
            <Route path="/jobs" element={<JobsList />} />
            <Route path="/insert" element={<AddJob />} />
            <Route path="/jobs/:id" element={<Job />} />
          </Routes>
        </div>
        </BrowserRouter>
      </div>

    );
  }
}




export default App;



