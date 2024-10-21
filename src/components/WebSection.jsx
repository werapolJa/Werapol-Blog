import { Linkedin } from "lucide-react";

export function Navbar() {
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
export function HeroSection(props) {
  return (
    <>
      <section className="lg:max-w-[1200px] max-w-auto mx-auto lg:mt-20 mt-10 ">
        <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-20 gap-10">
          <div className="w-full flex flex-col ">
            <div className="flex lg:justify-end w-full justify-center">
              <h2 className="text-5xl font-bold lg:text-[52px] lg:font-bold flex lg:flex-col  text-center lg:items-end lg:w-[360px] mb-8 lg:text-end ">
                Stay Informed, Stay Inspired
              </h2>
            </div>

            <div className=" flex lg:justify-end justify-center">
              <h4 className="lg:text-end w-[300px]">
                Discover a World of Knowledge at Your Fingertips. Your Daily
                Dose of Inspiration and Information.
              </h4>
            </div>
          </div>
          <div className="lg:w-[1200px] lg:h-[529px] h-96 w-72 bg">
            <img
              src={props.heroimage}
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

export function Footer() {
  return (
    <>
      <footer className="lg:mt-20 mt-10  h-48 bg-[#EFEEEB] ">
        <div className="h-full  lg:max-w-7xl mx-auto  flex flex-col justify-center items-center gap-8 lg:flex lg:flex-row lg:justify-between ">
          <div className="flex justify-center  w-full lg:justify-start gap-8">
            <h1 className="font-semibold text-2xl">Get in touch</h1>
            <div className="bg-black w-8 h-8 rounded-full flex justify-center items-center">
              <Linkedin
                color="#ffffff"
                absoluteStrokeWidth
                className="text-white"
              />
            </div>
            <div className="bg-black w-8 h-8 rounded-full flex justify-center items-center">
              <Linkedin
                color="#ffffff"
                absoluteStrokeWidth
                className="text-white"
              />
            </div>
            <div className="bg-black w-8 h-8 rounded-full flex justify-center items-center">
              <Linkedin
                color="#ffffff"
                absoluteStrokeWidth
                className="text-white"
              />
            </div>
          </div>
          <h1 className="max-w-3xl mx-auto text-center w-full lg:text-end font-semibold text-2xl underline ">
            Home page
          </h1>
        </div>
      </footer>
    </>
  );
}
