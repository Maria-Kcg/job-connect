import { useParams } from "react-router-dom"
import jobs from "../jobs.json"

function Details() {
    const { id } = useParams();
    const job = jobs.find(job => job.id === Number(id));

    if (!job) {
        return <p>Offre non trouvée.</p>;
    }

    return (
        <>
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 my-10">
                <h1 className="text-3xl font-semibold text-emerald-800 mb-6 text-center md:text-left">
                    {job.titre}
                </h1>

                <div className="space-y-4 md:space-y-6">
                    <p className="text-lg"><span className="font-medium text-emerald-700">Entreprise :</span> {job.entreprise}</p>
                    <p className="text-lg"><span className="font-medium text-emerald-700">Lieu :</span> {job.lieu}</p>
                    <p className="text-lg"><span className="font-medium text-emerald-700">Type :</span> {job.type}</p>
                    <p className="text-lg"><span className="font-medium text-emerald-700">Expérience :</span> {job.experience}</p>

                    <div className="pt-4 border-t border-gray-200">
                        <p className="text-lg"><span className="font-medium text-emerald-700">Résumé :</span> {job.resume}</p>
                        <p className="text-lg mt-2"><span className="font-medium text-emerald-700">Description :</span> {job.description}</p>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                        <p className="text-lg"><span className="font-medium text-emerald-700">Date de publication :</span> {job.datePublication}</p>
                        <p className="text-lg"><span className="font-medium text-emerald-700">Date limite :</span> {job.dateLimite}</p>
                        <p className="text-lg mt-2"><span className="font-medium text-emerald-700">Compétences :</span> {job.competences.join(", ")}</p>
                    </div>

                    <div className="pt-4 border-t border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                        <p className="text-lg"><span className="font-medium text-emerald-700">Contact :</span> {job.contact}</p>
                        <p className="text-lg"><span className="font-medium text-emerald-700">Secteur :</span> {job.secteur}</p>
                    </div>
                </div>

                <div className="mt-6 flex justify-center">
                    <button className="bg-emerald-700 py-2 px-8 rounded-xl text-white cursor-pointer hover:bg-emerald-800">
                        Postuler
                    </button>
                </div>
            </div>
        </>
    )
}

export default Details