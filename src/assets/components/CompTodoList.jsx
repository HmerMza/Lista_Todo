import PropTypes from "prop-types";
import CrossIcon from "./icons/CrossIcon";
const CompTodoList = ({ todos }) => {
    return (
        <div className="bg-white rounded-t-md mt-8">
            {todos.map((todo) => {
                return (
                    <article className="flex gap-4 p-4 border-b" key={todo.id}>
                        <button className="rounded-full border-2 w-5 h-5 inline-block flex-none" />
                        <p
                            className={`grow text-gray-600 ${
                                todo.completed && "line-through"
                            }`}
                        >
                            {todo.title}
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                );
            })}
        </div>
    );
};
CompTodoList.propTypes = {
    todos: PropTypes.array.isRequired,
};

export default CompTodoList;
