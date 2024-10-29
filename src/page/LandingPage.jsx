import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "https://esm.sh/react-markdown@7";
function LandingPage() {
  const [totalPost, setTotalPost] = useState([]);
  const { landingId, total } = useParams();

  console.log(totalPost);
  const landingPageData = async () => {
    try {
      const res = await axios.get(
        `https://blog-post-project-api.vercel.app/posts?limit=${total}`
      );

      setTotalPost(res.data.posts);
      //   console.log(
      //     res.data.posts.content
      //       .split("##")
      //       .filter(Boolean)
      //       .map((section) => section.trim())
      //   );
    } catch (error) {}
  };

  useEffect(() => {
    landingPageData();
  }, []);
  return (
    <>
      {totalPost
        .filter((post) => post.id == landingId)
        .map((post) => (
          <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 key={post.id} ">
              <img
                src={post.image}
                alt=""
                className="w-full h-96 object-cover"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
                <main className="md:col-span-2">
                  <article className="bg-white shadow-sm rounded-lg overflow-hidden">
                    <div className="py-5 flex gap-3">
                      <h3>{post.category}</h3>
                      <h3>{post.date}</h3>
                    </div>
                    <div className="">
                      <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        {post.title}
                      </h1>
                      <div className="markdown flex gap-2 flex-col">
                        <ReactMarkdown className="">
                          {post.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </article>
                </main>

                <aside className="md:col-span-1 ">
                  <div className="bg-[#EFEEEB] shadow-sm rounded-lg p-6">
                    <div className="flex">
                      <img
                        src="/placeholder.svg?height=150&width=150"
                        alt="Author"
                        className="w-10 h-10 rounded-full bg-black "
                      />
                      <h2 className="text-xl font-semibold text-center mb-2">
                        Thompson P.
                      </h2>
                    </div>
                    <p className="text-gray-600 my-5">{post.title}</p>
                    <p className="text-gray-600 mb-4">{post.description}</p>
                  </div>
                </aside>
              </div>
            </div>
          </>
        ))}
    </>
  );
}

export default LandingPage;
