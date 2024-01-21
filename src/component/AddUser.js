
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Fragment, useEffect, useState } from "react"
import { Container, FormGroup, Form, Input, Button } from "reactstrap";
import base_url from "../api/bootapi";
//import { toast } from 'react-toastify';
//import User from "./Placement/User";

const AddUser = () => {

    const [user, setUser] = useState({});

    //form handler
    const handleForm = (e) => {
        console.log(user);
        postDataToServer(user)

        e.preventDefault();

    };

    //For saving data in Server
    const postDataToServer=(data)=>
    {
        axios.post(`${base_url}/user`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
            },
            (error)=>{
                console.log(error);
                console.log("error");
            })
    };

    return (
        <Fragment>
            <h1 className="text-center my 3">Enter User Details</h1>

           <Form onSubmit={handleForm}> 
                <FormGroup>
                    <label for="id">User id</label>
                    <Input type="text"
                        placeholder="User id here"
                        name="id"
                        id="id"
                        onChange={(e) => {
                            setUser  ({ ...user, id: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="name">User name</label>
                    <Input type="text"
                        placeholder="user name here"
                        name="name"
                        id="name"
                        onChange={(e) => {
                            setUser({ ...user, name: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="type">user type</label>
                    <Input type="text"
                        placeholder="user type here"
                        name="type"
                        id="type"
                        onChange={(e) => {
                            setUser({ ...user, type: e.target.value });
                        }}
                    />
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success">
                        Add User
                    </Button>

                    <Button type="reset"
                        color="warning m1-2" onClick={(e) => {
                            setUser({});
                        }}>Clear</Button>

                </Container>
            </Form>

        </Fragment >



    )


}
export default AddUser;