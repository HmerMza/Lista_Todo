import { useEffect, useState } from "react";
import IconSol from "./icons/IconSol";
import Luna from "./icons/Luna";
//inicializamos con lo obtenido en el localStorage
const inicialStateDarkMode = localStorage.getItem("theme") === "dark";

const CompHeader = () => {
    //paso el valor inicializado
    const [darkMode, setDarkMode] = useState(inicialStateDarkMode);
    //creo el useEffect para estar pendiente si existe o no cambios en el darkMode, cuando presionamos el boton
    useEffect(() => {
        //en caso de ser verdadero
        if (darkMode) {
            //agrego la clase a el HTML
            document.documentElement.classList.add("dark");
            //para guardarlo en el localstorage, para futuras visitas
            localStorage.setItem("theme", "dark");
        } else {
            //en caso contrario lo elimino del HTML y tambien del localStorage
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    });
    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="uppercase text-white text-2xl font-semibold tracking-[0.3em]">
                    Todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <IconSol /> : <Luna />}
                </button>
            </div>
        </header>
    );
};

export default CompHeader;
