import axios from "axios";
import { Fragment, useEffect, useState } from "react"
import { toast } from "react-toastify";
import { Container, FormGroup, Form, Input, Button } from "reactstrap";
import base_url from "../api/bootapi";
import { useParams } from "react-router-dom";

const UpdateCollege = () => {
    
    const {id} = useParams();

    const [college, setCollege] = useState({});

    //form handler
    const handleForm = (e) => {
        console.log(college);
        putDataToServer(college)
        e.preventDefault();
        

    };

    //For saving data in Server
    const putDataToServer=(data , id)=>
    {
        axios.post(`${base_url}/college`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("👨🏻‍🎓College Updated Successfully")
            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong");
            })
    };


useEffect(() => {
    loadCollege ()
}, []);



const loadCollege = async () => {
    const result = await   axios.get(`${base_url}/college/${id}`);
    setCollege(result.data);
   
};

// const onSubmit = async e => {
//     e.preventDefault();
//     await axios.put(`${base_url}/student/${id}`,student);


// };


    return(
        <Fragment>
        <h1 className='"text-center'>Fill Your Details</h1>

        <Form onSubmit={handleForm}>
<FormGroup>
                    <label for="id">College Id</label>
                    <Input type="text"
                        placeholder="Enter College Id here"
                        name="id"
                        id="id"
                        onChange={(e) => {
                            setCollege  ({ ...college, id: e.target.value });
                        }}
                    />
                </FormGroup>

              

                <FormGroup>
                    <label for="collegeName">Name of the College</label>
                    <Input type="text"
                        placeholder="College name here"
                        name="collegeName"
                        id="collegeName"
                        onChange={(e) => {
                            setCollege({ ...college, collegeName: e.target.value });
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="collegeAdmin">College Admin</label>
                    <Input type="text"
                        placeholder="College admin here"
                        name="collegeAdmin"
                        id="collegeAdmin"
                        onChange={(e) => {
                            setCollege({ ...college, collegeAdmin: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="location">College location</label>
                    <Input type="text"
                        placeholder="location here"
                        name="location"
                        id="location"
                        onChange={(e) => {
                            setCollege({ ...college, location: e.target.value });
                        }}
                    />
                </FormGroup>


<Container className="text-center" >
<Button
    type="submit"
    color="success"
    outline
   
  >
    Update
  </Button>

  {' '}
<Button
    type="reset"
    color="warning"
    outline
    onClick={(e) => {
        setCollege({});
  
    }}> Reset
     </Button>
     </Container>
        </Form>
        </Fragment>

    );
};

export default UpdateCollege;