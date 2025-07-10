import '../css/App.css'
import HamburgerMenu from './hamburgermenu';
import { forwardRef } from 'react';


const Nav =({ refs, handleToaboutme, handleToskills, handletomyproject, handleTocontact,isScrolled }) => {

    

    return (
        <nav ref={refs?.NavRef} className={`w-full items-center lg:gap-72   xl:justify-center xl:p-6 p-2 sm:px-5 sm:py-4 fixed   top-0 z-50   flex flex-wrap lg:flex-nowrap md:flex-nowrap 2xl:flex-nowrap  xl:flex-nowrap    2xl:p-8 2xl:justify-between justify-center  lg:justify-evenly  ${
        isScrolled ? "bg-[#00222b]" : "bg-transparent"
      }`}
         >
          
            <div className='w-full xl:w-[100px] lg:w-[100px]  md:w-[100px]  2xl:w-[100px]  flex justify-center'>
                <h1 className='mt-4 xl:mt-1 text-center lg:text-4xl md:text-4xl xl:text-4xl text-white text-3xl skew-x-3  mb-4'>E.O</h1>
            </div>
            <div className=' lg:space-x-2 sm:hidden hidden md:hidden lg:block w-full xl:w-[665px] '  >
                <button className='border py-2 px-9 w-40  text-white  rounded transition ease-in-out  duration-300 hover:translate-y-1 hover:bg-indigo-300 transform ' onClick={handleToaboutme}>
                    About me</button>
                <button className='border  py-2 px-9  w-40  text-white rounded transition ease-in-out transform duration-300hover:translate-y-1 hover:bg-indigo-300 delay-150 hover:translate-y-1 ' onClick={handleToskills}>Stack</button>
                <button className='border  py-2 px-9  w-40  text-white rounded transition ease-in-out transform duration-300 delay-150  hover:bg-indigo-300 hover:translate-y-1 ' onClick={handletomyproject}>My project </button>
                <button className='border  py-2 px-5  w-40  text-white  rounded transition ease-in-out transform duration-300 delay-150 hover:translate-y-1 hover:bg-indigo-300 ' onClick={handleTocontact}>Contact me</button>
            </div>
            <HamburgerMenu
              handleToaboutme={handleToaboutme}
                handleTocontact={handleTocontact}
                handleToskills={handleToskills}
                handletomyproject={handletomyproject}
                isScrolled ={isScrolled}
             />


        </nav>
    )
}

export default Nav