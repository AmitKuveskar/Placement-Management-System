package com.tns.placementmanagementsystem.services;

import java.util.List;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.tns.placementmanagementsystem.entity.College;
import com.tns.placementmanagementsystem.repository.CollegeRepository;

@Service
@Transactional
public class CollegeService {
@Autowired
	private CollegeRepository repo;
 	
public void save(College college) 
{
		repo.save(college);
		
}

public College get(Integer id) {
	return null;
}

// For Search
public College get1(Long id)
{
return repo.findById(id).get(); //inbuilt
}

//For Delete
public void delete(Long id) {
	repo.deleteById(id);
	
}

public List<College> listAll() {
	// TODO Auto-generated method stub
	 return repo.findAll();
}
}

