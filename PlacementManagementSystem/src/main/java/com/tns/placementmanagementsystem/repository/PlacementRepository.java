package com.tns.placementmanagementsystem.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.tns.placementmanagementsystem.entity.Placement;
public interface PlacementRepository extends JpaRepository<Placement, Long> 
{
	
}
