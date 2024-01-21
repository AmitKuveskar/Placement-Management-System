import React from "react";
import { Container,Button} from "reactstrap";
import  { useEffect} from "react";
import { Center } from "react-containers";


const Home = () => {
    useEffect(
        () => {
           document.title="Home-Page"
        },
        []
    );
    return (
        <div>
           
            <Container>
                <p align="center">Welcome to SJCEM</p>
                <p align="justify"> St.John College of Engineering and Management (SJCEM) is Established in 2008. It is located in Palghar. It provides facilities for professional education in the rural and tribal area of Palghar District near Mumbai by offering four year Degree Courses in Civil Engineering, Computer Engineering, Electronics and Telecommunications Engineering, IT Engineering and Mechanical Engineering and three year Diploma courses in Civil Engineering, Computer Engineering, Electronics and Telecommunications Engineering and Mechanical Engineering. SJCEM also offers two year Post Graduate Degree Course – Masters of Management Studies.
                    <hr />
                    <div>
                        Step 1: The students must first register themselves through the training and placement portal.
                    </div>
                    <div>
                        Step 2: Second, the students must update all relevant details.
                    </div>

                    <div>
                        Step 3: Now, the students can apply for interviews.
                    </div>
                    <div>
                        Step 4: All updates related to recruitment drives, placement schedules, interview timings will be visible on the student’s dashboard.
                    </div>
                </p>    </Container>

                <Container>
                   <Center><Button color="primary" >Start Exploring</Button></Center></Container>
               
        
        </div>
    )
}


export default Home;