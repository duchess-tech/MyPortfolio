import { forwardRef, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { animateScroll as scroll } from 'react-scroll'
import ProjectHover from "../components/projectHover"

const Myproject = forwardRef((props, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoverProject, sethoverProject] = useState(false)
    const PortfolioUrl = "my-portfolio-sjvo.vercel.app"
    const EcommerceUrl="heycommerce.vercel.app "
    const CryptoCrackerUrl="crypto-tracker-snowy-eight.vercel.app"
    const TaskTrackerUrl=""
    const BlogUrl=""
    const AirbnbUrl="airbnb-theta-seven.vercel.app"
    const OpenPortfolio= () => {
        window.open(PortfolioUrl, "_blank");
    }; 
    const OpenEcommerce= () => {
        window.open(EcommerceUrl, "_blank");
    };
  
     const OpenCryptoCracker= () => {
        window.open(CryptoCrackerUrl, "_blank");
    }; 
    const OpenBlog= () => {
        window.open(BlogUrl, "_blank");
    };
     const OpenTaskTracker= () => {
        window.open(TaskTrackerUrl, "_blank");
    };
    const OpenAirbnb= () => {
        window.open(AirbnbUrl, "_blank");
    };
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const offset = window.innerHeight * 2;
            if (scrollTop > offset) {
                setIsVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <div className={`project 2xl:w-full sm:w-full pb-2  bg-[#e5eaf3]  mt-0  sm:p-6 animate-on-scroll ${isVisible ? 'animate' : ''}`} ref={ref.myprojectRef}  >
            <h1 className='2xl:text-5xl xl:text-4xl text-3xl tracking-in-expand text-center  pt-4  mb-8 font-bold text-navyblue'>PROJECTS</h1>
            <div className="  flex flex-wrap sm:flex-wrap sm:gap-8 gap-8  justify-around w-4/5 mx-auto">

                <div className="relative group">
                    <div onClick={OpenEcommerce} className={` 2xl:w-56 2xl:h-56 w-56 h-72 border overflow-hidden  rounded-xl  hover:${hoverProject ? "" : ""}`}>
                        <img src="ecommerce.png" alt="Ecommerce-website-img" />
                    </div>

                    <ProjectHover 
                    link="http://heycommerce.vercel.app"
                    title="Ecommerce" about="it's a user-friendly e-commerce platform with easy product browsing,quick cart addition, efficient filtering, and detailed desriptions for informed purchases, all wrapped in a secure checkout experience."  />

                </div>
                <div className="relative group">
                    <div onClick={OpenTaskTracker} className=" 2xl:w-96 2xl:h-96 w-56 h-72  overflow-hidden  rounded-xl ">
                        <img src="tasktraker.jpg" alt="Tasktraker-img" />
                    </div>
                    <ProjectHover 
                    color="#ffffff" 
                    title="Tasktracker"
                     about="it's a task tracker application designed to streamline your workflow. Users can easily add, start, suspend,or delete tasks as needed,providing flexiblity and organization in managing their projects and responsility." />

                </div>
                <div className="relative group">
                    <div onClick={OpenBlog} className=" 2xl:w-96 2xl:h-96 w-56 h-72  overflow-hidden  rounded-xl ">
                        <img src="blog.jpg" className="h-full w-full" alt="blog-img" />
                    </div>
                    <ProjectHover
                    
                    title="Blog" />
                </div>

                <div className="relative group">
                    <div onClick={OpenAirbnb} className=" border 2xl:w-96 2xl:h-56 w-56 h-72  overflow-hidden  rounded-xl ">
                        <img src="airbnb.png" alt="airbnb-img" />
                    </div>
                    <ProjectHover title="Airbnb" about=" Introducing our Airbnb clone project – your virtual portal to explore the world of travel. Discover properties, filter by location and room count, and experience the joy of building your dream vacation. This project is a labor of love, crafted for learning and exploration. Happy travels!" />
                </div>
                <div className="relative group" >
                    <div onClick={OpenPortfolio} className=" border border-white 2xl:w-96 2xl:h-96 w-56 h-72  overflow-hidden  rounded-xl ">
                        <img src="portfolio.png" className="h-full" alt="portfolio-img" />
                    </div>
                    <ProjectHover
                    link="http://my-portfolio-sjvo.vercel.app"
                    about="its a portfolio app, showcasing my skills and projects. Discover an About Me section, browse through my tech stack, view showcased projects, and connect via the contact page."
                     title="Portfolio" />

                </div>

                <div className="relative group">
                    <div onClick={OpenCryptoCracker} className="  2xl:w-96 2xl:h-96 w-56 h-72  overflow-hidden  rounded-xl ">
                        <img src="cryptoTracker.png" alt="cryptotracker-img" />
                    </div>
                    <ProjectHover title="cryptoTracker" />

                </div>



            </div>
        </div>
    )
})
export default Myproject