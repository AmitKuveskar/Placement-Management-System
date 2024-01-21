import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios";
import base_url from "../api/bootapi";
import React, { useEffect, useState } from "react";
import Placement from "./Placement";
import { toast } from "react-toastify";

const AllPlacement = () => {
  useEffect(
        () => {
           document.title="All placement"
        },
        []
    );

    const getAllPlacementFromServer = () => {
        axios.get(`${base_url}/placement`).then(

            (response) => {
                console.log(response.data);
                toast.success("Data Loaded");
                setCourse(response.data);


            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong");

            }
        );
    };
    useEffect(   () => {
            getAllPlacementFromServer();
        },
        []
    );

    const [placement, setCourse] = useState([ ]);
    return (
        <div>
            <h1>All Placement</h1>
            {
                placement.length > 0 ?
                    placement.map((item) => <Placement placement={item} />)
                    : "No products"
            }

        </div>
    )

}

export default AllPlacement;