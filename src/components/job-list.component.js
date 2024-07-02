import React, { Component } from "react";
import JobDataService from "../jobs.service";
import { Link } from "react-router-dom";

export default class JobsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchId = this.onChangeSearchId.bind(this);
    this.retrieveJobs = this.retrieveJobs.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveJob = this.setActiveJob.bind(this);
    this.removeAllJobs = this.removeAllJobs.bind(this);
    this.searchId = this.searchId.bind(this);
    this.deleteJob = this.deleteJob.bind(this);

    this.state = {
      jobs: [],
      currentJob: null,
      currentIndex: -1,
      searchId: ""
    };
  }

  componentDidMount() {
    this.retrieveJobs();
  }

  onChangeSearchId(e) {
    const searchId = e.target.value;
    this.setState({
      searchId: searchId
    });
  }

  retrieveJobs() {
    JobDataService.getAll()
      .then(response => {
        this.setState({
          jobs: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveJobs();
    this.setState({
      currentJob: null,
      currentIndex: -1
    });
  }

  setActiveJob(job, index) {
    this.setState({
      currentJob: job,
      currentIndex: index
    });
  }

  removeAllJobs() {
    JobDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchId() {
    this.setState({
      currentJob: null,
      currentIndex: -1
    });

    JobDataService.findById(this.state.searchId)
      .then(response => {
        this.setState({
          jobs: [response.data] // Convert the single result to an array
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteJob() {
    if (this.state.currentJob) {
      JobDataService.delete(this.state.currentJob.id)
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    }
  }

  render() {
    const { searchId, jobs, currentJob, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by ID"
              value={searchId}
              onChange={this.onChangeSearchId}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchId}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Jobs List</h4>
          <ul className="list-group">
            {jobs.length > 0 ? (
              jobs.map((job, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveJob(job, index)}
                  key={index}
                >
                  {job.name}
                </li>
              ))
            ) : (
              <li className="list-group-item">No jobs found</li>
            )}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllJobs}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentJob ? (
            <div>
              <h4>Job#{currentJob.id}</h4>
              <div>{currentJob.name}</div>

              <Link
                to={"/jobs/" + currentJob.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
              <button
                className="m-3 btn btn-sm btn-danger"
                onClick={this.deleteJob}
              >
                Delete
              </button>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a job...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
