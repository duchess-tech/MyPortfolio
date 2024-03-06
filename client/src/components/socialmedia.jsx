import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react";
import { FacebookIcon, FacebookShareButton, FacebookShareCount, InstapaperIcon, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share"

function SocialMedia() {

    const [isIconsSpinning, setIconsSpinning] = useState(false);

    const startIconsSpinning = () => {
        setIconsSpinning(true);
        setTimeout(() => {
            setIconsSpinning(false);
        }, 2000)
    };

    useEffect(() => {
        window.addEventListener("scroll", startIconsSpinning);
        return () => {
            window.removeEventListener("scroll", startIconsSpinning);
        };
    }, []);



    return (
        <div className=' sm:w-full sm:mt-24 xl:mt-3 ' >
            <div className="flex 2xl:w-8/12 w-full m-auto justify-center flex-wrap 2xl:mt-5 gap-4  ">


                <FacebookShareButton url="https://web.facebook.com/esther.odedoyin" >
                    <FacebookIcon className={`2xl:h-14 2xl:w-14 w-12 h-12 rounded-full ${isIconsSpinning ? 'animate-spin' : ''}  bg-navyblue`} />

                </FacebookShareButton>

                <TwitterShareButton url="https://twitter.com/EstherOdedoyin">
                    <TwitterIcon className={`2xl:h-14 2xl:w-14 w-12 h-12 rounded-full ${isIconsSpinning ? 'animate-spin' : ''}  bg-navyblue`} />
                </TwitterShareButton>

                <LinkedinShareButton url="https://www.linkedin.com/in/estherodedoyin1/">
                    <LinkedinIcon className={`2xl:h-14 2xl:w-14 w-12 h-12 rounded-full ${isIconsSpinning ? 'animate-spin' : ''} bg-navyblue`} />
                </LinkedinShareButton>

                <WhatsappShareButton url="https://alvo.chat/13hk">
                    <WhatsappIcon className={`2xl:h-14 2xl:w-14 w-12 h-12 rounded-full  ${isIconsSpinning ? 'animate-spin' : ''} bg-navyblue`} iconFillColor="navyblue" bgStyle={{ fil: "navyblue" }} />
                </WhatsappShareButton>
                {/* 
                <div className='h-14 w-14 rounded-full  bg-navyblue  mb-6 mx-3 flex justify-center items-center '>
                    <FontAwesomeIcon icon={faFacebookF} color="white" size="2x" />
                </div>
                <div className='h-14 w-14 rounded-full bg-navyblue mb-6 mx-3 text-center flex justify-center items-center '>
                    <FontAwesomeIcon icon={faTwitter} color="white" size="2x" />
                </div>
                <div className='h-14 w-14 rounded-full bg-navyblue mb-6 mx-3 text-center flex justify-center items-center  '>
                    <FontAwesomeIcon icon={faLinkedinIn} color="white" size="2x" />
                </div>
                <div className='h-14 w-14 rounded-full bg-navyblue  mb-6 mx-3 mx-3 text-center flex justify-center items-center     11 '>
                    <FontAwesomeIcon icon={faInstagram} color="white" size="2x" />

                </div>

*/}

            </div>
        </div>
    )
}
export default SocialMedia