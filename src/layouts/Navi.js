import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import {NavLink} from "react-router-dom"

export default function Navi() {
  return (
    <div>
      <Menu size="huge" fixed="top" >
        <Container>
          <Menu.Item id="logo" as={NavLink} to="/home" name="HRMS" icon="home"  />
          <Menu.Item id="search" name="Search Job" icon="search" as={NavLink} to="/joblists" />
          <Menu.Item  name="Candidates"  as={NavLink} to="/candidates" />

          <Menu.Menu position="right">
            <Button id="navibuttons" color="purple" >Log In</Button>

            <Button id="navibuttons" color="purple" >Sign Up</Button>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
