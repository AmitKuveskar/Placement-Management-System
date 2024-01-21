import axios from "axios";
import React from "react";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { Card,CardBody,CardText, Container, Button} from "reactstrap";
import { Link } from "react-router-dom";

const Student=({student, update})=>{
  const deleteStudent = (id) =>{
    axios.delete(`${base_url}/student/${id}`).then(
      (response)=>{
        toast.success("Data Deleted")
        update(id);
      },
      (error) =>{
        toast.error("Data Not Deleted");
      }
    );
  };


    return(

<Card>
    <CardBody className="text-center" >
   
    <CardText>ID: {student.id}</CardText>
    <CardText>Name: {student.name}</CardText>
    <CardText>College:{student.college}</CardText>
    <CardText>Year:{student.year}</CardText>
    <CardText>Certificate:{student.certificate}</CardText>
    <CardText>Qualification:{student.qualification}</CardText>
    <CardText>RollNo:{student.roll}</CardText>
    
   
<Container className="text-center">
<Link tag="a" to={`/Update/${student.id}`} action>     
  <Button
    color="success"
    outline      
  >
    Update
  </Button>
  </Link> 
  {' '}
  <Button
    color="danger"
    outline
    onClick={() => {
    deleteStudent(student.id);
    }}
  >
    Delete
  </Button>
    </Container>
    </CardBody>
</Card>


    )
}




<Link className="list-group-item list-group-item-action" tag="a" to="/Update" action>
Update 
</Link>




export default Student;