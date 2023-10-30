import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#101e34] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-12 rounded-md bg-cyan-600 flex flex-col justify-center items-center w-2/3">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-blue-900 ">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-2xl font-bold">
              <p>
                Hello! <br />
                I am Shrestha Sinha from jharkhand ,
                Nice to meet you!!! 

              </p>
            </div>
            <div>
              <p>
                {" "}
                A detail-oriented software engineering student with
                 technical skills in a collaborative and innovative environment, contributing
to real-world projects and gaining practical experience in software development and
problem-solving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;