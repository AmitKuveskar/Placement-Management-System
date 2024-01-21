import React from 'react';
import { Link } from "react-router-dom";


import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    ListGroup,
    DropdownMenu,
    DropdownItem,DropdownToggle,
    UncontrolledDropdown
   

}from "reactstrap";

const SideBar=({ sidebar, student}) => {
    return(
        <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    // src="https://picsum.photos/300/200"
    src="/pic.jpg"
   
  />
  <CardBody>
    <CardTitle tag="h5" >
      SJCEM
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Engineering College
    </CardSubtitle>
    <CardText>
    St. John College of Engineering and Management (SJCEM) is Established in 2008. It is located in Palghar.
    </CardText>
    <ListGroup>         
                    {/* <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
                            Home
                        </Link> 
                 
                         <Link className="list-group-item list-group-item-action" tag="a" to="/View" action>
                            View 
                        </Link> 
                     

                        <Link className="list-group-item list-group-item-action" tag="a" to="/Add" action>
                            Add 
                        </Link>  */}

                        
                        
                 
                         <Link className="list-group-item list-group-item-action" tag="a" to="/College/View" action>
                            View 
                        </Link> 
                     

                        <Link className="list-group-item list-group-item-action" tag="a" to="/College/Add" action>
                            Add 
                        </Link> 
                      

                    </ListGroup>
    
  </CardBody>
</Card>
    )


}

export default SideBar;