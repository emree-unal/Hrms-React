import React from 'react'
import Home from './Home'
import { Route } from "react-router-dom";

import JobListLayout from './JobListLayout';
import JobDetails from './JobDetails';
import CandidateLayout from './CandidateLayout';
import { Container } from 'semantic-ui-react';
import CandidateAdd from '../pages/CandidateAdd';

export default function Dashboard() {
    return (
        <div>
            
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/joblists" component={JobListLayout}></Route>
            <Route exact path="/jobdetails/:jobid" component={JobDetails}></Route>
            <Route exact path="/candidates" component={CandidateLayout}></Route>
            <Route exact path="/candidatesAdd" component={CandidateAdd}></Route>
            
           
            
        </div>
    )
}
