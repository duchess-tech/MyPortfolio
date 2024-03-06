import { faBootstrap, faCss3Alt, faGit, faHtml5, faJava, faJs, faNode, faNodeJs, faReact, faTeamspeak } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { forwardRef } from "react"
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa"


const Skills = forwardRef((props, ref) => {
    return (
        <section className="2xl:flex bg-[#042a2d] 2xl:justify-center  pb-9 pt-3  xl:pt-0  lg-pt-2" ref={ref.skillsRef}>
            <div className='2xl:w-1/2  xl:p-2  xl:w-full w-full sm:w-full sm:mt-24 sm:p-2 text-navyblue  xl:mt-0   text-center ' >
                <h1 className='2xl:text-5xl xl:text-4xl text-3xl text-center font-bold pt-12  xl:pt-4 xl:mt-0 tracking-in-expand text-white'>STACK</h1>
                <div className='flex  sm:gap-6 2xl:p-9 p-3 gap-5 justify-center sm:flex-wrap sm:p-2 sm-full flex-wrap m-auto xl:w-[700px] xl:gap-9  lg:w-10/12 sm:justify-center '>
                    <div className='shadow-pop-tr cover  2xl:w-56 xl:w-28 xl:h-32 sm:w-32  w-32 h-40 2xl:h-56 border-[#d6c8c8] border-4 md:mx-2 bg-white text-center  sm:my-5 rounded-2xl'>
                        <FontAwesomeIcon icon={faHtml5} size="3x"  className="mt-9  " color="#dd4b25" ></FontAwesomeIcon>
                        <h2 className="text-[#dd4b25] text-2xl ">HTML</h2>
                    </div>
                    <div className='shadow-pop-tr cover  2xl:w-56 xl:w-28 xl:h-32 sm:w-32 w-32 h-40 2xl:h-56 border-[#d6c8c8] border-4 bg-white text-center  sm:my-5  rounded-2xl'>
                        <FontAwesomeIcon icon={faBootstrap} size="3x" className="mt-9" color="#7810f1" ></FontAwesomeIcon>
                        <h2 className="text-[#7810f1] text-xl">Bootstrap</h2>

                    </div>
                    <div className='shadow-pop-tr cover  2xl:w-56 xl:w-28 xl:h-32  2xl:h-56  w-32 h-40 sm:w-32 border-[#d6c8c8] border-4  md:mx-3  bg-white text-center sm:my-5 rounded-2xl'>
                        <FontAwesomeIcon icon={faJs} size="3x" className="mt-9" color="#efd81d" ></FontAwesomeIcon>
                        <h2 className="text-[#efd81d] text-xl">Javascript</h2>

                    </div>
                    <div className='shadow-pop-tr cover  2xl:w-56 xl:w-28 xl:h-32 sm:w-32  w-32 h-40 2xl:h-56 bg-white border-[#d6c8c8] border-4 text-center sm:my-5 rounded-2xl'>
                        <FontAwesomeIcon icon={faReact} size="3x" className="mt-9" color="#ea2a6b" ></FontAwesomeIcon>
                        <h2 className="text-[#ea2a6b] text-xl">React</h2>
                    </div>
                    <div className='shadow-pop-tr cover  2xl:w-56 xl:w-28 xl:h-32 sm:w-32 2xl:h-56  w-32 h-40 md:mx-3 border-[#d6c8c8] border-4 bg-white text-center  sm:my-5 rounded-2xl'>
                        <FaNodeJs size="50" className="mt-9 mx-auto" color="#76a571" />
                        <h2 className="text-[#76a571] text-xl">Nodejs</h2>
                    </div>
                    <div className='shadow-pop-tr cover  2xl:w-56 xl:w-28 xl:h-32 sm:w-32 2xl:h-56  w-32 h-40  bg-white border-[#d6c8c8] border-4  text-center sm:my-5 rounded-2xl'>
                        <SiTailwindcss size="50" className="mt-9 mx-auto" color="#0ea5e9" />
                        <h2 className="text-[#0ea5e9] text-xl">Tailwind</h2>
                    </div>
                    <div className='shadow-pop-tr cover  2xl:w-56 xl:w-28 xl:h-32 sm:w-32 2xl:h-56  w-32 h-40  bg-white border-[#d6c8c8] border-4 text-center sm:my-5 rounded-2xl'>
                        <FontAwesomeIcon icon={faGit} size="3x" className="mt-9" color="#3f2e00" ></FontAwesomeIcon>
                        <h2 className="text-[#3f2e00] text-xl">Git</h2>
                    </div>
                    <div className='shadow-pop-tr cover  2xl:w-56 xl:w-28 xl:h-32 sm:w-32 2xl:h-56  w-32 h-40  bg-white border-[#d6c8c8] border-4 text-center sm:my-5 rounded-2xl'>
                        <SiMongodb color="#03e461" size="50" className="mt-9 mx-auto" />
                        <h2 className="text-[#03e461] text-xl">Mongodb</h2>
                    </div>
                </div>
            </div>

        </section>
    )
})
export default Skills