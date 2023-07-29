//esto es para en caso de no existir nada en el localStorage, pregunte por las preferencias de temas de windows
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme : dark)").matches)) {
    //en caso de que windows tenga el tema dark, añado la clase dark y la guardo en el localStorage
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
} else {
    //en caso contrario lo remuevo y cambio el tema
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light"
}