package com.tns.placementmanagementsystem.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tns.placementmanagementsystem.entity.Certificate;
import com.tns.placementmanagementsystem.repository.CertificateRepository;

@Service
public class CertificateService {

	@Autowired
	 private CertificateRepository repo;
	 
	 public List<Certificate> listAll() 
	 {
	 return repo.findAll();
	 }
	 
	 public void save(Certificate certificate) 
	 {
	 repo.save(certificate);
	 }
	 
	 public Certificate get(int id) 
	 {
	 return repo.findById((long) id).get();
	 }
	 
	 public void delete(int id) 
	 {
	repo.deleteById((long) id);
	 }
}
