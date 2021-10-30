import React from 'react'
import { Grid, Image, Divider, Segment, Header, Input } from "semantic-ui-react";

export default function HomeFilter() {
    return (
        <div>
               <Grid>
      <Grid.Row stretched columns="2">
        <Grid.Column>
          <Image src={process.env.PUBLIC_URL + '/unemployment-vector.png'} />
        </Grid.Column>
        <Grid.Column>
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Segment basic>
            <Header color="purple" textAlign="center">
              <span id="headline-1" className="headline-1">Find a new Job</span>
            </Header>
          
          </Segment>
          <Segment raised circular>
            <Input transparent type="text" icon="search" size="big" placeholder="Search . . ." />
          </Segment>
          <Divider hidden />
         
         
        </Grid.Column>
      </Grid.Row>
    </Grid>  
        </div>
    )
}
