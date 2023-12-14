package com.tns.placementmanagementsystem.controller;

import java.util.List;
import java.util.NoSuchElementException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tns.placementmanagementsystem.entity.User;
import com.tns.placementmanagementsystem.services.UserService;

@RestController
@CrossOrigin
public class UserController {
	
@Autowired
private UserService service;
	 
@GetMapping("/user")
		    public List<User> list() {
		        return service.listAll();
		        
		    }
@GetMapping("/user/{id}")
public ResponseEntity<User> get(@PathVariable Integer id) 
	    {
	    try
	    {
	    User user = service.get(id);
	    return new ResponseEntity<User>(user, HttpStatus.OK);
	    } 
	    catch (NoSuchElementException e) 
	    {
	    return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
	    } 
	    } 
@PostMapping("/user")
public void add(@RequestBody User users) 
	    {
	    service.save(users);
	    }
	    
@PutMapping("/user/{id}")
public ResponseEntity<?> update(@RequestBody User users, @PathVariable Integer id) 
	    {
	    try
	    {
	   
	    service.save(users);
	    return new ResponseEntity<>(HttpStatus.OK);
	    } 
	    catch (NoSuchElementException e) 
	    {
	    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    } 
	    }
	    
 @DeleteMapping("/user/{id}")
public void delete(@PathVariable Integer id) 
	    {
	    service.delete(id);
	    }

}