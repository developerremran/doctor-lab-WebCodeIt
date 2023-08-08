import React from 'react';

const About = () => {
    return (
        <div id="abouts" className="bg-color pt-16 pb-16">
          <div data-aos="fade-up"
         data-aos-duration="3000">
          <h2 className="text-4xl font-bold text-center text-white py-10 ">
            About <span className="text-[#A362FF]">Me!!</span>{" "}
          </h2>
          <div className="md:flex justify-center items-center flex-row-reverse px-11 mx-auto md:gap-10">
            <div className=" ">
              <div className="lg:w-full h-full relative  max-w-sm ">
              
              </div>
            </div>
    
            <div className="md:w-1/2">
            <div className="text-white mt-6 md:mt-0 text-justify">
              As a MERN Stack Developer, I have strong skills in React.js and
              JavaScript for building the front-end of websites. I also have
              experience with Node.js, Express.js, MongoDB, and Firebase, which are
              commonly used for back-end development. My focus is on creating
              responsive and user-friendly interfaces that work well on different
              browsers and devices. I am detail-oriented and strive to write clean
              and optimized code. <br /> <br />
              In addition to my core skills, I am familiar with popular frameworks
              like Tailwind, Bootstrap, and Material UI. I continuously update my
              knowledge and skills in web development to stay current with the
              latest technologies. My future goal is to become a full-stack
              developer, which means being proficient in both front-end and back-end
              development. <br />
              <span className="m-5">
        
    
              <button className="selectButton pt-5">My Resume</button>
             
              </span>
            </div>
            </div>
          </div>
        </div>
         </div>
      );
};

export default About;