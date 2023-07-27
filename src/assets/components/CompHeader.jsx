import { useEffect, useState } from "react";
import IconSol from "./icons/IconSol";
import Luna from "./icons/Luna";
const CompHeader = () => {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
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
