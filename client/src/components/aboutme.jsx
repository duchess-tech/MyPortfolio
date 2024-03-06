import { forwardRef, useEffect, useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdDownloadForOffline } from "react-icons/md";
import { RxGithubLogo } from "react-icons/rx";
const Aboutme = forwardRef((props, ref) => {
  const [displayedText, setDisplayedText] = useState("");
  const [hideImage, setHideImage] = useState(false);

  //bg-[#f6efef]
  return (
    <div className="sm:m-0 aboutme-bg  tilt-in-tr   " ref={ref.aboutmeRef}>
      <div className="flex pt-40 xl:pt-34 items-center   flex-wrap  overflow-hidden justify-center gap-12">
        <div className="xl:w-6/12 w-full  ">
          <h1 className="xl:text-5xl text-3xl text-center tracking-in-expand text-[#d8b9b9] mb-2 xl:mt-12">
            ABOUT ME
          </h1>
          <div className="xl:p-3 p-4">
            <p className="2xl:text-md text-sm xl:text-sm text-justify text-[#d8b9b9]">
              I am a Software developer, passionate about consistently advancing
              my knowledge and skills to craft intuitive and dynamic user
              interfaces.I belong to Ibadan Techies club,i have also attended
              multiple seminars on coding. My journey into tech world isn't only
              about writing lines of code, it's about creating meaningful
              solutions that have real impact. If you are curious about the
              projects i've worked on or looking for a collaborate on a new
              venture please fell free to explore my portfolio or reachout,i'm
              always eager to connect and discuss the limitless possibilities
              the tech world offers.
            </p>
            <div className="xl:gap-6 xl:justify-start flex w-full justify-between">
              <button className="border-2 border-[#387d82] py-2 px-4 text-[#66c8cf] rounded-lg mt-8">
                See more
              </button>
              <button
                className=" border-2 border-[#387d82] py-2 px-4 text-[#66c8cf] rounded-lg mt-8"
                onClick={props.handleTocontact2}
              >
                Contact me
              </button>
            </div>
          </div>
          {/* <span className='cursor'>|</span> */}
        </div>
        <div className="xl:w-96 xl:h-96  w-56 h-56  rounded-full bg-[#042a2d] relative">
          <div className="absolute xl:left-9 xl:w-[300px] w-[200px]  left-5">
            <img
              src="myimage.png"
              className="xl:w-[300px] mt-2 w-[200px] "
              alt="my-picture"
            ></img>
          </div>

          <div className="cursor-pointer flex text-[#042a2d] bounce-in-top hover:text-[#ffffff]  justify-center items-center xl:w-[50px] xl:h-[50px] w-[30px] h-[30px]  hover:bg-[#3c344b] rounded-full bg-[#f6efef] absolute xl:top-12 xl:left-2 left-2 top-8">
            <IoCall />
          </div>
          <div className="cursor-pointer text-[#042a2d]  hover:text-white bounce-in-top  flex justify-center items-center xl:w-[50px] xl:h-[50px]  w-[30px] h-[30px] rounded-full bg-[#f6efef] hover:bg-[#3c344b] absolute  xl:-top-5 xl:left-28 left-14 -top-2">
            <BsFillBriefcaseFill />
          </div>
          <div className="cursor-pointer text-[#042a2d] hover:text-white bounce-in-top   flex justify-center items-center xl:w-[50px] xl:h-[50px] rounded-full w-[30px] h-[30px] bg-[#f6efef] hover:bg-[#3c344b] absolute xl:-top-6 xl:left-56 left-32 -top-2 ">
            <MdDownloadForOffline size={20} />
          </div>
          <div className="cursor-pointer text-[#042a2d] hover:text-white bounce-in-top  flex justify-center items-center xl:w-[50px] xl:h-[50px] w-[30px] h-[30px] rounded-full bg-[#f6efef] hover:bg-[#3c344b] absolute right-2 xl:top-14 top-7">
            <RxGithubLogo size={20} />
          </div>
        </div>
      </div>
    </div>
  );
});
export default Aboutme;
