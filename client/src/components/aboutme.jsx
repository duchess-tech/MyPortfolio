import { forwardRef, useEffect, useState } from "react";
import { IoCall } from "react-icons/io5";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdDownloadForOffline } from "react-icons/md";
import { RxGithubLogo } from "react-icons/rx";
import Nav from "./nav";

const Aboutme = ({refs}) => {
  const icons = [
    { Icon: IoCall, label: "Call Me", angle: -150, delay: "", link: "tel:+123456789" },
    { Icon: BsFillBriefcaseFill, label: "My Work", angle: -110, delay: "delay-150", link: "#portfolio" },
    { Icon: MdDownloadForOffline, label: "Resume", angle: -30, delay: "delay-300", link: "#download" },
    { Icon: RxGithubLogo, label: "GitHub", angle: -70, delay: "delay-500", link: "https://github.com" },
  ];
    const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
     const isMobile = window.innerWidth < 640;
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting); // true when not in hero/aboutme
      },
      {
      threshold: 0.1,
      rootMargin: isMobile ? "-900px 0px 0px 0px" : "-500px 0px 0px 0px", 
      }
    );

    if (refs.aboutmeRef.current) {
      sectionObserver.observe(refs.aboutmeRef.current);
    }

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  const handleTocontact2 = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
};
 const handleTocontact = () => {
        refs.contactRef.current.scrollIntoView({ behavior:"smooth"});
    };
  
    const handleToaboutme = () => {
        refs.aboutmeRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const handleToskills = () => {
        refs.skillsRef.current.scrollIntoView({ behavior: 'smooth',  block: "center", });
    };
    const handletomyproject = () => {
        refs.myprojectRef.current.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div  className="min-h-scren bg-cover bg-center" style={{ backgroundImage: 'url("/Heroo.png")' }}>
       <Nav  
         refs={refs}
        handleTocontact={handleTocontact}
        handleToaboutme={handleToaboutme}
        handleToskills={handleToskills}
        handletomyproject={handletomyproject}
        isScrolled={isScrolled}
        />
    <section
      ref={refs.aboutmeRef}
      className="w-full  md:pt-44 pt-60  py-20 px-6    sm:px-10  animate-fade-slide-in "
    >

       
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 text-center lg:text-left">
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
            I'm a creative and results-driven <span className="text-[#66c8cf] font-semibold">Software Developer</span> with a strong foundation in building fast, accessible, and elegant digital experiences. From contributing to real-world solutions,to continuously learning and collaborating, my journey is guided by a passion for coding and teamwork.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-8 text-justify opacity-90">
            Let's connect and build something amazing. Whether it's a portfolio review or a startup collaboration, I'm just one click away.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="bg-[#387d82] text-white px-6 py-2 rounded-lg hover:bg-[#2e656b] transition transform hover:scale-105">
              Explore My Projects
            </button>
            <button
              onClick={handleTocontact2}
              className="border border-[#387d82] text-[#66c8cf] px-6 py-2 rounded-lg hover:bg-[#f0fafa] transition transform hover:scale-105"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>

     
    </section></div>
  );
};

export default Aboutme;

