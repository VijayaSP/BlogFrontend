import React from "react";
import { images } from "../../../constants";
import Search from "../../../components/Search";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleHeroSearch = ({ searchKeyword }) => {
    // send user to /blog with ?search=keyword
    navigate(`/blog?search=${encodeURIComponent(searchKeyword)}`);
  };
  return (
    <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row lg:items-center">
      <div className="mt-10 lg:w-1/2 lg:pl-10">
        <h1 className="font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
          Blogging, But Make It Smart — SOIT Style!
        </h1>
        <p className="text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
          Smart Postify isn’t just a blog — it’s your space to explore SOIT voices, dive into fresh ideas, and stay in sync with a tech-driven world. Built by students, for readers who think forward.
        </p>

        <Search
          className="mt-10 lg:mt-6 xl:mt-10"
          onSearchKeyword={handleHeroSearch}
        />
        <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
          <span className="text-dark-light font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base">
            Popular Tags:
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Design
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Experience
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Interfaces
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 ml-auto pr-10">
        <img
          className="w-full max-w-[600px] h-[500px] object-contain"
          src={images.HeroImage}
          alt="users are reading articles"
        />
      </div>
    </section>
  );
};

export default Hero;
