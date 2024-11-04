import React, { useState } from 'react';
import logo from "../assets/agromind.png";
import hamburgerMenu from "../assets/hamburgerMenu.svg";
import close from "../assets/close.svg";


export const Navbar = () => {

    const [toggle,setToggle]=useState(false)
    const handleClick = ()=> setToggle(!toggle)

  return (
    <div className='w-full h-[80px] bg-white border-b'>
        <div className='md:max-w-[1200px] max-w-[600px] m-auto w-full h-full flex justify-between items-center'>
            <img src={logo} alt="Logo" className='h-[25px]' />
                <div className='hidden md:flex items-center'>
                    <ul className='flex gap-4'>
                        <li className=' hover:text-orange-700'>Beranda</li>
                        <li className=' hover:text-orange-700'>Fitur</li>
                        <li className=' hover:text-orange-700'>Diskusi</li>
                        <li className=' hover:text-orange-700'>Kontak</li>
                    </ul>
                </div>
                <div className='hidden md:flex'>
                    <button className='px-8 py-3 rounded-2xl bg-[#362B0E] text-white font-bold'>Login</button>
                </div>

                <div className='md:hidden' onClick={handleClick}>
                    <img src={hamburgerMenu} alt="Close" />
                </div>
        </div>
        
        <div className={toggle?'absolute z-10 p-4 bg-white w-full px-8 md:hidden':'hidden'}>
            <ul>
                <li className='p-4 hover:bg-gray-100'>Beranda</li>
                <li className='p-4 hover:bg-gray-100'>Fitur</li>
                <li className='p-4 hover:bg-gray-100'>Diskusi</li>
                <li className='p-4 hover:bg-gray-100'>Kontak</li>
                <div className='flex flex-col my-4 gap-4'>
                   <button className='px-8 py-5 rounded-2xl bg-[#362B0E] text-white font-bold'>Login</button>
                </div>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar