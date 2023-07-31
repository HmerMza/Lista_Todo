import { useEffect, useState } from "react";
import CompButtons from "./assets/components/CompButtons";
import CompFooter from "./assets/components/CompFooter";
import CompHeader from "./assets/components/CompHeader";
import CompTodoCalculos from "./assets/components/CompTodoCalculos";
import CompTodoForm from "./assets/components/CompTodoForm";
import CompTodoList from "./assets/components/CompTodoList";
import { v4 as uuidv4 } from "uuid";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];
const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);
    //para estar atento a cualquier cambio e los todos
    useEffect(() => {
        //guardo el el local storage en formato Json los Todos, como un string
        // los todos son las llaves, lo que sigue es lo que guardamos
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    //Para Crear un Nuevo Todo
    const createTodo = (title) => {
        const newTodo = {
            id: uuidv4(),
            title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };
    //Actualizar o Cambiar su estado a falso o verdadero
    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                //recorre el array, cuando encuentra el todo con el mismo id, crea una copia exacta de ese todo, pero invierte su estado
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };
    //Eliminar todos, busca su id y el nuevo array lo pasa a la funcion encargada de modificar los todos
    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    //Eliminar Todo Completados,eliminara los todos que tengan su estado en true
    const removeTCompleted = () => {
        setTodos(todos.filter((todo) => todo.completed !== true));
    };

    const [filter, setFilter] = useState("all");
    //este metodo filtrara y retornara un nuevo array sin destruir el original
    const filtroTodos = () => {
        if (filter === "all") {
            return todos;
        } else if (filter === "active") {
            return todos.filter((todo) => !todo.completed);
        } else if (filter === "completed") {
            return todos.filter((todo) => todo.completed);
        }
    };

    return (
        <div className="bg-[url(./assets/images/bg-mobile-light.jpg)] dark:bg-[url(./assets/images/bg-mobile-dark.jpg)]  bg-contain   bg-no-repeat bg-gray-200 min-h-screen duration-1000 dark:bg-Very-Dark-Blue md:bg-[url(./assets/images/bg-desktop-light.jpg)] md:dark:bg-[url(./assets/images/bg-desktop-dark.jpg)]">
            <CompHeader />
            <main className="container mx-auto px-4 mt-8 md:max-w-xl">
                <CompTodoForm createTodo={createTodo} />
                <CompTodoList
                    todos={filtroTodos()}
                    updateTodo={updateTodo}
                    removeTodo={removeTodo}
                />
                <CompTodoCalculos
                    todos={todos}
                    removeTCompleted={removeTCompleted}
                />
                <CompButtons setFilter={setFilter} filter={filter} />
            </main>
            <CompFooter />
        </div>
    );
};

export default App;
