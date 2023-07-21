import CrossIcon from "./assets/components/icons/CrossIcon";
import Luna from "./assets/components/icons/Luna";
const App = () => {
    return (
        <div className="bg-[url(./assets/images/bg-mobile-light.jpg)]   bg-no-repeat bg-gray-200 min-h-screen">
            <header className="container mx-auto px-4 pt-8">
                <div className="flex justify-between">
                    <h1 className="uppercase text-white text-2xl font-semibold tracking-[0.3em]">
                        Todo
                    </h1>
                    <button>
                        <Luna />
                    </button>
                </div>
                <form className="bg-white rounded-md overflow-hidden py-3 flex gap-4 items-center px-4 mt-8">
                    <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
                    <input
                        placeholder="create a new todo"
                        type="text"
                        className="w-full text-gray-400 outline-none"
                    />
                </form>
            </header>
            <main className="container mx-auto px-4 mt-8 ">
                <div className="bg-white rounded-md">
                    <article className="flex gap-4 p-4 border-b">
                        <button className="rounded-full border-2 w-5 h-5 inline-block flex-none" />
                        <p className="grow text-gray-600">
                            Complete online JavaScript curse in Bluuweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 p-4 border-b ">
                        <button className="rounded-full border-2 w-5 h-5 inline-block flex-none" />
                        <p className="grow text-gray-600">
                            Complete online JavaScript curse in Bluuweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 p-4 border-b">
                        <button className="rounded-full border-2 w-5 h-5 inline-block flex-none" />
                        <p className="grow text-gray-600">
                            Complete online JavaScript curse in Bluuweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <section className="p-4 flex justify-between">
                        <span className="text-gray-400 ">3 items left</span>
                        <button className="text-gray-400">
                            clear completed
                        </button>
                    </section>
                </div>
            </main>
            <section className="container mx-auto px-4  ">
                <div className="mt-8 p-4 flex justify-center gap-4 bg-white rounded-md">
                    <button className="hover:text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>
            <section className="text-center mt-8 rounded-md">
                Drag and Drop
            </section>
        </div>
    );
};

export default App;
