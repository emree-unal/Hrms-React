import React from 'react'
import { useParams } from "react-router";

export default function JobDetails() {
    let { jobid } = useParams();
    return (
        <div>
             Job Detail Page <label>{jobid}</label> 
        </div>
    )
}
