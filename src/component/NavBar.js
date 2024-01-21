import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


const Head=(props) =>{
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
        📘Placement Management System
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">👨🏻‍🎓Students</NavLink>
              <NavLink href="/College/View">🏫College</NavLink>
              <NavLink href="/Placement/View">🎓Placement</NavLink>
              <NavLink href="/Certificate/View">📜Certificate</NavLink>
              <NavLink href="/User/View">👦🏻User</NavLink>
             
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/AmitKuveskar">
                GitHub - Amit
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}



export default Head;
