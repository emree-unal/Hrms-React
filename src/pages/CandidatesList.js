import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCandidates } from "../redux/actions/candidatesActions";
import { Card, Icon, Image } from "semantic-ui-react";

export default function CandidatesList() {
  const candidateList = useSelector((state) => state.candidates);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCandidates());
  }, []);

  return (
    <div>
      <Card.Group itemsPerRow="4">
        {candidateList.data &&
          candidateList.data.map((candidate) => (
            <Card key={candidate.id}>
              <Card.Content textAlign="center">
                <Image
                  circular
                  size="small"
                  centered
                  src="https://react.semantic-ui.com/images/avatar/small/matthew.png"
                />
                <br/>
                <br/>
                <Card.Header>{candidate.firstName} &nbsp; {candidate.lastName}</Card.Header>
                
                <Card.Description>
                  {candidate.email}
                </Card.Description>
              </Card.Content>
             
            </Card>
          ))}
      </Card.Group>
    </div>
  );
}
