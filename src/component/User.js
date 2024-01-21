import React from "react";
import { Card,CardBody,CardText} from "reactstrap";

const User=({user})=>
{
    return(

<Card>
    <CardBody>
       <CardText>{user.id}</CardText>
       <CardText>{user.name}</CardText>
       <CardText>{user.type}</CardText>

    </CardBody>
</Card>


    )
}

export default User;