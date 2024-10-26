export function HeroSection({heroimage}) {
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
              src={heroimage}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="">
            <h5>-Author</h5>
            <h3 className="text-[24px] font-[600] my-3">{}</h3>
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
