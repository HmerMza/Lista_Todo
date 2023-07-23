const CompTodoForm = () => {
    return (
        <form className="bg-white rounded-md overflow-hidden py-3 flex gap-4 items-center px-4 mt-8">
            <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
            <input
                placeholder="create a new todo"
                type="text"
                className="w-full text-gray-400 outline-none"
            />
        </form>
    );
};

export default CompTodoForm;
