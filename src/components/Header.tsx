import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="flex justify-between items-center py-5 px-5 md:px-15 lg:px-30">
                    <h1 className="text-xl md:text-4xl font-semibold">
                        JobConnect <span className="text-emerald-600" >Bénin</span>
                    </h1>

                    <nav className="flex items-center gap-2 md:gap-4 items-center text-lg md:text-xl">
                        <NavLink to="/" className={({ isActive }) =>
                            isActive
                                ? "bg-emerald-50 text-emerald-600 px-3 py-2 rounded-lg"
                                : "hover:bg-gray-100 px-3 py-2 rounded-lg"
                        }>
                            Accueil
                        </NavLink>
                        <NavLink to="/jobs" className={({ isActive }) =>
                            isActive
                                ? "bg-emerald-50 text-emerald-600 px-3 py-2 rounded-lg"
                                : "hover:bg-gray-100 px-3 py-2 rounded-lg"
                        }>
                            Emplois
                        </NavLink>
                    </nav>
                </div>
            </header >
        </>
    )
}

export default Header;