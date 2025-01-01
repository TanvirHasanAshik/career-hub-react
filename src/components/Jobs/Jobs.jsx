import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [displayJob, setDisplayJob] = useState(3);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);


    return (
        <div className='container mx-auto  text-center'>
            <div>
                <h1 className="text-3xl font-bold ">Find Your
                    <span className="text-warning"> Dream Job</span> Here!
                </h1>
                <p className='w-full lg:w-1/2 mx-auto px-5 text-sm mt-5'>Discover job opportunities that match your skills and aspirations. Whether you're an experienced professional or just starting your career, Career Hub connects you to the perfect roles in industries like IT, healthcare, marketing, education, and more. Take the first step toward your dream job today!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20'>
                {jobs.slice(0, displayJob).map(job => <Job key={job.id} job={job} />)}
            </div>

            {displayJob < jobs.length && <button
                onClick={() => setDisplayJob(jobs.length)}
                className="btn mx-auto my-5"
            >Show All Jobs</button>}
        </div>
    );
};

export default Jobs;