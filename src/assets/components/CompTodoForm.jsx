import { useState } from "react";

const CompTodoForm = ({ createTodo }) => {
    const [title, setTitle] = useState("");
    const handleSubmitAddTodo = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            return setTitle("");
        }
        createTodo(title);
        setTitle("");
    };
    return (
        <form
            onSubmit={handleSubmitAddTodo}
            className="bg-white rounded-md overflow-hidden py-3 flex gap-4 items-center px-4 mt-8"
        >
            <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
            <input
                placeholder="create a new todo"
                type="text"
                className="w-full text-gray-400 outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default CompTodoForm;
