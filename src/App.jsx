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
    { id: 3, title: "Read for 1 hour", completed: false },
    { id: 4, title: "Create Linkeind", completed: true },
];
const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);
    const createTodo = (title) => {
        const newTodo = {
            id: todos.length + 1,
            title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };
    //Actualizar
    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };
    //Eliminar todos
    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    //Eliminar Todo Completados
    const removeTCompleted = () => {
        setTodos(todos.filter((todo) => todo.completed !== true));
    };

    return (
        <div className="bg-[url(./assets/images/bg-mobile-light.jpg)] bg-contain   bg-no-repeat bg-gray-200 min-h-screen">
            <CompHeader />

            <main className="container mx-auto px-4 mt-8 ">
                <CompTodoForm createTodo={createTodo} />
                <CompTodoList
                    todos={todos}
                    updateTodo={updateTodo}
                    removeTodo={removeTodo}
                />
                <CompTodoCalculos
                    todos={todos}
                    removeTCompleted={removeTCompleted}
                />
                <CompButtons />
            </main>
            <CompFooter />
        </div>
    );
};

export default App;
