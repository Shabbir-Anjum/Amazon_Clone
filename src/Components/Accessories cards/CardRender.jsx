import React from 'react'

export default function CardRender({CardData}) {
  return (
    <>
      {CardData.map((value, index) => ( 
        <div key={value.id} className='bg-white p-4 z-50'>
          <h2 className=' font-Roboto text-xs md:text-sm font-bold py-1'>{value.cardName}</h2>
          {value.data.length === 3 && (
            <div className='full-width p-1'>
              <img src={value.data[2].src} alt="error" />
              <p className='text-xs md:text-sm'>{value.data[2].name}</p>
            </div>
          )} 
          {value.data.length === 1 ? (
            <div className='full-width p-1'>
              <img src={value.data[0].src} alt="error" />
              <p className='text-xs md:text-sm'>{value.data[0].name}</p>
            </div>
          ) : (
            <div className='grid grid-cols-2 gap-3'>
               {value.data.length <4 && value.data.slice(0, 2).map((item, itemIndex) => (
                <div className='p-1' key={itemIndex}>
                  <img src={item.src} alt="error" />
                  <p className='text-xs md:text-sm'>{item.name}</p>
                </div>
              ))}
              {value.data.length === 4 && value.data.slice(0, 4).map((item, itemIndex) => (
                <div className='p-1' key={itemIndex}>
                  <img src={item.src} alt="error" />
                  <p className='text-xs md:text-sm'>{item.name}</p>
                </div>
              ))}
            </div>
          )}
          
          <a href="#" className=' text-blue-500 text-xs font-Roboto font-bold'>See More</a>
        </div>
      ))}
    </>
  )
}
