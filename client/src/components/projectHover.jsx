import React from 'react'
import { FaLink } from "react-icons/fa";
function ProjectHover(props) {
    return (
        <div style={{backgroundColor:props.color}}  className="absolute projectHover  text-center p-2 text-navyblue  w-72 h-52 xl:left-6 xl:top-6 top-0 -left-8  rounded-lg  hidden group-hover:block">
           <div className='pHovers relative w-full h-full bg-white p-1 '>
           <p className='font-bold '>{props.title}</p>
            <p className='text-justify mt-3 word-spacing' style={{fontSize:"12px"  }}>{props.about}</p>
            <a href={props.link} className=''>  <button className='border absolute bottom-2 right-0 rounded-lg w-24 p-1 flex justify-center items-center text-sm gap-2 '><span><FaLink size={10} color='#0f172a'/></span> Live Demo </button></a>
           </div>
        </div>
    )
}

export default ProjectHover
// my-portfolio-sjvo.vercel.app