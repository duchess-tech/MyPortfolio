

import { forwardRef, useEffect, useState } from "react";
import ProjectHover from "../components/projectHover";

const Myproject = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  // State to track hover for each project
  const [hoverStates, setHoverStates] = useState({
    ecommerce: false,
    taskTracker: false,
    blog: false,
    airbnb: false,
    portfolio: false,
    cryptoTracker: false,
  });

  const handleMouseEnter = (project) => {
    setHoverStates((prev) => ({ ...prev, [project]: true }));
  };

  const handleMouseLeave = (project) => {
    setHoverStates((prev) => ({ ...prev, [project]: false }));
  };

  const openUrl = (url) => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const offset = window.innerHeight * 2;
      if (scrollTop > offset) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`project 2xl:w-full sm:w-full pb-2 bg-[#e5eaf3]  sm:p-6 
      `}
      ref={ref.myprojectRef}
    >
      <h1 className="2xl:text-5xl xl:text-4xl text-3xl tracking-in-expand text-center pt-4 mb-8 font-bold text-navyblue">
        PROJECTS
      </h1>
      <div className="flex flex-wrap sm:flex-wrap sm:gap-8 gap-8 xl:gap-10 justify-around w-4/5 mx-auto">
        {/* Ecommerce Project */}
        <div
          className="relative group"
          onMouseEnter={() => handleMouseEnter("ecommerce")}
          onMouseLeave={() => handleMouseLeave("ecommerce")}
        >
          <div
            onClick={() => openUrl("https://coco-essentials.vercel.app/")}
            className="2xl:w-56 2xl:h-56 w-56 h-72 border overflow-hidden rounded-xl"
          >
            <img src="cocoScreenshot.png" alt="Ecommerce-website-img" />
          </div>

          <ProjectHover
            show={hoverStates.ecommerce}
            link="https://coco-essentials.vercel.app/"
            title="Ecommerce"
            about="It's a user-friendly e-commerce platform with easy product browsing, quick cart addition, efficient filtering, and detailed descriptions for informed purchases, all wrapped in a secure checkout experience."
            color="#fff"
          />
        </div>

        {/* Task Tracker Project */}
        <div
          className="relative group"
          onMouseEnter={() => handleMouseEnter("taskTracker")}
          onMouseLeave={() => handleMouseLeave("taskTracker")}
        >
          <div
            onClick={() => openUrl("https://tasktracker-weld.vercel.app/")}
            className="2xl:w-96 2xl:h-96 w-56 h-72 border overflow-hidden rounded-xl"
          >
            <img src="tasktraker.jpg" alt="Tasktracker-img" />
          </div>

          <ProjectHover
            show={hoverStates.taskTracker}
            title="Tasktracker"
            about="Task tracker web application designed to streamline your workflow. Users can easily add, start, suspend, or delete tasks as needed, providing flexibility and organization in managing their projects and responsibilities."
            color="#fff"
          />
        </div>

        {/* Blog Project */}
        <div
          className="relative group"
          onMouseEnter={() => handleMouseEnter("blog")}
          onMouseLeave={() => handleMouseLeave("blog")}
        >
          <div
            onClick={() => openUrl("https://myblog.vercel.app")}
            className="2xl:w-96 2xl:h-96 w-56 h-72 border overflow-hidden rounded-xl"
          >
            <img src="blog.jpg" className="h-full w-full" alt="blog-img" />
          </div>

          <ProjectHover
            show={hoverStates.blog}
            title="Blog"
            about="Blog project where you can explore a wide range of engaging articles. Sign up to personalize your experience, learn more about the blog's background, and easily filter through topics to find content that interests you."
            color="#fff"
          />
        </div>

        {/* Airbnb Project */}
        <div
          className="relative group"
          onMouseEnter={() => handleMouseEnter("airbnb")}
          onMouseLeave={() => handleMouseLeave("airbnb")}
        >
          <div
            onClick={() => openUrl("https://airbnb-clone.vercel.app")}
            className="2xl:w-96 2xl:h-56 w-56 h-72 border overflow-hidden rounded-xl"
          >
            <img src="airbnb.png" alt="airbnb-img" />
          </div>

          <ProjectHover
            show={hoverStates.airbnb}
            title="Airbnb Clone"
            about="Introducing our Airbnb clone project – your virtual portal to explore the world of travel. Discover properties, filter by location and room count, and experience the joy of building your dream vacation. This project is a labor of love, crafted for learning and exploration. Happy travels!"
            color="#fff"
          />
        </div>

        {/* Portfolio Project */}
        <div
          className="relative group"
          onMouseEnter={() => handleMouseEnter("portfolio")}
          onMouseLeave={() => handleMouseLeave("portfolio")}
        >
          <div
            onClick={() => openUrl("https://my-portfolio-sjvo.vercel.app")}
            className="2xl:w-96 2xl:h-96 w-56 h-72 border overflow-hidden rounded-xl"
          >
            <img src="portfolio.png" className="h-full" alt="portfolio-img" />
          </div>

          <ProjectHover
            show={hoverStates.portfolio}
            link="http://my-portfolio-sjvo.vercel.app"
            title="Portfolio"
            about="Portfolio app showcasing my skills and projects. Discover an About Me section, browse through my tech stack, view showcased projects, and connect via the contact page."
            color="#fff"
          />
        </div>

        {/* Crypto Tracker Project */}
        <div
          className="relative group"
          onMouseEnter={() => handleMouseEnter("cryptoTracker")}
          onMouseLeave={() => handleMouseLeave("cryptoTracker")}
        >
          <div
            onClick={() => openUrl("https://crypto-tracker.vercel.app")}
            className="2xl:w-96 2xl:h-96 w-56 h-72 border overflow-hidden rounded-xl"
          >
            <img src="cryptoTracker.png" alt="cryptotracker-img" />
          </div>

          <ProjectHover
            show={hoverStates.cryptoTracker}
            title="CryptoTracker"
            about="Crypto tracker app with real-time cryptocurrency values, informative crypto blogs, and integrated chat features."
            color="#fff"
          />
        </div>
      </div>
    </div>
  );
});

export default Myproject;
