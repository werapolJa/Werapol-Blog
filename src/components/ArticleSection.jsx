import { Axe, Linkedin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { blogPosts } from "../data/blogPosts";
import { BlogCard } from "./BlogCardArticles";
import axios from "axios";
import { handler } from "tailwindcss-animate";
export function ArticleSection() {
  const [navBarHead, setNavBarHead] = useState("Highlight");
  const [postData, setPostData] = useState([]);
  const [limitPost, setLimitPost] = useState(6);
  const [loadingPost, setLoadingPost] = useState(false);

  useEffect(() => {
    resDataPost();
  }, [limitPost]);

  const resDataPost = async () => {
    try {
      setLoadingPost(true);
      const res = await axios.get(
        `https://blog-post-project-api.vercel.app/posts?limit=${limitPost}`
      );
      setPostData(res.data.posts);
      setLoadingPost(false);
    } catch (error) {
      setLoadingPost(true);
      console.error;
    }
  };

  const handleViewMore = () => {
    setLimitPost((limit) => limit + 2);
  };

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
                  `hover:cursor-pointer hover:bg-[#e7e5e3] rounded-xl p-3 `
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
            onClick={() => setNavBarHead("Inspiration")}
          >
            Inspiration
          </button>

          <button
            className={
              navBarHead === "General"
                ? `bg-[#DAD6D1] rounded-xl p-3 `
                : `px-3 ` + `hover:cursor-pointer hover:bg-[#e7e5e3] rounded-xl`
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
              className="py-2 px-4 rounded-lg w-96 text-md focus-visible:outline focus-visible:ring-0  !border-0  focus-visible:ring-offset-0 "
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
            <option value="Inspiration">Inspiration</option>
            <option value="General">Ganeral</option>
          </select>
        </div>
      </div>

      <div className="max-w-7xl mx-auto my-10">
        {!loadingPost ? (
          <div className="lg:grid lg:grid-cols-2 gap-8">
            {navBarHead === "Highlight"
              ? postData.map((animal) => <BlogCard animal={animal} />)
              : postData
                  .filter((animalfilter) => animalfilter.category == navBarHead)
                  .map((animal) => <BlogCard animal={animal} />)}
          </div>
        ) : (
          <div class=" bg-white bg-opacity-60  z-10 h-full w-full flex items-center justify-center">
            <div class="flex items-center">
              <span class="text-7xl mr-4 ">Loading</span>
              <svg
                class="animate-spin h-24 w-40 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          </div>
        )}

        <h3
          className="max-w-7xl mx-auto text-center cursor-pointer text-xl mt-20 underline p-1"
          onClick={handleViewMore}
        >
          view more
        </h3>
      </div>
    </>
  );
}
