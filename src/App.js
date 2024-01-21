import './App.css';
import React from 'react';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { Row,Col,Container } from "reactstrap";
import NavBar from './component/NavBar';
import Home from "./component/Home";
import AllStudents from "./component/AllStudents";
import Sidebar from './component/SideBar';
import SideBarC from './component/SideBarC'
import SideBarCe from './component/SideBarCe'
import SideBarP from './component/SideBarP'
import SideBarU from './component/SideBarU'
import AddStudent from './component/AddStudent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './component/Update';
import AllColleges from "./component/AllColleges";
import AddCollege from './component/AddCollege';
import UpdateCollege from './component/UpdateCollege';
import AllPlacement from './component/AllPlacement';
import AddPlacement from './component/AddPlacement';
import AllCertificate  from './component/AllCertificate';
import AddCertificate from './component/AddCertificate';
import AddUser from './component/AddUser';
import AllUser from './component/AllUser';


  function App(){
    return (
    <div className="container">
      <Router>
      
      <Container>
      <NavBar/>
            <Row>
        <Col md={4}>
        <Routes>
        <Route path="/" element={<Sidebar/>} exact /> 
        <Route path="/View" element={<Sidebar/>} exact />
        <Route path="/Add" element={<Sidebar/>} exact /> 
        <Route path="/Update/:id" element={<Sidebar/>} exact />     
        <Route path="/College" element={<SideBarC/>} exact />
        <Route path="/College/View" element={<SideBarC/>} exact />
        <Route path="/College/Add" element={<SideBarC/>} exact />
        <Route path="/College/Update/:id" element={<SideBarC/>} exact />   
        <Route path="/Certificate/View" element={<SideBarCe/>} exact />
        <Route path="/Certificate/Add" element={<SideBarCe/>} exact />
        <Route path="/Placement/View" element={<SideBarP/>} exact />
        <Route path="/Placement/Add" element={<SideBarP/>} exact />
        <Route path="/User/View" element={<SideBarU/>} exact />
        <Route path="/User/Add" element={<SideBarU/>} exact />
         
                
            
                           
        </Routes>
       </Col>
      <Col md={8}>
       <Routes>
            <Route path="/" element={<Home/>} exact /> 
            <Route path="/View" element={<AllStudents/>} exact />
            <Route path="/Add" element={<AddStudent/>} exact />
            <Route path="/Update/:id" element={<Update/>} exact />
          
            
            
            <Route path="/College/View" element={<AllColleges/>} exact />
            <Route path="/College/Add" element={<AddCollege/>} exact />
            <Route path="/College/Update/:id" element={<UpdateCollege/>} exact />

            
            <Route path="/Placement/View" element={<AllPlacement/>} exact />
            <Route path="/Placement/Add" element={<AddPlacement/>} exact />


            <Route path="/Certificate/View" element={<AllCertificate/>} exact />
            <Route path="/Certificate/Add" element={<AddCertificate/>} exact />

            <Route path="/User/View" element={<AllUser/>} exact />
            <Route path="/User/Add" element={<AddUser/>} exact />

            
             
            
            
        </Routes>
     
      </Col>
      </Row>
       
      
       
       </Container>
       </Router>




       
      
       <ToastContainer/>
      </div>
      
    );
  }

export default App;
