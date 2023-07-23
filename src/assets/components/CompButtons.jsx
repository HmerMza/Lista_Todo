const CompButtons = () => {
    return (
        <div>
            <section className="container mx-auto px-4  ">
                <div className="mt-8 p-4 flex justify-center gap-4 bg-white rounded-md">
                    <button className="hover:text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>
        </div>
    );
};

export default CompButtons;
