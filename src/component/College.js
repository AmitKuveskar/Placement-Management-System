import axios from "axios";
import React from "react";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { Card,CardBody,CardText, Container, Button} from "reactstrap";
import { Link } from "react-router-dom";

const College=({college,update})=>{
  const deleteCollege = (id) =>{
    axios.delete(`${base_url}/college/${id}`).then(
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
   
    <CardText>ID:{college.id}</CardText>
    <CardText>Name:{college.collegeName}</CardText>
    <CardText>Admin:{college.collegeAdmin}</CardText>
    <CardText>Location:{college.location}</CardText>
    

<Container className="text-center">
<Link tag="a" to={`/College/Update/${college.id}`} action>     
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
    deleteCollege(college.id);
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




export default College;