import React from "react";
import { Card,CardBody,CardText} from "reactstrap";

const Certificate=({certificate})=>
{
    return(

<Card>
    <CardBody>
       <CardText>{certificate.id}</CardText>
       <CardText>{certificate.year}</CardText>
       <CardText>{certificate.College}</CardText>
    </CardBody>
</Card>


    )
}

export default Certificate;