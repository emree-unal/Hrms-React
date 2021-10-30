import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu size="huge">
        <Container>
          <Menu.Item id="logo" name="HRMS" icon="home"  />
          <Menu.Item name="Search Job" icon="search" />

          <Menu.Menu position="right">
            <Button id="navibuttons" color="purple" >Log In</Button>

            <Button id="navibuttons" color="purple" >Sign Up</Button>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
