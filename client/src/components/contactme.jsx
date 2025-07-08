
import axios from "axios";
import { forwardRef, useEffect, useRef, useState } from "react";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Contact = forwardRef((props, ref) => {
    const n = useRef(null);
    const eref = useRef(null);
    const m = useRef(null);
    const [loading, setLoading] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.(com|gmail|yahoo|outlook|org|net)$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        const name = n.current.value.trim();
        const email = eref.current.value.trim();
        const message = m.current.value.trim();
        
        if (!name || !email || !message) {
            toast.error("All fields are required!", { 
                containerId: "my-toast-container",
                position: "bottom-center"
            });
            setLoading(false);
            return;
        }

        if (!validateEmail(email)) {
            toast.error("Invalid email format!", { 
                containerId: "my-toast-container", 
                position: "bottom-center" 
            });
            setLoading(false);
            return;
        }

        const user = { name, email, message };
        
        try {
            const response = await axios.post('http://localhost:6440/emails/portfolioEmail', user);
            const data = await response.data;
            toast.success(data.message, { 
                containerId: "my-toast-container",
                position: "bottom-center"
            });
        } catch (err) {
            console.log(err);
            if (err.response) {
                if (err.response.status === 500) {
                    console.log("Server Error Message:", err.response.data.message);
                }
                toast.error(err.response?.data?.message || "Failed to send message.", { 
                    containerId: "my-toast-container", 
                    position: "bottom-center"
                });
            }
        } finally {
            setLoading(false);
        }
    };

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
        <section ref={ref.contactRef}>
            <div className={`md:ml-52 text-center 2xl:mb-52 ${isScrolled ? "swing-in" : ""} mb-24`}>
                <div className='sm:w-full w-full md:w-9/12 text-center sm:mt-24 sm:p-6 p-3 mt-2 xl:mt-2'>
                    <h1 className='2xl:text-5xl text-3xl xl:text-4xl tracking-in-expand text-navyblue font-bold'>CONTACT ME</h1>
                    <div className='lg:max-w-4xl xl:w-7/12 h-96 mt-4 m-auto rounded-lg bg-[#042a2d] justify-center sm:w-full md:w-full'>
                        <input type="text" placeholder="Name" className="w-11/12 p-4 my-4 rounded-lg" ref={n} />
                        <input type="email" placeholder="Email" className="w-11/12 p-4 my-4 rounded-lg" ref={eref} />
                        <textarea placeholder="Message" maxLength={500} className="w-11/12 h-60 border-2 my-4 p-2 text-navyblue rounded-b-lg border-[#042a2d] bg-white" ref={m}></textarea>
                    </div>
                </div>
                <button className="bg-[#042a2d] xl:ml-2 p-2 w-32 text-white text-xl m-auto" onClick={handleSubmit}>
                    {loading ? <FontAwesomeIcon className="animate-spin" icon={faSpinner} /> : "Send"}
                </button>
            </div>

           
        </section>
        
    );
});

export default Contact;
