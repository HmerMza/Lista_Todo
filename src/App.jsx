import { useState } from "react";
import CompButtons from "./assets/components/CompButtons";
import CompFooter from "./assets/components/CompFooter";
import CompHeader from "./assets/components/CompHeader";
import CompTodoCalculos from "./assets/components/CompTodoCalculos";
import CompTodoForm from "./assets/components/CompTodoForm";
import CompTodoList from "./assets/components/CompTodoList";
const initialStateTodos = [
    { id: 1, title: "go to the gym", completed: true },
    {
        id: 2,
        title: "Complete online JavaScript curse",
        completed: false,
    },
    { id: 3, title: "Read for 1 hour" },
];
const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);
    return (
        <div className="bg-[url(./assets/images/bg-mobile-light.jpg)] bg-contain   bg-no-repeat bg-gray-200 min-h-screen">
            <CompHeader />

            <main className="container mx-auto px-4 mt-8 ">
                <CompTodoForm />
                <CompTodoList todos={todos} />
                <CompTodoCalculos />
                <CompButtons />
            </main>
            <CompFooter />
        </div>
    );
};

export default App;
