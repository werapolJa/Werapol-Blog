import "./App.css";
import heroimage from "./assets/heroimg.jpg";
function Navbar() {
  return (
    <>
      <nav className="max-w-7xl mx-auto h-[80px] flex items-center">
        <div className="flex justify-between w-full">
          <div className=" text-3xl">hh.</div>
          <div className="flex gap-3">
            <button className="border-black border-2 w-[127px] h-[48px] rounded-full hover:cursor-pointer">
              Log in
            </button>
            <button className="w-[127px] h-[48px] rounded-full bg-black text-white hover:cursor-pointer">
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
