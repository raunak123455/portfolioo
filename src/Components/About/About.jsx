import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Crafting intuitive and responsive user interfaces is my
                  passion, with a skillset grounded in React.js, HTML, CSS, and
                  JavaScript. I thrive on delivering seamless user experiences
                  through precise API integration and performance optimization.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Building robust and scalable server-side architectures is my
                  forte, leveraging Node.js, Express.js, and MongoDB to create
                  efficient APIs and secure back-end systems that drive dynamic
                  web applications.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Blockchain Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  My journey in blockchain development is defined by expertise
                  in Solidity, where I design secure smart contracts and develop
                  DApps on Ethereum and EVM-compatible platforms. Additionally,
                  my focus on smart contract auditing ensures
                  vulnerability-free, optimized solutions for DeFi projects.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Sales, Marketing, and Business Development in Web3:
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I drive growth in the Web3 space, combining technical
                  understanding and marketing skills. I execute campaigns
                  targeting crypto communities, using trend analysis and user
                  insights to boost engagement and adoption. My expertise
                  includes strategic content, digital marketing, and building
                  partnerships for blockchain solutions.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
