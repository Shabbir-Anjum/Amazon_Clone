import React from 'react';


import CardRender from './CardRender';
import CardData from './CardData';
import CardData2 from './CardData2';

export default function Accessories_Cards() {
  return (
    <>
    
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  -mt-96 z-30 ">
      <CardRender CardData={CardData}/>
      <CardRender CardData={CardData2}/>
    </div>
    
  
    </>
  );
}

