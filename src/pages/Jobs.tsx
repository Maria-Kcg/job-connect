import jobs from "../jobs.json"
import JobsCard from "../components/JobsCard";

function Jobs() {
    return (
        <>
            <JobsCard jobs={jobs} />
        </>
    )
}

export default Jobs;