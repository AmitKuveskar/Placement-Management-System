import React from 'react';
import axios from "axios";
import base_url from "../api/bootapi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Student from "./Student"


const AllStudent = () => {

    useEffect(
        () => {
           document.title="All Students"
        },
        []);


//call server
    const getAllStudentsFromServer = () => {
        
        axios.get(`${base_url}/student`).then(

            (response) => {
                console.log(response.data);
                toast.success("Data Loaded🎉");
                setStudents(response.data);

            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong");

            }
        );
    };

    useEffect(   () => {
        getAllStudentsFromServer();
    },
    []);

    const[ students , setStudents]= useState([]);

    const updateStudents = (id) => {
        setStudents(students.filter((c) => c.id != id));
    };

    return(
        <div className="text-center">
            <h1>All Students</h1>
            <p> List of Students are as follows</p>

            {
                students.length > 0 ?
                   students.map((item) => <Student student={item} update = {updateStudents} />)
                    : "No students"
            }




        </div>

    );


};

export default AllStudent;




