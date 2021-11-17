import React from "react";
import JobListFilter from "../pages/JobListFilter";
import JobListItems from "../pages/JobListItems";
import { Grid } from 'semantic-ui-react'
export default function JobListLayout() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <JobListFilter></JobListFilter>
          </Grid.Column>
          <Grid.Column width={12}>
            <JobListItems></JobListItems>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
