import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import my from '../assets/my.jpg';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#d4e0f2]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
      <div className="flex flex-col justify-center h-full mt-10">
        <h4 className="text-4xl sm:text-7xl font-bold text-cyan-700 italic">
         Shrestha Sinha 
        </h4>
        <br />
        <h6 className="text-2xl font-bold text-cyan-600">Full Stack Developer</h6>
        <p className="text-gray-500 py-4 max-w-md">
           I am learning web development and have a command on MERN full stack.
          Currently, I love to work on web application using technologies like
          React, Tailwind, Next.js and Mongodb.
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 cursor-pointer"
          >
            More About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={my}  
          alt="my profile"
          className="rounded-full shadow-lg shadow-blue-500 mx-auto w-1/3 md:w-2/3 mt-20"
        />
      </div>
    </div>
  </div>
  );
};
export default Home;