import React from 'react'
import { FaLink } from "react-icons/fa";
function ProjectHover(props) {
    return (
        <div style={{backgroundColor:props.color}}  className="absolute projectHover  text-center p-2 text-navyblue  w-72 h-52 xl:left-6 xl:top-6 top-0 -left-8  rounded-lg  hidden group-hover:block">
           <div className='pHovers'>
           <p >{props.title}</p>
            <p className='text-justify mt-3' style={{fontSize:"12px"  }}>{props.about}</p>
            <a href={props.link}>  <button className='border rounded-lg w-40 p-1 flex justify-center items-center gap-3 m-auto mt-3'><span><FaLink /></span> Live Demo </button></a>
           </div>
        </div>
    )
}

export default ProjectHover
// my-portfolio-sjvo.vercel.app