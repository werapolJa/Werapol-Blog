import "./App.css";
import heroimage from "./assets/heroimg.jpg";
function Navbar() {
  return (
    <>
      <nav className="lg:max-w-7xl sm:mx-auto mx-10 h-[80px] flex items-center ">
        <div className="flex justify-between w-full items-center">
          <div className=" text-3xl font-semibold">
            hh<span className="text-green-400">.</span>
          </div>
          <div className="inline md:hidden">
            <div className="">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios/50/menu--v1.png"
                alt="menu--v1"
              />
            </div>
          </div>
          <div className="hidden md:flex gap-3 ">
            <button className="border-black border-2 w-[127px] h-[48px] rounded-full hover:cursor-pointer">
              Log in
            </button>
            <button className="w-[127px] h-[48px] rounded-full bg-black text-white hover:cursor-pointer">
              Sign up
            </button>
          </div>
        </div>
      </nav>
      <div className="border-b-2 "></div>
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
