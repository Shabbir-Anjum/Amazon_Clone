import { faFlag, faLanguage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
   return (
      <>
         <footer className=' '> 
         {/* top */}
            <div className=' w-full h-12 text-center  bg-gray-700 p-3  text-white font-bold '>
               Back to Top
            </div>
            {/* middle */}
            <div className=' bg-navColor '>
               <div className='grid grid-cols-2   p-8 text-xs md:text-sm md:grid-cols-4 gap-8 text-white container'>
                  <div>
                     <h3 className=' font-bold'> Get to Know Us</h3>
                     <ul className=' text-sm'>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>About Amazon</li>
                        <li>Investor Relations</li>

                     </ul>
                  </div>
                  <div>
                     <h3 className=' font-bold'>Get to Know Us</h3>
                     <ul className=' text-sm'>

                        <li>Careers</li>
                        <li>Blog</li>
                        <li>About Amazon</li>
                        <li>Investor Relations</li>

                     </ul>
                  </div>
                  <div>
                     <h3 className=' font-bold'>Get to Know Us</h3>
                     <ul className=' text-sm'>

                        <li>Careers</li>
                        <li>Blog</li>
                        <li>About Amazon</li>
                        <li>Investor Relations</li>

                     </ul>
                  </div>
                  <div>
                     <h3 className=' font-bold'>Get to Know Us</h3>
                     <ul className=' text-sm'>

                        <li>Careers</li>
                        <li>Blog</li>
                        <li>About Amazon</li>
                        <li>Investor Relations</li>

                     </ul>
                  </div>
               </div>
               <hr  />
               <div className="max-w-lg mx-auto flex justify-center gap-12 py-8 text-gray-300">
        <div>
          <a href="#">
            <img className="w-20 pt-2" src='../images/amazon_logo.png' alt="logoImage" />
          </a>
        </div>
        <div className="flex gap-2">
          <div className="flex gap-1 items-center justify-center border border-gray-500 px-8">
           <FontAwesomeIcon icon={faLanguage}/>
            <p>English</p>
          </div>
          <div className="flex gap-1 items-center justify-center border border-gray-500 px-8">
           <FontAwesomeIcon icon={faFlag}/>
            <p>Pakistan</p>
          </div>
        </div>
      </div>
      </div>
      {/* Bottom */} 
      <div className='bg-Hcolor'>
               <div className=' grid gap-8  container grid-cols-2 p-8 text-xs md:text-sm md:grid-cols-4 text-white'>
                  <div>
                     <h4 className=' font-bold'>Amazon Music</h4>

                     Stream millions
                     of songs
                  </div>
                  <div>
                     <h4 className=' font-bold'>Amazon Ads</h4>

                     Reach customers
                     wherever they
                     spend their time
                  </div>
                  <div>
                     <h4 className=' font-bold'> 6pm</h4>

                     Score deals
                     on fashion brands
                  </div>
                  <div>
                     <h4 className=' font-bold'>Amazon Music</h4>

                     Stream millions
                     of songs
                  </div>
                  <div>
                     <h4 className=' font-bold'>Amazon Ads</h4>

                     Reach customers
                     wherever they
                     spend their time
                  </div>
                  <div>
                     <h4 className=' font-bold'> 6pm</h4>

                     Score deals
                     on fashion brands
                  </div>
                  <div>
                     <h4 className=' font-bold'>Amazon Music</h4>

                     Stream millions
                     of songs
                  </div>
                  <div>
                     <h4 className=' font-bold'>Amazon Ads</h4>

                     Reach customers
                     wherever they
                     spend their time
                  </div>
                  <div>
                     <h4 className=' font-bold'> 6pm</h4>

                     Score deals
                     on fashion brands
                  </div>
                  <div>
                     <h4 className=' font-bold'>Amazon Music</h4>

                     Stream millions
                     of songs
                  </div>
                  <div>
                     <h4 className=' font-bold'>Amazon Ads</h4>

                     Reach customers
                     wherever they
                     spend their time
                  </div>
                  <div>
                     <h4 className=' font-bold'> 6pm</h4>

                     Score deals
                     on fashion brands
                  </div>
                  <div>
                     <h4 className=' font-bold'>Amazon Music</h4>

                     Stream millions
                     of songs
                  </div>
                  <div>
                     <h4 className=' font-bold'>Amazon Ads</h4>

                     Reach customers
                     wherever they
                     spend their time
                  </div>
                  <div>
                     <h4 className=' font-bold'> 6pm</h4>

                     Score deals
                     on fashion brands
                  </div>
                  <div>
                     <h4 className=' font-bold'>Amazon Ads</h4>

                     Reach customers
                     wherever they
                     spend their time
                  </div>
               </div>
               </div>
           
         </footer>
      </>
   )
}
