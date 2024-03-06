import React from 'react'
import { FaLink } from "react-icons/fa";
function ProjectHover(props) {
    return (
        <div className="absolute projectHover  text-center text-navyblue  w-72 h-52 xl:left-6 xl:top-6 top-0 -left-8  rounded-lg  hidden group-hover:block">
            <p>{props.title}</p>
            <button className='border rounded-lg w-48 p-2 flex justify-center items-center gap-3'><span><FaLink /></span> Live Demo</button>
        </div>
    )
}

export default ProjectHover