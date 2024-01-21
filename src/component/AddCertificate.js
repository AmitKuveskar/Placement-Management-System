import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Fragment, useEffect, useState } from "react"
import { Container, FormGroup, Form, Input, Button } from "reactstrap";
import base_url from "../api/bootapi";


const AddCertifiacte = () => {

    const [certificate, setCertificate] = useState({});

    //form handler
    const handleForm = (e) => {
        console.log(certificate);
        postDataToServer(certificate);
        putDataToServer(certificate);
        

        e.preventDefault();

    };

    //For saving data in Server
    const postDataToServer=(data)=>
    {
        axios.post(`${base_url}/certificate`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
            },
            (error)=>{
                console.log(error);
                console.log("error");
            })
    };
    
    const putDataToServer=(data)=>
    {
        axios.post(`${base_url}/certificate`,data).then(
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
            <h1 className="text-center my 3">Enter Certificate Details</h1>

           <Form onSubmit={handleForm}> 
                <FormGroup>
                    <label for="id">Certificate id</label>
                    <Input type="text"
                        placeholder="Certificate id here"
                        name="id"
                        id="id"
                        onChange={(e) => {
                            setCertificate  ({ ...certificate, id: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="college">College</label>
                    <Input type="text"
                        placeholder="College Name here"
                        name="college"
                        id="college"
                        onChange={(e) => {
                            setCertificate({ ...certificate, college: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="year">Certificate year</label>
                    <Input type="text"
                        placeholder="Certificate year here"
                        name="year"
                        id="year"
                        onChange={(e) => {
                            setCertificate({ ...certificate, year: e.target.value });
                        }}
                    />
                </FormGroup>
                

                <Container className="text-center">
                    <Button type="submit" color="success">
                        Add Certificate
                    </Button>
                    <Button type="submit" color="success">
                        update Certificate
                    </Button>
                    

                    <Button type="reset"
                        color="warning m1-2" onClick={(e) => {
                            setCertificate({});
                        }}>Clear</Button>

                </Container>
            </Form>

        </Fragment >

    )
}
export default AddCertifiacte;