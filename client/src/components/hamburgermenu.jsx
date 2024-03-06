import { faContactBook } from "@fortawesome/free-regular-svg-icons";
import { faBrain, faFolder, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { RxHamburgerMenu } from 'react-icons/rx';

function HamburgerMenu(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center w-full justify-center  sm:px-4 sm:py-3 md:px-10 lg:hidden ">
            <button
                type="button"
                className="block text-white  md:hidden transition transform delay-100  "
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen &&
                    <div className="w-8 h-8 mt-3  flex justify-center items-center">
                        <svg className="h-8 w-6 fill-current" viewBox="0 0 24 24">
                            <path
                                d="M19.293 4.293a1 1 0 0 0-1.414 0L12 10.586 5.707 4.293a1 1 0 1 0-1.414 1.414l6 6a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0 0-1.414z"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                fill="white"

                            />
                        </svg>
                    </div>}
                {!isOpen && <div className='sm:hidden lg:hidden hidden'>
                    <RxHamburgerMenu color='white' size={30} />
                </div>}
            </button>

         <nav className={`md:flex  ${isOpen ? "block" : "block"}  lg:${isOpen ? "block" : "hidden"} w-full text-white  flex flex-wrap xl:justify-between text-sm p-2   sm:w-full sm:space-x-6 lg:hidden justify-around`}>
                <button className="">
                    <FontAwesomeIcon className="animate-bounce " icon={faPerson}></FontAwesomeIcon>
                    <br />
                    <a onClick={props.handleToaboutme} className=" cursor-pointer">
                        About me
                    </a>
                </button>
                <button>
                    <FontAwesomeIcon className=" animate-bounce" icon={faBrain}></FontAwesomeIcon>
                    <br />
                    <a onClick={props.handleToskills} className=" cursor-pointer">
                        My skills
                    </a>
                </button>
                <button>
                    <FontAwesomeIcon className="animate-bounce" icon={faFolder}></FontAwesomeIcon>
                    <br />
                    <a onClick={props.handletomyproject} className="cursor-pointer">
                        My projects
                    </a>
                </button>
                <button>
                    <FontAwesomeIcon className="animate-bounce" icon={faContactBook}></FontAwesomeIcon>
                    <br />
                    <a onClick={props.handleTocontact} className="cursor-pointer">
                        Contact me
                    </a>
                </button>
            </nav>
        </div>
    );
}

export default HamburgerMenu;
