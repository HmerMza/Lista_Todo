import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import PropTypes from "prop-types";
import CrossIcon from "./icons/CrossIcon";
import Complete from "./icons/Complete";
const CompTodoList = ({ todos, updateTodo, removeTodo }) => {
    return (
        <Droppable droppableId="todos">
            {(droppableProvided) => (
                <div
                    className="bg-white rounded-t-md mt-8  dark:bg-Very-Dark-Desatured duration-1000"
                    ref={droppableProvided.innerRef}
                    {...droppableProvided.droppableProps}
                >
                    {todos.map((todo, index) => {
                        return (
                            <Draggable
                                key={todo.id}
                                index={index}
                                draggableId={`${todo.id}`}
                            >
                                {(draggableProvided) => (
                                    <article
                                        className="flex gap-4 p-4 border-b dark:border-gray-700 duration-1000"
                                        key={todo.id}
                                        ref={draggableProvided.innerRef}
                                        {...draggableProvided.dragHandleProps}
                                        {...draggableProvided.draggableProps}
                                    >
                                        <button
                                            className={`rounded-full border w-5 h-5 flex-none dark:border-gray-700 ${
                                                todo.completed &&
                                                "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
                                            } duration-1000`}
                                            onClick={() => updateTodo(todo.id)}
                                        >
                                            {todo.completed && <Complete />}
                                        </button>
                                        <p
                                            className={`grow text-gray-600 dark:text-gray-400 ${
                                                todo.completed && "line-through"
                                            } duration-1000`}
                                        >
                                            {todo.title}
                                        </p>
                                        <button
                                            className="flex-none"
                                            onClick={() => removeTodo(todo.id)}
                                        >
                                            <CrossIcon />
                                        </button>
                                    </article>
                                )}
                            </Draggable>
                        );
                    })}
                    {droppableProvided.placeholder}
                </div>
            )}
        </Droppable>
    );
};
CompTodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
};

export default CompTodoList;
