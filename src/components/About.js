import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen text-white colora"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am a front-end developer! With a keen eye for design and a passion for creating intuitive user experience.Using my 
          expertise in HTML, CSS, and JavaScript,I am able to bring static designs to life and ensure that my website or application 
          looks and functions flawlessly. My ability to communicate effectively with our designers and back-end developers means that 
          they are able to collaborate seamlessly to create cohesive and user-friendly interfaces. Whether it's optimizing for mobile 
          or creating a responsive layout, i am always up for a challenge and constantly strives to stay up-to-date with the latest 
          technologies and industry best practices.
        </p>

      </div>
    </div>
  );
};

export default About;
