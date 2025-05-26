package com.example.demo.controllers;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

// @RestController is a specialized annotation in Spring Boot used for building RESTful web services. It is a combination of @Controller and @ResponseBody,
//  simplifying the process of creating APIs that return data in JSON or XML format. When a class is annotated with @RestController, it indicates that the 
//  class handles incoming web requests and returns data directly in the response body, without the need for a view

@RestController
// All the endpoints inside this controller will be prefixed with /api/users.
@RequestMapping("/api/users")


// This is your controller class — it handles incoming HTTP requests
public class HelloController {

    // Mapped to: GET /api/users . This method is called when the user sends a GET request to /api/users.
    @GetMapping
    public String sayHello() {
        return "Hello from Spring Boot!";
    }

    @PostMapping
    public String sayPostHello(){
        return "Creating a User!";
    }

    // Mapped to: PUT /api/users/{id} (e.g., /api/users/123)
    // @PathVariable means it grabs the id from the URL.
    // PUT is used for replacing or updating the entire resource.
    @PutMapping("/{id}")
    public String editHello(@PathVariable String id){
        return "hello edited " + id;

    }


    // Mapped to: PATCH /api/users/{id}
    // PATCH is used for partial updates to a resource.
    // Also grabs the id from the URL.
    @PatchMapping("/{id}")
    public String editingPatch(@PathVariable String id){
        return "hello patch method "+ id;
    }

    //Mapped to: DELETE /api/users/{id}
    // Deletes a resource identified by the ID.
    @DeleteMapping("/{id}")
    public String deletingHello(@PathVariable String id){
        return "deleting hello method "+id;
    }
}
