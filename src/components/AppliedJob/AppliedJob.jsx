import React, { useEffect, useState } from 'react';
import { getAppliedJob } from '../../utility/appliedJob';
import { Link, useLoaderData } from 'react-router-dom';
import SingleApplyJob from '../SingleApplyJob/SingleApplyJob';

const AppliedJob = () => {
    const getJob = getAppliedJob();
    const jobsLoad = useLoaderData();
    const [appliedJob, setAppliedJob] = useState([]);
    const [filter, setFilter] = useState('all');
    useEffect(() => {
        if (getJob.length > 0) {
            const jobs = jobsLoad.filter(job => {
                if (getJob.includes(`${job.id}`) && filter === 'all') {
                    return job;
                } else if (getJob.includes(`${job.id}`) && job.remote_or_onsite === filter) {
                    return job;
                }
            });

            setAppliedJob(jobs);
        }
    }, [jobsLoad]);

    console.log(appliedJob);
    return (
        <div className='container mx-auto my-10'>
            {getJob.length === 0 && <h1 className='text-center'>Opps there is no job you have been applied!</h1>}
            <div className='flex flex-col lg:flex-row gap-4'>
                <div className='w-full lg:w-3/4'>
                    {
                        appliedJob.map(job => <SingleApplyJob key={job.id} job={job} />)
                    }
                </div>
                {getJob.length !== 0 && <details className="dropdown">
                    <summary className="btn m-1">Filter your job</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><Link onClick={() => setFilter('all')}>All</Link></li>
                        <li><Link onClick={() => setFilter('Remote')}>Remote</Link></li>
                        <li><Link onClick={() => setFilter('Onsite')}>Onsite</Link></li>
                    </ul>
                </details>}
            </div>
        </div>
    );
};

export default AppliedJob;