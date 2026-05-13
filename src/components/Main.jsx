import ASIDE from "../assets/ASIDE.png";
import Button from "./Button";

function Main() {
  return (
    <div className="flex justify-between gap-10">
      <main className="w-[50%] flex items-center">
        <div className="space-y-10 self-center">
          <h1 className="text-5xl font-bold">
            Build Faster with <br /> Reusable React{" "}
            <span className="text-blue-500">Code Chunks</span>
          </h1>
          <p className="font-semibold opacity-75 text-xl">
            Chunkify gives developers a growing collection <br /> of reusable
            React components, hooks,
            <br /> UI patterns, and code snippets
            <br /> built for modern frontend development.
          </p>
          <Button>
            Get Started
          </Button>
        </div>
      </main>
      <aside className="w-[50%]">
        <img src={ASIDE} className="w-300 opacity-50" alt="codee" />
      </aside>
    </div>
  );
}

export default Main;
