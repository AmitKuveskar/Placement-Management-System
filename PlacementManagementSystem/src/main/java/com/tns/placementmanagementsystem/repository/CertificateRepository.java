package com.tns.placementmanagementsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.tns.placementmanagementsystem.entity.Certificate;

public interface CertificateRepository extends JpaRepository<Certificate,Long> {


}