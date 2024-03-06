import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedinIn, faThinkPeaks, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard, faComputer, faEnvelope, faLocation, faLocationCrosshairs, faLocationDot, faLocationPin, faLocationPinLock, faMicrophone, faMicrophoneSlash, faMobile, faMobileAlt, faMobileAndroid, faMobileButton, faNoteSticky, faPen, faPeopleGroup, faPhone, faRestroom, faTasksAlt, faTeeth, faTeethOpen } from '@fortawesome/free-solid-svg-icons'
import { EmailShareButton } from 'react-share'
import Mailbtn from '../utils/mailbtn'

function Footer() {




    return (

        <div className='lg:flex sm:p-2 pb-32 xl:pb-0 bg-[#f6efef] lg:items-center p-4 justify-around sm:text-center sm:column-reverse'>
            <div className="lg:w-72 sm:w-full 2xl:my-9 my-2  w-full  text-sm">
                <h1><FontAwesomeIcon icon={faLocationDot} color="rgb(31,41,55)" size="2x"></FontAwesomeIcon></h1>
                <p>Address</p>
                <p>No 16,Aho Agbeja estate,Ajibode UI Ibadan,Oyo State. </p>

            </div>
            <div className=" lg:w-72  sm:w-full   my-9  text-sm">
                <h1><FontAwesomeIcon icon={faMobileAlt} color="rgb(31,41,55)" size="2x"></FontAwesomeIcon></h1>

                <p >
                    Phone-number
                </p>
                <p>08138750529</p> 
                </div>
            <div className="lg:w-72  sm:w-full  text-sm">
                <Mailbtn mailto="mailto:Estherodedoyin1@gmail.com">
                </Mailbtn >
                <p>Email Address</p>
                <p>Estherodedoyin1@gmail.com</p>
            </div>
        </div>
    )
}
export default Footer