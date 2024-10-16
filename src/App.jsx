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
function HeroSection() {
  return (
    <>
      <section className="max-w-[1200px] mx-auto mt-20  ">
        <div className="flex flex-row items-center gap-20">
          <div className="w-full flex flex-col ">
            <div className="flex justify-end w-full ">
              <h2 className="text-[52px] font-[700] flex flex-col items-end m-0 space-y-0 w-[360px] text-end">
                Stay Informed, Stay Inspired
              </h2>
            </div>

            <div className=" flex justify-end">
              <h4 className="text-end w-[300px]">
                Discover a World of Knowledge at Your Fingertips. Your Daily
                Dose of Inspiration and Information.
              </h4>
            </div>
          </div>
          <div className="w-[1200px] h-[529px] ">
            <img
              src={heroimage}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="">
            <h5>-Author</h5>
            <h3 className="text-[24px] font-[600] my-3">Thompson P.</h3>
            <h4 className="mb-8 text-[18px] w-[347px]">
              I am a pet enthusiast and freelance writer who specializes in
              animal behavior and care. With a deep love for cats, I enjoy
              sharing insights on feline companionship and wellness.
            </h4>
            <h4 className="mb-8 text-[18px] w-[347px]">
              When i’m not writing, I spends time volunteering at my local
              animal shelter, helping cats find loving homes.
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}

export default App;
