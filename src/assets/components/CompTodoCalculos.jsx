import PropTypes from "prop-types";
const CompTodoCalculos = ({ todos, removeTCompleted }) => {
    const total = todos.filter((todo) => !todo.completed).length;

    return (
        <section className="p-4 flex justify-between bg-white rounded-b-md dark:bg-Very-Dark-Desatured duration-1000">
            <span className="text-gray-400 ">{total} items left</span>
            <button className="text-gray-400" onClick={removeTCompleted}>
                clear completed
            </button>
        </section>
    );
};

CompTodoCalculos.propTypes = {
    todos: PropTypes.array.isRequired,
    removeTCompleted: PropTypes.func.isRequired,
};

export default CompTodoCalculos;
