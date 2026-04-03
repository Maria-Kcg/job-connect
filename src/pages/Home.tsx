import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div className=" flex flex-col items-center text-center py-10 md:py-30 px-5">
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold mb-10">
                    JobConnect <span className="text-emerald-600" >Bénin</span>
                </h1>
                <p className="text-xl md:text-3xl font-semibold mb-10">Trouve ton emploi au Bénin</p>
                <p className="text-md md:text-xl mb-10">Des centaines d'offres vérifiées dans tous les secteurs, partout au Bénin. Lance ta carrière dès aujourd'hui.</p>

                <button onClick={() => navigate("/jobs")} 
                    className="flex gap-2 text-xl text-white text-white bg-emerald-600 rounded px-8 py-2">Commencer <ArrowRight />
                </button>
            </div>
        </>
    )
}

export default Home;