package com.tns.placementmanagementsystem.entity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Certificate {
	private long id;
	private Integer year;
	private String College;

public Certificate () {
}

public Certificate(long id, Integer year, String college) {
	super();
	this.id = id;
	this.year = year;
	College = college;
}

@Id
@GeneratedValue( strategy = GenerationType.AUTO)

public long getId() {
	return id;
}

public void setId(long id) {
	this.id = id;
}

public Integer getYear() {
	return year;
}

public void setYear(Integer year) {
	this.year = year;
}

public String getCollege() {
	return College;
}

public void setCollege(String college) {
	College = college;
}
	
	
}	
	
