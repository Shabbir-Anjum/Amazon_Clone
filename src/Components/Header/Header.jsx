import { faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons'
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
                           
                            <div>
                            <FontAwesomeIcon icon={faLocationDot} className='mr-2 h-3' />
                            <span className=' font-Roboto text-white'>Pakistan</span>
                            </div>
                            
                        </div>
                    </div>

                    <div className="mb-3 relative overflow-hidden rounded-md text-black">
    <div className='absolute left-0 bg-moonColor border-r-1 border-black h-full'>
        <select name="option" id="option" className="h-full outline-none bg-transparent border-r border-gray-300">
            <option value="All">All</option>
            <option value="Books">Books</option>
            <option value="Electronics">Electronics</option>
        </select>
    </div>
    <input type="email" className="form-control pl-10" id="exampleFormControlInput1" placeholder="name@example.com" />
    <div className='absolute right-0 top-0 bg-peechColor h-full'>
       <FontAwesomeIcon icon={faSearch} className='p-2'/>
    </div>
</div>



                    <div>
                        country
                    </div>
                    <div>
                        account list
                    </div>
                    <div>
                        ordder
                    </div>
                    <div>
                        icon
                    </div>
                </div>
            </header>



        </>
    )
}
