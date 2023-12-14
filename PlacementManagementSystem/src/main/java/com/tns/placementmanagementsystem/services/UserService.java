package com.tns.placementmanagementsystem.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tns.placementmanagementsystem.entity.User;
import com.tns.placementmanagementsystem.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	 private UserRepository repo;
	 
	 public List<User> listAll() 
	 {
	 return repo.findAll();
	 }
	 
	 public void save(User User) 
	 {
	 repo.save(User);
	 }
	 public User get(Integer id)
	 {
		 return repo.findById(id).get();
	 }
	 
	 public void delete(int id) 
	 {
	repo.deleteById(id);
	 }
}

