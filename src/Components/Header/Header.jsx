import { faBars, faCartShopping, faFlag, faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Header() {
    return (
        <>
            <header>
                <div className=' flex gap-6 bg-Hcolor items-center justify-evenly text-sm text-white h-16'>
                    <div className=' hover:border p-1 border-transparent'>
                        <img src="../images/amazon_logo.png" alt="error" className=' w-24 h-10' />
                    </div>
                    <div className=' flex items-center gap-1  hover:border p-1 border-transparent'>


                        <div className=' text-gray-400 text-sm'>
                            <span className='pl-4'> Deliver to</span>

                            <div className='flex'>
                                <FontAwesomeIcon icon={faLocationDot} className='mr-2 h-3  text-3xl' />
                                <span className=' font-Roboto text-white text-base'>Pakistan</span>
                            </div>

                        </div>
                    </div>

                    <div className=" text-black flex h-12 border-transparent hover:border-3  rounded-xl">
                        <select name="name" id="id" className=' rounded-lg rounded-r-none bg-moonColor'>
                            <option value="all">All</option>
                            All</select>
                        <input type="text" className=' w-[780px] pl-4 text-base outline-none'  placeholder='Search Amazon'/>
                        <div className=' bg-peechColor p-2 text-xl rounded-lg rounded-l-none'>
                            <FontAwesomeIcon icon={faSearch} className=' text-3xl'/>
                        </div>
                    </div>



                    <div className='flex  items-center hover:border p-2 border-transparent' >
                        <FontAwesomeIcon icon={faFlag}/>
                        <select name="nume" id="d" className=' bg-transparent outline-none'>
                            <option value="vl">EN</option>
                            EN</select>
                    </div>
                    <div className=' hover:border p-2 border-transparent' >
                    <div className=' text-xs pl-1'>hello,SignIn</div>
                        <select name="nume" id="d" className=' bg-transparent outline-none'>
                            <option value="vl">
                            <div className=' text-base font-bold'>
                                Account & List
                            </div></option>
                            
                            </select>
                    </div>
                    <div className=' hover:border p-2 border-transparent' >
                        <div className='text-xs'>Returns</div>
                        <div className=' font-Roboto font-bold'>&Orders</div>
                    </div>
                    <div className=' hover:border p-2 border-transparent' >
                        <FontAwesomeIcon icon={faCartShopping} className=' text-3xl'/>
                        <span className='font-Roboto font-bold'> Cart</span>
                    </div>
                </div>
                <div className='flex items-center h-12 p-3 bg-navColor text-white '>
                    <div className='flex gap-2 items-center hover:border p-2 border-transparent'>
                        <FontAwesomeIcon icon={faBars} className=' text-xl'/>
                        <div>All</div>
                    </div>
                    
                    <ul className='flex gap-8 mt-3 items-center'>
                        <li className=' hover:border p-2 border-transparent' >Today's Deal</li>
                        <li className=' hover:border p-2 border-transparent' >Customer Service</li>
                        <li className=' hover:border p-2 border-transparent' >Resgistry</li>
                        <li className=' hover:border p-2 border-transparent' >Gift Cards</li>
                        <li className=' hover:border p-2 border-transparent' >Cells</li>
                    </ul>
                    
                </div>
            </header>



        </>
    )
}
