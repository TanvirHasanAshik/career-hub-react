const getAppliedJob = () => {
    const getJobs = localStorage.getItem('appliedJob');
    if (getJobs) {
        const jobs = JSON.parse(getJobs);
        return jobs;
    }
    return [];
};

const setAppliedJob = (id) => {
    const getJobsId = getAppliedJob();
    const job = getJobsId.find(jobId => jobId == id);
    if (!job) {
        getJobsId.push(id);
        localStorage.setItem('appliedJob', JSON.stringify(getJobsId));
    }
};


export { getAppliedJob, setAppliedJob };