package com.example.demo.bean;

import java.util.Date;

public class Jobs{
    private Integer id;
    private String name;
    private boolean status;
    private Date creationTime;
    private String userName;

    Jobs(){}

    public Jobs(String name){
       
        this.name = name;
    }

    public Integer getId(){
        return id;
    }

    public String getName(){
        return name;
    }
    public boolean getStatus(){
        return status;
    }
    public Date getCreationTime(){
        return creationTime;
    }
    public String getUserName(){
        return userName;
    }


    public void setId(Integer id){
        this.id = id;
    }

    public void setName(String name){
        this.name = name;
    }



    
}
