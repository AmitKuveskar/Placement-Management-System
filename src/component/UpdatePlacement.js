import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Fragment, useEffect, useState } from "react"
import { Container, FormGroup, Form, Input, Button } from "reactstrap";
import base_url from "../api/bootapi";


const UpdatePlacement = () => {

    const [placement, setPlacement] = useState({});

    //form handler
    const handleForm = (e) => {
        console.log(placement);
        putDataToServer(placement);

        e.preventDefault();

    };

    //For saving data in Server
    const putDataToServer=(data)=>
    {
        axios.post(`${base_url}/placement`,data).then(
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
        <h1 className="text-center my 3">Enter placement Details</h1>

       <Form onSubmit={handleForm}> 
            <FormGroup>
                <label for="id">Placement id</label>
                <Input type="text"
                    placeholder="Placement id here"
                    name="id"
                    id="id"
                    onChange={(e) => {
                        setPlacement  ({ ...placement, id: e.target.value });
                    }}
                />
            </FormGroup>
            <FormGroup>
                <label for="name">Placement name</label>
                <Input type="text"
                    placeholder="Placement name here"
                    name="name"
                    id="name"
                    onChange={(e) => {
                        setPlacement({ ...placement, name: e.target.value });
                    }}
                />
            </FormGroup>
            <FormGroup>
                <label for="college">Placement college</label>
                <Input type="text"
                    placeholder="college name here"
                    name="college"
                    id="college"
                    onChange={(e) => {
                        setPlacement({ ...placement, college: e.target.value });
                    }}
                />
            </FormGroup>
            <FormGroup>
                <label for="date">Placement date</label>
                <Input type="text"
                    placeholder="Placement date here"
                    name="date"
                    id="date"
                    onChange={(e) => {
                        setPlacement({ ...placement, date: e.target.value });
                    }}
                />
            </FormGroup>
            <FormGroup>
                <label for="qualification">Placement qualification</label>
                <Input type="text"
                    placeholder="Placement qualification here"
                    name="qualification"
                    id="qualification"
                    onChange={(e) => {
                        setPlacement({ ...placement, qualification: e.target.value });
                    }}
                />
            </FormGroup>
            <FormGroup>
                <label for="year">Placement year</label>
                <Input type="text"
                    placeholder="Placement year here"
                    name="year"
                    id="year"
                    onChange={(e) => {
                        setPlacement({ ...placement, year: e.target.value });
                    }}
                />
            </FormGroup>
            <Container className="text-center">
                <Button type="submit" color="success">
                    Add Placement
                </Button>

                <Button type="reset"
                    color="warning m1-2" onClick={(e) => {
                        setPlacement({});
                    }}>Clear</Button>

            </Container>
        </Form>

    </Fragment >

    )
}
export default UpdatePlacement;