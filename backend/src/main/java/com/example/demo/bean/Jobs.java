package com.example.demo.bean;

public class Jobs{
    private Integer id;
    private String name;

    Jobs(){}

    Jobs(String name){
        this.name = name;
    }

    public Integer getId(){
        return id;
    }

    public String getName(){
        return name;
    }


    public void setId(Integer id){
        this.id = id;
    }

    public void setName(String name){
        this.name = name;
    }



    
}

