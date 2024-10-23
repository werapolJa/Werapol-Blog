import { Linkedin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { blogPosts } from "../data/blogPosts";
import { useState } from "react";

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

export function ArticleSection() {
  let [navBarHead, setNavBarHead] = useState("Highlight");

  console.log(navBarHead);

  let we = blogPosts.filter((an) => an.date < 5);
  console.log(we);

  return (
    <>
      <div className="flex justify-center lg:max-w-7xl lg:mx-auto  lg:justify-start">
        <label className="text-3xl w-96 font-bold  text-start block  ">
          Latest articles
        </label>
      </div>
      <div className="w-full flex items-center flex-col mt-10  lg:max-w-7xl lg:mx-auto lg:flex-row lg:justify-between rounded-xl bg-[#EFEEEB] ">
        <div className="hidden lg:flex gap-10 p-8">
          <button
            className={
              navBarHead === "Highlight"
                ? `bg-[#DAD6D1] rounded-xl p-3 cursor-pointer`
                : `px-3 ` +
                  `hover:cursor-pointer hover:bg-[#e7e5e3] rounded-xl `
            }
            onClick={() => setNavBarHead("Highlight")}
          >
            Highlight
          </button>
          <button
            className={
              navBarHead === "Cat"
                ? `bg-[#DAD6D1] rounded-xl p-3 cursor-pointer`
                : `px-3 ` +
                  `hover:cursor-pointer hover:bg-[#e7e5e3] rounded-xl `
            }
            onClick={() => setNavBarHead("Cat")}
          >
            Cat
          </button>
          <button
            className={
              navBarHead === "Inspitration"
                ? `bg-[#DAD6D1] rounded-xl p-3 cursor-pointer`
                : `px-3 ` +
                  `hover:cursor-pointer hover:bg-[#e7e5e3] rounded-xl `
            }
            onClick={() => setNavBarHead("Inspitration")}
          >
            Inspiration
          </button>
          <button
            className={
              navBarHead === "Mercedes"
                ? `bg-[#DAD6D1] rounded-xl p-3 cursor-pointer`
                : `px-3 ` +
                  `hover:cursor-pointer hover:bg-[#e7e5e3] rounded-xl `
            }
            onClick={() => setNavBarHead("Mercedes")}
          >
            Mercedes
          </button>
          <button
            className={
              navBarHead === "General"
                ? `bg-[#DAD6D1] rounded-xl p-3 `
                : `px-3 ` +
                  `hover:cursor-pointer hover:bg-[#e7e5e3] rounded-xl `
            }
            onClick={() => setNavBarHead("General")}
          >
            Ganeral
          </button>
        </div>
        <div className="flex flex-col gap-5 ">
          <div className="flex  relative  items-center rounded-lg py-5 lg:mr-5">
            <Input
              placeholder="Search"
              className="py-2 px-4 rounded-lg w-96 text-md "
            />

            <Search className=" text-sm px-1 right-1 absolute " />
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:hidden">
          <label>Category</label>
          <select
            name="searchbar"
            value={navBarHead}
            className="w-96 py-2 px-4 rounded-lg outline-none mb-5 "
            onChange={(e) => setNavBarHead(e.target.value)}
          >
            <option value="Highlight">Highlight</option>
            <option value="Cat">Cat</option>
            <option value="Inspitration">Inspitration</option>
            <option value="Mercedes">Mercedes</option>
            <option value="General">Ganeral</option>
          </select>
        </div>
      </div>
      <BlogCard />
    </>
  );
}

export function BlogCard() {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="lg:grid lg:grid-cols-2 gap-8">
        {blogPosts.map((animal, index) => (
          <div className="flex flex-col gap-4" key={index}>
            <a href="#" className="relative h-[212px] sm:h-[360px]">
              <img
                className="w-full h-full object-cover rounded-md"
                src={animal.image}
                alt="Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do"
              />
            </a>
            <div className="flex flex-col">
              <div className="flex">
                <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
                  {animal.category}
                </span>
              </div>
              <a href="#">
                <h2 className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline">
                  {animal.title}
                </h2>
              </a>
              <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
                {animal.description}
              </p>
              <div className="flex items-center text-sm">
                <img
                  className="w-8 h-8 rounded-full mr-2"
                  src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
                  alt="Tomson P."
                />
                <span>{animal.author}</span>
                <span className="mx-2 text-gray-300">|</span>
                <span>{animal.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
