import type { Job } from "../types";
import { MapPin, Building2, Mail, Tally1 } from "lucide-react";


type Props = {
    jobs: Job[];
};

function JobsCard({ jobs }: Props) {
    return (
        <>
            <div className="flex flex-col gap-5 justify-centter py-5 px-5 md:px-15 lg:px-35">
                {jobs.map((job) => (
                    <div key={job.id} className="shadow shadow-emerald-600 rounded-lg p-5">
                        <div className="border-b py-3 border-slate-200">
                            <div>
                                <h2 className="text-xl font-semibold">{job.titre}</h2>
                                <p className="flex gap-1 items-center text-lg font-medium text-blue-800"><Building2 size={18} className="text-emerald-900 " /> {job.entreprise}</p>
                            </div>
                            <div className="flex gap-2">
                                <p className="flex gap-1 items-center"><MapPin size={18} className="text-emerald-900 " /> {job.lieu}</p>
                                <Tally1 />
                                <p>{job.type}</p>
                            </div>
                        </div>
                        <div className="border-b py-3 border-slate-200">
                            <p>Publié le {job.datePublication}x</p>
                            <p>{job.resume}</p>
                        </div>
                        <div className="border-b py-3 border-slate-200">
                            <p>Expérience: <span>{job.experience}</span></p>
                            <p>Compétences: <span>{job.competences}</span></p>
                        </div>
                        <div className="flex justify-between items-center pt-4">
                            <p className="flex gap-1 items-center"><Mail size={18} className="text-emerald-900" />Contact: <span className="text-blue-800">{job.contact}</span></p>
                            <button className="bg-emerald-50 py-1 px-3 rounded-xl text-emerald-900 cursor-pointer hover:text-white hover:bg-emerald-800    ">Voir détails...</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default JobsCard;