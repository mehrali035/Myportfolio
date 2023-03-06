import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import git from "../assets/git.png";
import bootstrap from "../assets/bootstrap.png";
import sass from "../assets/sass.png";


const Portfolio = () => {
  const portfolios = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "shadow-yellow-500",
    
        },
        {
          id: 4,
          src: reactImage,
          title: "React",
          style: "shadow-blue-600",
        },  
        {
          id: 8,
          src: github,
          title: "GitHub",
          style: "shadow-gray-400",
        },
        {
          id: 9,
          src: git,
          title: "Git",
          style: "shadow-red-400",
        },
        {
          id: 10,
          src: bootstrap,
          title: "Bootstrap",
          style: "shadow-violet-900",
        },
        {
          id: 11,
          src: sass,
          title: "Sass",
          style: "shadow-pink-400",
        },
  ];




  return (
    <>
      <section name="skills" className=" section section-portfolio colors" id="portfolio-section">
        <div className="container">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500 color">Skills</h2>
          <p className="color py-6">These are the technologies I've worked with</p>
        </div>
        <div className="container grid grid-three-column py-24 portfolios-images">

          {portfolios.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-300 rounded-full ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-8 names color">{title}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )


};


export default Portfolio;

















// import React from "react";
// import html from "../assets/html.png";
// import css from "../assets/css.png";
// import javascript from "../assets/javascript.png";
// import reactImage from "../assets/react.png";
// // import nextjs from "../assets/nextjs.png";
// // import graphql from "../assets/graphql.png";
// import github from "../assets/github.png";
// import git from "../assets/git.png";
// // import tailwind from "../assets/tailwind.png";

// const Skills = () => {
//   const portfolios = [
//     {
//       id: 1,
//       src: html,
//       title: "HTML",
//       style: "shadow-orange-500",
//     },
//     {
//       id: 2,
//       src: css,
//       title: "CSS",
//       style: "shadow-blue-500",
//     },
//     {
//       id: 3,
//       src: javascript,
//       title: "JavaScript",
//       style: "shadow-yellow-500",

//     },
//     {
//       id: 4,
//       src: reactImage,
//       title: "React",
//       style: "shadow-blue-600",
//     },  
//     {
//       id: 8,
//       src: github,
//       title: "GitHub",
//       style: "shadow-gray-400",
//     },
//     {
//       id: 9,
//       src: git,
//       title: "Git",
//       style: "shadow-red-400",
//     },
//   ];
//   // bg-gradient-to-b from-gray-800 to-black
//   // return (
//   //   <div name="experience" className="to-black w-full h-screen colorh" >
//   //     <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
//   //       <div className="mob">
//   //         <p className="text-4xl font-bold border-b-4 border-gray-500 p-4 inline">
//   //           Skills
//   //         </p>
//   //         <p className="py-8">These are the technologies I've worked with</p>
//   //       </div>

//   //       <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 px-20 sm:px-0">
//   //         {techs.map(({ id, src, title, style }) => (
//   //           <div
//   //             key={id}
//   //             className={`shadow-md hover:scale-105 duration-300 py-4 rounded-full ${style}`}
//   //           >
//   //             <img src={src} alt="" className="w-20 mx-auto" />
//   //             <p className="mt-4">{title}</p>
//   //           </div>
//   //         ))}
//   //       </div>
//   //     </div>
//   //   </div>

//   // );
//   return (

//     <section class=" section section-portfolios" id="portfolio-section">
//       <div class="container">
//         <h2 class="text-4xl">Skills</h2>
//         <p> These are the technologies I've worked with</p>
//       </div>
//       <div class="container grid grid-three-column portfolios-images">

//         {techs.map(({ id, src, title, style }) => (
//           <div
//             key={id}
//             className={`shadow-md hover:scale-105 duration-300 rounded-full ${style}`}
//           >
//             <img src={src} alt="" className="w-20 mx-auto" />
//             <p className="mt-8 names">{title}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// };

// export default Skills;




