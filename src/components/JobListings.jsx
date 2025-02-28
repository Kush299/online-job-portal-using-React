import { useState } from "react";

const JobListings = ({ jobs }) => {
    return (
      <div className="content">
        <h2 className="heading">Job Listings</h2>
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <div key={index} className="job-card">
              <h3>{job.company}</h3>
              <p>{job.description}</p>
              <p>Stipend: {job.stipend}</p>
              <a href={job.link} target="_blank" rel="noopener noreferrer">Apply Here</a>
            </div>
          ))
        ) : (
          <p>No jobs available</p>
        )}
      </div>
    );
  };
  
  export default JobListings;
