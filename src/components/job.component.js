import React, { Component } from "react";
import JobDataService from "../jobs.service";
import { withRouter } from '../common/with-router';

class Job extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.getJob = this.getJob.bind(this);
    this.updateJobName = this.updateJobName.bind(this);
    this.deleteJob = this.deleteJob.bind(this);

    this.state = {
      currentJob: {
        id: null,
        name: "",
        status: null,
        creation_time: null,
        user_name: "",
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getJob(this.props.router.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentName: {
          ...prevState.currentName,
          name: name
        }
      };
    });
  }

  getJob(id) {
    JobDataService.get(id)
      .then(response => {
        this.setState({
          currentJob: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  updateJob() {
    JobDataService.update(
      this.state.currentJob.id,
      this.state.currentJob.name
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The job was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteJob() {    
    JobDataService.delete(this.state.currentJob.id)
      .then(response => {
        console.log(response.data);
        this.props.router.navigate('/jobs');
      })
      .catch(e => {
        console.log(e);
      });
  }
  removeAll() {
    JobDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentJob } = this.state;

    return (
      <div>
          <div className="edit-form">
            {/* <h4>Job#{currentJob.id}</h4> */}
            {/* <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentJob.name}
                  onChange={this.onChangeName}
                />
              </div>

            </form> */}


            {/* <button
              className="badge badge-danger mr-2"
              onClick={this.deleteJob}
            >
              Delete
            </button> */}

            {/* <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateJob}
            >
              Update
            </button> */}
            <p>{this.state.message}</p>
          </div>
          </div>
            
  );
    }
}

export default withRouter(Job);