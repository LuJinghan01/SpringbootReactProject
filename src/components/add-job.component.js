import React, { Component } from "react";
import JobDataService from "../jobs.service";

export default class AddJob extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.saveJob = this.saveJob.bind(this);
    this.newJob = this.newJob.bind(this);

    this.state = {
      id: null,
      name: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  saveJob() {
    var data = {
      name: this.state.name,
    };

    JobDataService.newJob(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newJob() {
    this.setState({
      id: null,
      name: "",
    });
  }

  render() {
    return (
      <div className="submit-form">
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={this.state.name}
              onChange={this.onChangeName}
              name="name"
            />
          </div>

          <button onClick={this.saveJob} className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    );
  }
}
