package com.vydrin.mmaoback;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @RequestMapping("/sayhello")
    public String hello(){
        return "hello";
    }
}
