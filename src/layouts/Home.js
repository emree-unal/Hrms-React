import React from "react";
import HomeFilter from "../pages/HomeFilter";
import { Divider, Icon } from "semantic-ui-react";
import HomeJobList from "../pages/HomeJobList";
export default function Home() {
  return (
    <div>
      <HomeFilter></HomeFilter>
      <Divider horizontal>
        <Icon name="bell outline" /> Recently Posted
      </Divider>
      <br />
      <br />
      <HomeJobList></HomeJobList>
    </div>
  );
}
