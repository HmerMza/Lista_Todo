const CompButtons = ({ setFilter, filter }) => {
    return (
        <div>
            <section className="container mx-auto px-1 ">
                <div className="mt-8 p-4 flex justify-center gap-4 bg-white rounded-md dark:bg-Very-Dark-Desatured duration-1000">
                    <button
                        className={`${
                            filter === "all"
                                ? "text-blue-600 hover:text-gray-500"
                                : "text-gray-500 hover:text-blue-600"
                        }`}
                        onClick={() => setFilter("all")}
                    >
                        All
                    </button>
                    <button
                        className={`${
                            filter === "active"
                                ? "text-blue-600 hover:text-gray-500"
                                : "text-gray-500 hover:text-blue-600"
                        }`}
                        onClick={() => setFilter("active")}
                    >
                        Active
                    </button>
                    <button
                        className={`${
                            filter === "completed"
                                ? "text-blue-600 hover:text-gray-500"
                                : "text-gray-500 hover:text-blue-600"
                        }`}
                        onClick={() => setFilter("completed")}
                    >
                        Completed
                    </button>
                </div>
            </section>
        </div>
    );
};

export default CompButtons;
