package com.example.demo.mapper;

import java.util.List;

import com.example.demo.bean.Jobs;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.mybatis.spring.annotation.MapperScan;

@MapperScan
public interface JobsMapper {
    @Select("select * from jobs;")
    List<Jobs> findAll();

    @Insert("insert into jobs (id,name) values (#{id},#{name})")
    void insert(int id, String name);

    @Select("select * from jobs where id=#{id}")
    Jobs findById(int id);

    @Insert("update jobs set name=#{name} where id=#{id};")
    void update(int id, String name);

    @Delete("delete from jobs where id=#{id};")
    void delete(int id);
}
