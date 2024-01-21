
import Certificate from "./Certificates";
import axios from "axios";
import base_url from "../api/bootapi";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AllCertificate = () => {
  useEffect(
        () => {
           document.title="All certificate"
        },
        []
    );

    const getAllCertificateFromServer = () => {
        axios.get(`${base_url}/certificate`).then(

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
            getAllCertificateFromServer();
        },
        []
    );

    const [certificate, setCourse] = useState([ ]);
    return (
        <div>
            <h1>All Certificate</h1>
            {
                certificate.length > 0 ?
                    certificate.map((item) => <Certificate certificate={item} />)
                    : "No certificate"
            }

        </div>
    )

}

export default AllCertificate;