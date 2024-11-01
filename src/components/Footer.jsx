import { Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const navigator  = useNavigate()
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
          <h1 className="max-w-3xl mx-auto text-center w-full lg:text-end font-semibold text-2xl underline cursor-pointer" onClick={()=>navigator("/")}>
            Home page
          </h1>
        </div>
      </footer>
    </>
  );
}
