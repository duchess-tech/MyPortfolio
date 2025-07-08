import { forwardRef } from "react";
import { IoCall } from "react-icons/io5";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdDownloadForOffline } from "react-icons/md";
import { RxGithubLogo } from "react-icons/rx";

const Aboutme = forwardRef((props, ref) => {
  const icons = [
    { Icon: IoCall, label: "Call Me", angle: -150, delay: "", link: "tel:+123456789" },
    { Icon: BsFillBriefcaseFill, label: "My Work", angle: -110, delay: "delay-150", link: "#portfolio" },
    { Icon: MdDownloadForOffline, label: "Resume", angle: -30, delay: "delay-300", link: "#download" },
    { Icon: RxGithubLogo, label: "GitHub", angle: -70, delay: "delay-500", link: "https://github.com" },
  ];

  return (
    <section
      ref={ref.aboutmeRef}
      className="w-full mt-24 py-20 px-6 sm:px-10 bg-[#1e1e2f] animate-fade-slide-in aboutme-bg"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 text-center lg:text-left">
        {/* Animated Image + Icons */}
        <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] pointer-events-none">
          <div className="absolute inset-0 rounded-full border-4 border-[#387d82] shadow-2xl scale-in-center"></div>

          <div className="absolute inset-0 animate-rotate-once pointer-events-auto">
            {icons.map(({ Icon, angle, delay, link, label }, index) => {
              const radius = 170;
              const rad = (angle * Math.PI) / 180;
              const x = radius * Math.cos(rad);
              const y = radius * Math.sin(rad);
              return (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`absolute ${delay} group`}
                  style={{
                    top: `calc(50% - 24px + ${y}px)`,
                    left: `calc(50% - 24px + ${x}px)`
                  }}
                >
                  <div className="relative w-12 h-12 flex items-center justify-center bg-[#f6efef] text-[#042a2d] rounded-full shadow-lg hover:bg-[#387d82] hover:text-white transition duration-300">
                    <Icon size={20} />
                    <span className="absolute top-[-2.5rem] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {label}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="absolute inset-0 z-0 rounded-full overflow-hidden">
            <img
              src="myimage.png"
              alt="Profile"
              className="w-full h-full object-cover object-top transform scale-in-center duration-1000 ease-in-out"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="max-w-2xl text-white animate-text-rise">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-wide">
            👋 Hello, I'm Esther
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-6 text-justify opacity-90">
            I’m a creative and results-driven <span className="text-[#66c8cf] font-semibold">Software Developer</span> with a strong foundation in building fast, accessible, and elegant digital experiences. From being an active member of the <span className="text-[#66c8cf] font-medium">Ibadan Techies Club</span> to contributing to real-world solutions, my journey is guided by a passion for coding and collaboration.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-8 text-justify opacity-90">
            Let’s connect and build something amazing. Whether it's a portfolio review or a startup collaboration, I’m just one click away.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="bg-[#387d82] text-white px-6 py-2 rounded-lg hover:bg-[#2e656b] transition transform hover:scale-105">
              Explore My Projects
            </button>
            <button
              onClick={props.handleTocontact2}
              className="border border-[#387d82] text-[#66c8cf] px-6 py-2 rounded-lg hover:bg-[#f0fafa] transition transform hover:scale-105"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>

     
    </section>
  );
});

export default Aboutme;



// import { forwardRef, useState } from "react";
// import { IoCall } from "react-icons/io5";
// import { BsFillBriefcaseFill } from "react-icons/bs";
// import { MdDownloadForOffline } from "react-icons/md";
// import { RxGithubLogo } from "react-icons/rx";

// const Aboutme = forwardRef((props, ref) => {
//   const [displayedText, setDisplayedText] = useState("");
//   const [hideImage, setHideImage] = useState(false);

//   return (
//     <div className="aboutme-bg tilt-in-tr relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-20" ref={ref.aboutmeRef}>
//       <div className="flex flex-col xl:flex-row items-center justify-center flex-wrap gap-12 xl:gap-24 overflow-hidden">
        
//         {/* TEXT SECTION */}
//         <div className="w-full xl:w-6/12 2xl:w-6/12">
//           <h1 className="text-3xl sm:text-4xl xl:text-5xl text-center xl:text-left tracking-in-expand text-[#a3a1a1] mb-4 xl:mt-12">
//             ABOUT ME
//           </h1>

//           <div className="p-4 xl:p-3">
//             <p className="text-sm sm:text-base xl:text-sm 2xl:text-md text-justify text-[#b3b2b2] leading-relaxed">
//               I am a Software developer, passionate about consistently advancing
//               my knowledge and skills to craft intuitive and dynamic user
//               interfaces. I belong to Ibadan Techies club, I have also attended
//               multiple seminars on coding. My journey into the tech world isn't only
//               about writing lines of code, it's about creating meaningful
//               solutions that have real impact. If you are curious about the
//               projects I've worked on or looking for a collaboration on a new
//               venture please feel free to explore my portfolio or reach out. I'm
//               always eager to connect and discuss the limitless possibilities
//               the tech world offers.
//             </p>

//             <div className="flex flex-col sm:flex-row sm:justify-between xl:justify-start xl:gap-6 mt-8 gap-4 sm:gap-0">
//               <button className="border-2 border-[#387d82] py-2 px-4 text-[#66c8cf] rounded-lg">
//                 See more
//               </button>
//               <button
//                 onClick={props.handleTocontact2}
//                 className="border-2 border-[#387d82] py-2 px-4 text-[#66c8cf] rounded-lg"
//               >
//                 Contact me
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* IMAGE + ICONS SECTION */}
//         <div className="relative w-56 h-56 sm:w-64 sm:h-64 xl:w-72 xl:h-72 mb-12 rounded-full bg-[#042a2d]">
          
//           {/* Profile Image */}
//           <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-[200px] sm:w-[260px] md:w-[280px] xl:w-[400px]">
//             <img
//               src="myimage.png"
//               className="w-full mt-2"
//               alt="my-picture"
//             />
//           </div>

//           {/* Icons */}
//           <div className="absolute top-8 left-2 xl:top-12 xl:left-2 w-[30px] h-[30px] xl:w-[50px] xl:h-[50px] flex justify-center items-center rounded-full bg-[#f6efef] text-[#042a2d] hover:bg-[#3c344b] hover:text-white bounce-in-top cursor-pointer">
//             <IoCall />
//           </div>

//           <div className="absolute top-1 left-14 xl:-top-3 xl:left-20 w-[30px] h-[30px] xl:w-[50px] xl:h-[50px] flex justify-center items-center rounded-full bg-[#f6efef] text-[#042a2d] hover:bg-[#3c344b] hover:text-white bounce-in-top cursor-pointer">
//             <BsFillBriefcaseFill />
//           </div>

//           <div className="absolute -top-2 left-24 xl:-top-3 xl:left-44 w-[30px] h-[30px] xl:w-[50px] xl:h-[50px] flex justify-center items-center rounded-full bg-[#f6efef] text-[#042a2d] hover:bg-[#3c344b] hover:text-white bounce-in-top cursor-pointer">
//             <MdDownloadForOffline size={20} />
//           </div>

//           <div className="absolute top-7 -right-1 xl:top-14 xl:-right-1 w-[30px] h-[30px] xl:w-[50px] xl:h-[50px] flex justify-center items-center rounded-full bg-[#f6efef] text-[#042a2d] hover:bg-[#3c344b] hover:text-white bounce-in-top cursor-pointer">
//             <RxGithubLogo size={20} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

// export default Aboutme;
