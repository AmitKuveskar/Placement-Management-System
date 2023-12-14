package com.tns.placementmanagementsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.tns.placementmanagementsystem.entity.College;

public interface CollegeRepository extends JpaRepository<College,Long> {
	

}
