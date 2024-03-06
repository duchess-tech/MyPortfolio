import { forwardRef, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { animateScroll as scroll } from 'react-scroll'
import ProjectHover from "../components/projectHover"

const Myproject = forwardRef((props, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoverProject, sethoverProject] = useState(false)
    const externalURL = "https://my-portfolio-1-iota.vercel.app/"
    const handleButtonClick = () => {
        window.open(externalURL, "_blank");

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
                    <div onClick={handleButtonClick} className={` 2xl:w-56 2xl:h-56 w-56 h-72 border overflow-hidden  rounded-xl  hover:${hoverProject ? "" : ""}`}>
                        <img src="ecommerce.png" alt="Ecommerce-website-img" />
                    </div>

                    <ProjectHover title="Ecommerce" />

                </div>
                <div className="relative group">
                    <div onClick={handleButtonClick} className=" 2xl:w-96 2xl:h-96 w-56 h-72  overflow-hidden  rounded-xl ">
                        <img src="tasktraker.jpg" alt="Tasktraker-img" />
                    </div>
                    <ProjectHover title="Tasktracker" />

                </div>
                <div className="relative group">
                    <div onClick={handleButtonClick} className=" 2xl:w-96 2xl:h-96 w-56 h-72  overflow-hidden  rounded-xl ">
                        <img src="blog.jpg" className="h-full w-full" alt="blog-img" />
                    </div>
                    <ProjectHover title="Blog" />
                </div>

                <div className="relative group">
                    <div onClick={handleButtonClick} className=" border 2xl:w-96 2xl:h-56 w-56 h-72  overflow-hidden  rounded-xl ">
                        <img src="airbnb.png" alt="airbnb-img" />
                    </div>
                    <ProjectHover title="Airbnb" />
                </div>
                <div className="relative group" >
                    <div onClick={handleButtonClick} className=" border border-white 2xl:w-96 2xl:h-96 w-56 h-72  overflow-hidden  rounded-xl ">
                        <img src="portfolio.png" className="h-full" alt="portfolio-img" />
                    </div>
                    <ProjectHover title="Portfolio" />

                </div>

                <div className="relative group">
                    <div onClick={handleButtonClick} className="  2xl:w-96 2xl:h-96 w-56 h-72  overflow-hidden  rounded-xl ">
                        <img src="cryptoTracker.png" alt="cryptotracker-img" />
                    </div>
                    <ProjectHover title="cryptoTracker" />

                </div>



            </div>
        </div>
    )
})
export default Myproject