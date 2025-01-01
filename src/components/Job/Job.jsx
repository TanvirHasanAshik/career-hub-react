import React from 'react';
import { useNavigate } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, logo, job_title, job_type,
        educational_requirements, experiences } = job;
    const navigate = useNavigate();
    const handleJobDetails = (id) => {
        navigate(`/details-job/${id}`);
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={logo}
                        className="rounded-xl w-28 h-16" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{job_title}</h2>
                    <p>Education: {educational_requirements}</p>
                    <p>Job type: {job_type}</p>
                    <p>Experience: {experiences}</p>
                    <div className="card-actions">
                        <button onClick={() => handleJobDetails(id)} className="btn btn-warning">Show details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;