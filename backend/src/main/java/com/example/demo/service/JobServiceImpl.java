package com.example.demo.service;

import java.util.List;

import com.example.demo.bean.Jobs;
import com.example.demo.mapper.JobsMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service // 用于表示这个类是spring容器中的服务组件
public class JobServiceImpl implements JobService {
    @Autowired
    JobsMapper mapper;

    @Override
    public List<Jobs> findAll() {

        return mapper.findAll();
    }

    @Override
    public void insert(int id, String name) {
        mapper.insert(id, name);

    }

    @Override
    public void delete(int id) {
        // TODO Auto-generated method stub
        mapper.delete(id);
    }

    @Override
    public void update(int id, String newName) {
        // TODO Auto-generated method stub
        mapper.update(id, newName);

    }

    @Override
    public Jobs findById(int id) {
        // TODO Auto-generated method stub
        return mapper.findById(id);
    }

    @Override
    @Transactional()
    public void deleteAll() {
        // mapper.deleteAll();
        // won't roll back, because it catches the exception
        try {
            List<Jobs> jobs = mapper.findAll();
            for (int i = 0; i < jobs.size(); i++) {
                mapper.delete(jobs.get(i).getId());
                if (i == 1) {
                    throw new Exception("some error occured");
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("run time exception thrown");
        }

    }

}
