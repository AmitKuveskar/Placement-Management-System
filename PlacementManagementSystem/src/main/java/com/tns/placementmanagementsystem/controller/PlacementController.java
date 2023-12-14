package com.tns.placementmanagementsystem.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
//import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import com.tns.placementmanagementsystem.entity.Placement;
import com.tns.placementmanagementsystem.services.PlacementService;

@RestController
@CrossOrigin
public class PlacementController {

	@Autowired
	private PlacementService service;
	
	//For All List
	@GetMapping("/placement")
	 public List<Placement> list() 
	 {
	 return service.listAll();
	 }
	
	 //For Search By ID
	 @GetMapping("/placement/{id}")
	 public ResponseEntity<Placement> get(@PathVariable Long id) 
	 {
	 try
	 {
		 Placement placement = service.get(id);
	 return new ResponseEntity<Placement>(placement, HttpStatus.OK);
	 } 
	 catch (NoSuchElementException e) 
	 {
	 return new ResponseEntity<Placement>(HttpStatus.NOT_FOUND);
	 } 
	 }
	 
	 //For Create operation
	 @PostMapping("/placement")
	 public void add(@RequestBody Placement placement) 
	 {
	service.save(placement);
	 }
	 
	//For Update operation
	 @PutMapping("/placement/{id}")
	 public ResponseEntity<?> update(@RequestBody Placement placement, @PathVariable Long id) 
	 {
	 try
	 {	 
	 service.save(placement);
	 return new ResponseEntity<>(HttpStatus.OK);
	 } 
	 catch (NoSuchElementException e) 
	 {
	 return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	 } 
	 }
	 
	 
	
	
}