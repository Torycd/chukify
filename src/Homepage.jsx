import CodeSection from "./components/CodeSection";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function Homepage() {
  return (
    <div className="">
      <div className="h-screen sm:px-[200px] py-7">
        <Navbar />
        <Main />
      </div>
      <div className="h-screen sm:px-[200px] py-7">
        <CodeSection />
      </div>
    </div>
  );
}

export default Homepage;
