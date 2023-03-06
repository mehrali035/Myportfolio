import React from "react";
import ecomweb from "../assets/portfolio/ecomweb.png";
import Eweb from "../assets/portfolio/Eweb.png";
import autoshop from "../assets/portfolio/autoshop.png";
import flipkart from "../assets/portfolio/flipkart.png";
import property from "../assets/portfolio/property.png";
import weatherapp from "../assets/portfolio/weatherapp.png";
import clock from "../assets/portfolio/clock.png";
import Digitalclock from "../assets/portfolio/Digitalclock.png";
import foodone from "../assets/portfolio/foodone.png";
import bulb from "../assets/portfolio/bulb.png";
import calcu from "../assets/portfolio/calcu.png";
import unit from "../assets/portfolio/unit.png";
import joke from "../assets/portfolio/joke.png";
import pizza from "../assets/portfolio/pizza.png";
import contact from "../assets/portfolio/contact.png";
import award from "../assets/portfolio/award.png";
import appform from "../assets/portfolio/appform.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ecomweb,
      href: "https://ecomweb-brown.vercel.app/",
      title: "React E-commerce web",
      description: "An effective ecommerce website include product categories, search functionality, detailed product descriptions, high-quality product images, customer reviews and ratings with secure checkout process"

    },
    {
      id: 2,
      src: Eweb,
      href: "https://ecommercewebsite-omega.vercel.app/",
      title: "React E-commerce web",
      description: "An effective ecommerce website include product categories, search functionality, detailed product descriptions, high-quality product images, customer reviews and ratings with secure checkout process"

    },
    {
      id: 3,
      src: autoshop,
      href: "https://react-auto-app.vercel.app/", 
      title: "Cars selling web",
      description: "a convenient and hassle-free platform to buy and sell cars. Whether you're in the market for a new vehicle or looking to sell your current one, we have you covered."

    },
    {
      id: 4,
      src: weatherapp,
      href: "https://weatherapp-alpha-ashy.vercel.app/",
      title: "Weather App",
      description: "A weather app build by using real weather API to check the current temprature "

    },
    {
      id: 5,
      src: property,
      href: "https://property-web-github-io.vercel.app/",
      title: "Design for Property selling website",
      description: "A modern Online selling and Renting Appartments website"

    },
    {
      id: 6,
      src: flipkart,
      href: "https://github.com/mehrali035/Flipcooding",
      title: "Flipkart CSS Design",
      description: "A simple basic design"
    },
    {
      id: 7,
      src: clock,
      href: "https://analog-clock-mehrali035.vercel.app/",
      title: "Analog-Clock",
      description: "Built by using HTML,CSS,Javascript"
    },
    {
      id: 8,
      src: Digitalclock,
      href: "https://digital-clock-omega-tan.vercel.app/",
      title: "Digital-Clock",
      description: "Built by using HTML,CSS,Javascript"
    },
    {
      id: 9,
      src: foodone,
      href: "https://github.com/mehrali035/foodone",
      title: "Food website Design",
      description: "Built by using HTML,CSS"
    
    },
    {
      id: 10,
      src: pizza,
      href: "https://foodweb-github-io.vercel.app/",
      title: "Website Design for Fast Food",
      description: "Built by using HTML,CSS"
    },
    {
      id: 11,
      src: bulb,
      href: "https://bulb-on-off-one.vercel.app/",
      title: "Bilb-On-off",
      description: "An Interesting Bulb-on-off function Built by using HTML,CSS,Javascript"
    },
    {
      id: 12,
      src: calcu,
      href: "https://calculator-nine-kappa-57.vercel.app/",
      title: "Calculator",
      description: "Built by using HTML,CSS,Javascript"
    },
    {
      id: 13,
      src: unit,
      href: "https://unit-converter-alpha.vercel.app/",
      title: "Unit-converter",
      description: "Built by using HTML,CSS,JavaScript"
    },
    {
      id: 14,
      src: award,
      href: "https://awarddesign-github-io.vercel.app/",
      title: "Figma design",
      description: "Built by using HTML,CSS"
    },
    {
      id: 15,
      src: appform,
      href: "https://github.com/mehrali035/Application-farm",
      title: "Application form",
      description: "Built by using HTML,CSS"
    },
    // {
    //   id: 16,
    //   src: slider,
    // },
    {
      id: 17,
      src: contact,
      href: "https://contactform-github-io.vercel.app/",
      title: "Contact form",
      description: "Built by using HTML,CSS,"
    },
    {
      id: 18,
      src: joke,
      href: "https://bestjokes-github-io.vercel.app/",
      title: "Jokes app ",
      description: "Built by using HTML,CSS,Javascript,API"
    },

  ];




  return (
    <>
      <section name="portfolio" class=" section section-portfolio colorp" id="portfolio-section">
        <div class="container">
          <h2 class="text-4xl font-bold inline border-b-4 border-gray-500 color">Latest works</h2>
          <p className="color py-6"> I have made some static web pages and Dynamic web applications working on some other projects as well to
            polish my web
            Development skills.</p>
        </div>
        <div class="container grid grid-three-column portfolio-images">

          {portfolios.map(({ id, src, href, description, title, tech }) => (
            // <div key={id} className="shadow-md shadow-gray-600 bg-sky-600 duration-200 hover:scale-105 rounded-lg left">
            //   <img
            //     src={src}
            //     href={href}
            //     className="rounded-md"

            //   />
            //   <div className="flex items-center justify-center">
            //    <a href={href}> <button className=" px-8 py-1 m-4 color inline text-align-center duration-200 hover  hover:scale-105">
            //       Click Here
            //     </button></a>
            //   </div>
            // </div>




            // <div class="wrapper">
            //   <div class="single-card">
            //     <div class="front">
            //       <img
            //         src={src}
            //         href={href}
            //         className="rounded-md" />
            //     </div>
            //     <div class="back">
            //       <div class="content">
            //         <h2>{title}</h2>
            //         <h4>{tech}</h4>
            //         <p>{description}</p>
            //       </div>
            //       <div className="flex items-center justify-center">
            //         <a href={href}> <button className=" px-8 py-1 m-4 color inline text-align-center duration-200 hover  hover:scale-105">
            //           Click me
            //         </button></a>
            //       </div>

            //     </div>
            //   </div>
            // </div>


            <div className="cards">
              <img className="cards__img" alt="img" src={src} />
              <div className="cards__overlay">
                <div className="card__title">{title}</div>
                <div className="card__runtime">{tech}
                  {/* <span className="card__rating">{href}<i className="fas fa-star" /></span> */}
                </div>
                <div className="card__description">{description}</div>
                <div className="flex items-center justify-center">
                <a href={href}> <button className=" px-8 py-1 m-4 color bg-sky-600 inline text-align-center duration-200 hover  hover:scale-105">
                  Click here
                </button></a>
              </div>
              </div>
            </div>













          ))}
        </div>
      </section>
    </>
  )


};


export default Portfolio;
