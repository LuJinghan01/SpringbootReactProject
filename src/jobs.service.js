import http from "./http-common";

class JobDataService {
  getAll() {
    return http.get("/jobs");
  }

  newJob(data) {
    return http.post("/jobs/insert", data);
    // return http.get("/jobs/insert");
  }

  get(id) {
    return http.get(`/jobs/${id}`);
  }

  update(id, data) {
    return http.put(`/${id}`, data);
    // return http.get(`/jobs/${id}`);
  }

  delete(id) {

    return http.delete(`/delete/${id}`);
    // return http.get(`/jobs/${id}`);
  }

  findById(id){
    return http.get(`/jobs/${id}`);
  }

  deleteAll(){
    return http.get(`/delete`);
  }

}

export default new JobDataService();