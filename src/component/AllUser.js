import axios from "axios";
import base_url from "../api/bootapi";
import React, { useEffect, useState } from "react";
import User from "./User";
import { toast } from "react-toastify";

const AllUser = () => {
  useEffect(
        () => {
           document.title="All User"
        },
        []
    );

    const getAllUserFromServer = () => {
        axios.get(`${base_url}/user`).then(

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
            getAllUserFromServer();
        },
        []
    );

    const [user, setCourse] = useState([ ]);
    return (
        <div>
            <h1>All User</h1>
            {
                user.length > 0 ?
                    user.map((item) => <User user={item} />)
                    : "No user"
            }

        </div>
    )

}

export default AllUser;