import React from "react";
import { Card,CardBody,CardText} from "reactstrap";

const Placement=({placement})=>
{
    return(

<Card>
    <CardBody>
       <CardText>{placement.id}</CardText>
       <CardText>{placement.name}</CardText>
       <CardText>{placement.college}</CardText>
       <CardText>{placement.date}</CardText>
       <CardText>{placement.qualification}</CardText>
       <CardText>{placement.year}</CardText>


    </CardBody>
</Card>


    )
}

export default Placement;