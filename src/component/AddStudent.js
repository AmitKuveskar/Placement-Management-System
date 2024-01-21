import axios from "axios";
import { Fragment,useState } from "react"
import { toast } from "react-toastify";
import { Container, FormGroup, Form, Input, Button } from "reactstrap";
import base_url from "../api/bootapi";

const AddStudent = () => {

    const [student, setStudent] = useState({});

    //form handler
    const handleForm = (e) => {
        console.log(student);
        postDataToServer(student)

        e.preventDefault();

    };

    //For saving data in Server
    const postDataToServer=(data)=>
    {
        axios.post(`${base_url}/student`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("👨🏻‍🎓Student Added Successfully")
            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong");
            })
    };
    return(
        <Fragment>
        <h1 className='"text-center'>Fill Your Details</h1>

<Form onSubmit={handleForm}>
  <FormGroup>
    <label>👨🏻‍🎓Student ID</label>
    <Input 
    type="text" 
    placeholder='Enter Your ID'
    name='userId'
    id='userid'
    onChange={(e) => {
        setStudent({ ...student, userID: e.target.value });
    }}
    />
        </FormGroup>

        <FormGroup>
    <label> 👦🏻Name</label>
    <Input 
    type="text" 
    placeholder='Enter Your Name'
    name='Name'
    id='Name'
    onChange={(e) => {
        setStudent({ ...student, name: e.target.value });
    }}
    />
        </FormGroup>
        <FormGroup>
    <label>🏫College Name</label>
    <Input 
    type="text" 
    placeholder='Enter Your College Name'
    name='college'
    id='college'
    onChange={(e) => {
        setStudent({ ...student, college: e.target.value });
    }}
    />
    
        </FormGroup>
        <FormGroup>
    <label>📜Certificates</label>
    <Input 
    type="text" 
    placeholder='Enter Your Certificate Details'
    name='certificate'
    id='cerficate'
    onChange={(e) => {
        setStudent({ ...student, certificate: e.target.value });
    }}
    />
    
        </FormGroup>
       
        {/* <FormGroup>
    <label>🎫HallTicketNo</label>
    <Input 
    type="text" 
    placeholder='Enter Your HallTicketNO'
    name='hall_ticket_no'
    id='hall_ticket_no'
    onChange={(e) => {
        setStudent({ ...student, hall_ticket_no: e.target.value });
    }}
    />
    
        </FormGroup> */}
       
        <FormGroup>
    <label>🎓Qualification</label>
    <Input 
    type="text" 
    placeholder='Enter Your Qualification'
    name='Qualification'
    id='Qualification'
    onChange={(e) => {
        setStudent({ ...student, qualification: e.target.value });
    }}
    />
    
        </FormGroup>
        <FormGroup>
    <label>🔢Your RollNo</label>
    <Input 
    type="text" 
    placeholder='Enter Your RollNo'
    name='roll'
    id='roll'
    onChange={(e) => {
        setStudent({ ...student, roll: e.target.value });
    }}
    />
    
        </FormGroup>
        <FormGroup>
    <label>🎉Year</label>
    <Input 
    type="text" 
    placeholder='Enter Your Year'
    name='Year'
    id='Year'
    onChange={(e) => {
        setStudent({ ...student, year: e.target.value });
    }}
    /> </FormGroup>

<Container className="text-center">
<Button
    type="submit"
    color="primary"
    outline
  >
    Submit
  </Button>

  {' '}
<Button
    type="reset"
    color="warning"
    outline
    onClick={(e) => {
        setStudent({});
  
    }}> Reset
     </Button>
     </Container>
        </Form>
        </Fragment>

    );
};

export default AddStudent;