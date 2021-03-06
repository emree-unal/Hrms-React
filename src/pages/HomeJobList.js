import React, { useState, useEffect } from "react";
import { Button, Card, Image, Label } from "semantic-ui-react";
import { useSelector } from "react-redux";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function HomeJobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let jobService = new JobAdvertisementService();
    jobService
      .getJobAdvertisements()
      .then((result) => setJobs(result.data.data));
  }, []);

  return (
    <div>
      <Card.Group>
        {jobs.map((job) => (
          <Card key={job.id}>
            <Card.Content>
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
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button color="purple">View Detail</Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
