import React from 'react';

const SingleApplyJob = ({ job }) => {
    const { id, company_name, job_type, remote_or_onsite, job_title } = job;
    return (
        <div className="card bg-base-100  m-4 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-warning">{company_name}</h2>
                <h2 className="card-title">{job_title}</h2>
                <p><span className='font-bold'>Work type:</span> {remote_or_onsite} | {job_type}</p>
            </div>
        </div>
    );
};

export default SingleApplyJob;