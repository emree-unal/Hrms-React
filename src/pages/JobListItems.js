import React , { useState, useEffect }from "react";
import { NavLink } from "react-router-dom";
import { Card,Label,Button } from 'semantic-ui-react'
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobListItems() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
      let jobService = new JobAdvertisementService();
      jobService
        .getJobAdvertisements()
        .then((result) => setJobs(result.data.data));
    }, []);
  return (
    <div>
     
          
          {jobs.map((job) => (
          <Card key={job.id} fluid color="purple" as={NavLink} to={`/jobdetails/${job.id}`} >
            <Card.Content>
            
             <Button compact circular color="yellow" icon="bookmark" floated="right"  />
              <Card.Header>{job.jobTitle}</Card.Header>
              <Card.Meta>{job.companyName}</Card.Meta>
              <Card.Meta>
                <br />
                <strong>Number of Open Positions</strong>
                &nbsp;
                <Label
                  circular
                  color="pink"
                  className="orbitron"
                  content={job.personelAmount}
                />
              </Card.Meta>
              <Card.Description className="orbitron">
                <strong>Posting Date</strong>
                &nbsp;&nbsp;
                {new Date(job.publicationDate).toDateString()}
                <br />
                <strong>Closing Date</strong>
                &nbsp;&nbsp;
                {new Date(job.applicationDeadline).toDateString()}
                <Card.Meta textAlign="right">{job.city}</Card.Meta>
              </Card.Description>
            </Card.Content>
            
            
          </Card>
        ))}
          
     
    
    </div>
  );
}
