import Image from "next/image";
import React from "react";
import TextAnimation from "./Text-Type-Animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Text Container */}
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&rsquo;m
            </span>
            <br></br>
            <TextAnimation />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            aperiam quae quod molestiae enim perferendis!{" "}
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="p-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-transparent hover:bg-slate-800 text-white mt-2">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="col-span-5 place-self-center mt-4 lg:m-0">
          <div className="rounded-full bg-[#181818] relative h-[250px] w-[250px] lg:h-[400px] lg:w-[400px]">
            <Image
              src="/images/hero-image.png"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              alt=""
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;