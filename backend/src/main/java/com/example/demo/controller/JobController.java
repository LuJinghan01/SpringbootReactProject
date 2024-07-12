package com.example.demo.controller;

import java.util.List;
import java.util.Random;

import com.example.demo.bean.Jobs;
import com.example.demo.service.JobServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// @CrossOrigin(origins = "http://localhost:8081")
@RestController // 会自动将返回值转换成json格式；表示这个类是一个RESTful风格的控制器，可以处理http请求并返回json/xml的响应
@RequestMapping("/api") // 用于映射请求url和处理方法
public class JobController {
    @Autowired // 用于自动装配容器中的bean
    JobServiceImpl jobService;

    @GetMapping("/jobs")
    public List<Jobs> getAll() {
        return jobService.findAll();
    }

    @PostMapping("/jobs/insert")
    public Jobs newJob(@RequestBody Jobs job) {
        Random ran = new Random();
        int id = ran.nextInt(1000);
        job.setId(id); // Set a random ID
        jobService.insert(id, job.getName());
        return job; // Return the created job
    }
    // url: http://localhost:9095/jobs/insert?id=5&name=test2

    @GetMapping("/jobs/{id}")
    public Jobs findById(@PathVariable("id") int id) {
        return jobService.findById(id);
    }

    @GetMapping("/update/{id}")
    public List<Jobs> updateJob(@PathVariable("id") int id,
            @RequestParam(value = "name", defaultValue = "test") String newName) {
        jobService.update(id, newName);
        return jobService.findAll();
    }

    @GetMapping("/delete/{id}")
    public List<Jobs> deleteJob(@PathVariable("id") int id) {
        jobService.delete(id);
        return jobService.findAll();
    }

    @GetMapping("/delete")
    public List<Jobs> deleteAll() throws Exception {
        jobService.deleteAll();
        return jobService.findAll();
    }


    @RestController
    public class SecretController {

        @GetMapping("/secret/")
        public ResponseEntity<String> getSecret() {
            return ResponseEntity.ok("This is the secret endpoint");
        }
    }

}
