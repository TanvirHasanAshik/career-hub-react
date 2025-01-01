import React, { useEffect, useState } from 'react';
import { use } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { getAppliedJob, setAppliedJob } from '../../utility/appliedJob';

const DetailsJob = () => {
    const { id } = useParams();
    const jobs = useLoaderData();
    const [jobDetails, setJobDetails] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const job = jobs.find(job => job.id == id);
        setJobDetails(job);
    }, [jobs]);

    const { job_title,
        company_name,
        remote_or_onsite,
        job_description,
        job_responsibility,
        location, job_type,
        salary,
        educational_requirements,
        experiences,
        contact_information
    } = jobDetails;

    const handleAppliedJob = (id) => {
        const getApplyJob = getAppliedJob();
        if (getApplyJob.includes(`${id}`)) {
            alert('You have been applied already!');
            return;
        }
        setAppliedJob(id);
        alert('You have been applied successfully!');
        navigate('/');
    }

    return (
        <div className='container mx-auto my-10 border-t pt-4 '>
            <div className='flex flex-col lg:flex-row gap-4'>
                <div className=' flex-grow-0 md:flex-grow px-8'>
                    <div className='flex flex-col md:flex-row md:items-center justify-between gap-4 '>
                        <h1 className='text-md font-bold'>Job: <span className='text-success'>{job_title}.</span></h1>
                        <h2 className='text-md font-bold'>Work Type: <span className='text-accent'>{remote_or_onsite}</span></h2>
                        <h2 className='text-md font-bold'>Company: <span className='text-accent'>{company_name}</span></h2>
                    </div>
                    <div className='my-5'>
                        <p className='text-md font-bold mb-4'>Job Description: <br /> <span className='text-gray-500 font-semibold'>{job_description}</span></p>
                        <p className='text-md font-bold mb-4'>Job Responsibility: <br /> <span className='text-gray-500 font-semibold'>{job_responsibility}</span></p>
                        <p className='text-md font-bold mb-4'>Education: <br /> <span className='text-gray-500 font-semibold'>{educational_requirements}</span></p>
                        <p className='text-md font-bold mb-4'>Experiences: <br /> <span className='text-gray-500 font-semibold'>{experiences}</span></p>
                        <p className='text-md font-bold mb-4'>job Type: <br /> <span className='text-gray-500 font-semibold'>{job_type}</span></p>
                        <p className='text-md font-bold mb-4'>Salary: <br /> <span className='text-gray-500 font-semibold'>{salary}</span></p>
                        <p className='text-md font-bold mb-4'>Location: <br /> <span className='text-gray-500 font-semibold'>{location}</span></p>

                    </div>
                </div>
                <div className='w-full  lg:w-2/3'>
                    <div className='bg-gray-300 p-10 rounded-md'>
                        <h1 className='text-md font-bold'>Contact Information:</h1>
                        <p className='text-md font-bold'>Email: <span className='text-gray-500 font-semibold'>{contact_information?.email}</span></p>
                        <p className='text-md font-bold'>Phone: <span className='text-gray-500 font-semibold'>{contact_information?.phone}</span></p>
                        <p className='text-md font-bold'>Address: <span className='text-gray-500 font-semibold'>{contact_information?.address}</span></p>
                        <button
                            className="btn border-gray-200 w-full btn-success mt-2 text-warning font-bold"
                            onClick={() => handleAppliedJob(id)}
                        >Ready to apply</button>

                    </div>
                </div>

            </div>
        </div >
    );
};

export default DetailsJob;