import axios from "axios";
import { forwardRef, useEffect, useRef, useState } from "react"
import httpAuth from "../utils/http";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { IoMail } from "react-icons/io5";
import { GiRotaryPhone } from "react-icons/gi";
const Contact = forwardRef((props, ref) => {

    const n = useRef(null);
    const eref = useRef(null);
    const m = useRef(null);
    const [loading, setLoading] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);

    const [isHovered, setIsHovered] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            name: n.current.value,
            email: eref.current.value,
            message: m.current.value
        }
        try {
            setLoading(true)
            console.log("again");
            const response = await axios.post('http://localhost:6440/emails/portfolioEmail', user);

            const data = await response.json();
            console.log(data);
            setTimeout(() => {
                setLoading(false)
            }, [3000])
        }
        catch (err) {
            console.log(err)
            setTimeout(() => {
                setLoading(false)
            }, [3000])
        }
    }



    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  




    return (
        <section ref={ref.contactRef}  >
            <div className={`md:ml-52 text-center 2xl:mb-52 ${isScrolled ? "swing-in ":""  } mb-24`}>
                <div className='sm:w-full w-full md:w-9/12 text-center sm:mt-24 sm:p-6 p-3 mt-2  xl:mt-2'>
                    <h1 className='2xl:text-5xl text-3xl xl:text-4xl tracking-in-expand  text-navyblue  font-bold '>CONTACT ME</h1>
                    <div className=' lg:max-w-4xl xl:w-7/12 h-96 mt-4 m-auto rounded-lg bg-[#042a2d]  justify-center sm:w-full md:w-full '>
                        <input type="text" placeholder="Name" className="w-11/12 p-4  my-4 rounded-lg " ref={n} />
                        <input type="email" placeholder="Email" className="w-11/12 p-4  my-4  rounded-lg" ref={eref} />
                        <textarea placeholder="Message" maxLength={500} className="w-11/12 h-60 border-2  my-4 p-2 text-navyblue rounded-b-lg   border-[#042a2d] bg-white" ref={m}></textarea>
                    </div>
                </div>

                <button className=" bg-[#042a2d] xl:ml-2 p-2 w-32 text-white text-xl  m-auto" onClick={handleSubmit}> {loading ? <span>
                    <FontAwesomeIcon className="animate-spin" icon={faSpinner} /></span> : ""}    Send
                </button>


            </div>


            <div className="flex gap-7 justify-center">
                {/* <div className="  rounded-lg flex w-96 h-16 border-2  text-white">
                  <div
                         onMouseEnter={() => setIsHovered(true)}
                         onMouseLeave={() => setIsHovered(false)}
                         className={`w-[100px]  bg-white text-center border-2 border-black    text-black  rounded-l-full`}>
                         <IoMail className="mx-auto mt-3 " size={12} />
                         <h2>Email</h2>
                   </div>
                   { isHovered && 
                       <div className={`text-center w-[300px]   p-2 rounded-r-full bg-black  flex justify-center items-center text-sm ${isHovered ?"slider":""}`}>
                          <p>Estherodedoyin1@gmail.com</p>
                       </div>
                    }
                </div> */}
                {/* <div className="w-96 h-24 rounded-lg bg-white flex justify-center items-center">
                    <div className="text-center ">
                        <GiRotaryPhone className="mx-auto " color="navyblue" size={30} />
                        <h2>Phone-Number</h2>
                        <p>08138750529</p>
                    </div>

                </div>
                <div className="w-96 h-24 rounded-lg bg-white flex justify-center items-center">
                    <div className="text-center ">
                        <IoMail className="mx-auto" size={30} />
                        <h2>Github</h2>
                        <p>Estherodedoyin1@gmail.com</p>
                    </div>

                </div> */}


            </div>
        </section>
    )
})
export default Contact