package com.cccw.webapp2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
//@ComponentScan({ "com.cccw.webapp2.*" })
public class Webapp2Application {

    public static void main(String[] args) {
        SpringApplication.run(Webapp2Application.class, args);
    }

}
