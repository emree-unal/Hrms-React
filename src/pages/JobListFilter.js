import React from "react";
import { Dropdown, Card, CardHeader, Divider } from "semantic-ui-react";

export default function JobListFilter() {
  let options = [
    { key: "af", value: "af", flag: "af", text: "Afghanistan" },
    { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
  ];

  return (
    <div>
      <Card>
        <Card.Content>
          
            <CardHeader textAlign="center">Job Filter</CardHeader>
          <Divider></Divider>

          <Dropdown placeholder="Skills" fluid selection options={options} />
          <br />
          <br />

          <Dropdown placeholder="Skills" fluid selection options={options} />
          <br />
          <br />

          <Dropdown placeholder="Skills" fluid selection options={options} />
          <br />
          <br />

          <Dropdown placeholder="Skills" fluid selection options={options} />
        </Card.Content>
      </Card>
    </div>
  );
}
