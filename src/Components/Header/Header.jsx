import { faBars, faCartShopping, faFlag, faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Header() {
    return (
        <>
            <header>
                <div className=' flex md:gap-2 bg-Hcolor items-center text-xs   text-white h-16 box-border'>
                    <div className=' hover:border p-1 border-transparent'>
                        <img src="../images/amazon_logo.png" alt="error" className=' w-16 h-7 md:w-24 md:h-10' />
                    </div>
                    <div className='   hover:border hidden md:block  p-1 border-transparent'>


                        <div className=' text-gray-400 flex items-center '>
                        <FontAwesomeIcon icon={faLocationDot} className='  text-xl px-2' />
                           

                            <div className='flex flex-col'>
                            <div className=' text-xs'> Deliver to</div>
                            <div className=' font-Roboto text-xs md:text-sm text-white'>Pakistan</div>
                            </div>

                        </div>
                    </div>

                    <div className=" text-black flex grow h-8 md:h-10 border-transparent hover:border-3  rounded-xl">
                        <select name="name" id="id" className=' rounded-lg rounded-r-none md:text-sm text-xs bg-moonColor'>
                            <option value="all">All</option>
                            <option value="all">Good</option>
                            All</select>
                        <input type="text" className=' md:text-sm text-xs flex grow text-center outline-none '  placeholder='Search Amazon'/>
                        <div className=' bg-peechColor p-1  md:p-2 text-xl rounded-lg rounded-l-none'>
                            <FontAwesomeIcon icon={faSearch} className='  md:text-2xl'/>
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                    <div className='flex  items-center hover:border p-2 border-transparent' >
                        <FontAwesomeIcon icon={faFlag}/>
                        <select name="nume" id="d" className=' bg-transparent md:text-sm text-xs outline-none'>
                            <option value="vl">EN</option>
                            EN</select>
                    </div>
                    </div>
                    <div className=' hover:border p-2 border-transparent' >
                    <div className=' text-xs pl-1'>Hello,SignIn</div>
                        <select name="nume" id="d" className=' bg-transparent hidden md:block outline-nonemd:text-sm text-xs font-bold '>
                            <option value="vl">
                            <div className=' text-base font-bold'>
                                Account & List
                            </div></option>
                            
                            </select>
                    </div>
                    <div className=' hover:border p-2 hidden md:block border-transparent' >
                        <div className='text-xs'>Returns</div>
                        <div className=' font-Roboto font-bold md:text-sm text-xs'>&Orders</div>
                    </div>
                  <div className=' hidden md:block'>

                  
                    <div className=' hover:border p-2 border-transparent flex items-center' >
                        <FontAwesomeIcon icon={faCartShopping} className=' text-xs md:text-3xl'/>
                        <div className='font-Roboto font-bold md:text-sm text-xs'> Cart</div>
                    
                    </div>
                    </div>
                </div>
                <div className='flex items-center h-12 p-3 text-xs md:text-sm bg-navColor text-white '>
                    <div className='flex gap-2 items-center hover:border p-2 border-transparent '>
                        <FontAwesomeIcon icon={faBars} className=' text-xl'/>
                        <div>All</div>
                    </div>
                    <div className=' hidden md:block'>
                    <ul className='flex  md:gap-8 items-center text-xs'>
                        <li className=' hover:border p-2 border-transparent ' >Today's Deal</li>
                        <li className=' hover:border p-2 border-transparent' >Customer Service</li>
                        <li className=' hover:border p-2 border-transparent' >Resgistry</li>
                        <li className=' hover:border p-2 border-transparent' >Gift Cards</li>
                        <li className=' hover:border p-2 border-transparent' >Cells</li>
                    </ul>
                    </div>
                </div>
            </header>



        </>
    )
}
