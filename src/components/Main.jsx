import LOGO from "../assets/LOGO.png";

function Main() {
  return (
    <div className="flex justify-between gap-10">
      <main className="w-[70%] flex items-center">
        <div className="space-y-10 self-center">
          <h1 className="text-5xl font-bold">
            Build Faster with <br /> Reusable React{" "}
            <span className="text-blue-500">Code Chunks</span>
          </h1>
          <p className="font-semibold opacity-75">
            Chunkify gives developers a growing collection <br /> of reusable
            React components, hooks,
            <br /> UI patterns, and code snippets
            <br /> built for modern frontend development.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
            Get Started
          </button>
        </div>
      </main>
      <aside className="w-[30%]">
        <img src={LOGO} className="font-[400px] opacity-50" alt="codee" />
      </aside>
    </div>
  );
}

export default Main;
