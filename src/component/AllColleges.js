import React from 'react';
import axios from "axios";
import base_url from "../api/bootapi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import College from "./College"


const AllCollege = () => {

    useEffect(
        () => {
           document.title="All College"
        },
        []);


//call server
    const getAllCollegeFromServer = () => {
        
        axios.get(`${base_url}/college`).then(

            (response) => {
                console.log(response.data);
                toast.success("Data Loaded🎉");
                setCollege(response.data);

            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong");

            }
        );
    };

    useEffect(   () => {
        getAllCollegeFromServer();
    },
    []);

    const[ colleges , setCollege]= useState([]);

    const updateCollege = (id) => {
        setCollege(colleges.filter((c) => c.id != id));
    };

    return(
        <div className="text-center">
            <h1>All Students</h1>
            <p> List of Students are as follows</p>

            {
                colleges.length > 0 ?
                   colleges.map((item) => <College college={item} update = {updateCollege} />)
                    : "No students"
            }




        </div>

    );


};

export default AllCollege;




