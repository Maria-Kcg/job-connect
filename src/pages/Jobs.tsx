import jobs from "../jobs.json"
import JobsCard from "../components/JobsCard";
import { useState } from "react";

function Jobs() {
    const [search, setSearch] = useState(""); // état pour le mot-clé

    const [filteredSecteur, setFilteredSecteur] = useState("");
    const [filteredType, setFilteredType] = useState("");
    const [filteredLocation, setFilteredLocation] = useState("");

    const filteredJobs = jobs.filter((job) => {
        const filteredBar =
            job.titre.toLowerCase().includes(search.toLowerCase()) ||
            job.entreprise.toLowerCase().includes(search.toLowerCase()) ||
            job.lieu.toLowerCase().includes(search.toLowerCase()) ||
            job.type.toLowerCase().includes(search.toLowerCase()) ||
            job.secteur.toLowerCase().includes(search.toLowerCase())

        const filteredSelect =
            (filteredSecteur === "" || job.secteur === filteredSecteur) &&
            (filteredType === "" || job.type === filteredType) &&
            (filteredLocation === "" || job.lieu === filteredLocation);

        return filteredBar && filteredSelect
    });

    return (
        <>
            <div className=" py-5 px-5 md:px-15 lg:px-35">
                <div>
                    <p className="text-2xl font-bold text-emerald-600 text-center my-10">Trouve ton emploi au Bénin</p>

                    <div className="flex justify-center mb-4">
                        <input type="text" placeholder="Recherche par mot-clé Ex: entreprise, secteur..." value={search} onChange={(e) => setSearch(e.target.value)}
                            className="border-2 border-emerald-600 bg-white rounded-full p-2 w-full md:w-1/2 mb-5"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center rounded-lg justify-center gap-10  px-5  md: px-10 mb-5 bg-emerald-500 py-5">
                    <select value={filteredSecteur} onChange={(e) => setFilteredSecteur(e.target.value)}
                        className="border border-emerald-600 bg-white rounded-lg p-2"   >
                        <option value="">Tous les secteurs</option>
                        <option value="Informatique">Informatique</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Ressources Humaines">Ressources Humaines</option>
                        <option value="Design">Design</option>
                        <option value="Finance">Finance</option>
                        <option value="Commerce">Commerce</option>
                        <option value="Data">Data</option>
                        <option value="Logistique">Logistique</option>
                        <option value="Service Client">Service Client</option>
                    </select>

                    <select value={filteredType} onChange={(e) => setFilteredType(e.target.value)}
                        className="border border-emerald-600 bg-white rounded-lg  p-2"   >
                        <option value="">Tous les types</option>
                        <option value="CDI">CDI</option>
                        <option value="CDD">CDD</option>
                        <option value="Stage">Stage</option>
                    </select>

                    <select value={filteredLocation} onChange={(e) => setFilteredLocation(e.target.value)}
                        className="border border-emerald-600 bg-white rounded-lg  p-2"   >
                        <option value="">Toutes les localisations</option>
                        <option value="Cotonou, Bénin">Cotonou, Bénin</option>
                        <option value="Porto-Novo, Bénin">Porto-Novo, Bénin</option>
                        <option value="Parakou, Bénin">Parakou, Bénin</option>
                    </select>
                </div>

                <JobsCard jobs={filteredJobs} />
            </div>
        </>
    )
}

export default Jobs;