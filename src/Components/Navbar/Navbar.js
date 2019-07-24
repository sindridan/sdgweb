import React, { Component } from "react";
import NavbarItems from "./NavbarItems/NavbarItems"
import styled from 'styled-components';

const NavbarContainer = styled.div`
  background-color: #cbeaf2;
  overflow: auto;
`

class Navbar extends Component {

    render() {
        return (
        <NavbarContainer>
            <NavbarItems>
            </NavbarItems>
        </NavbarContainer>
        );
    }
}

export default Navbar;