import React from 'react';


import CardRender from './CardRender';
import CardData from './CardData';
import CardData2 from './CardData2';

export default function Accessories_Cards() {
  return (
    <>
    
    <div className="grid grid-cols-4 gap-4 bg-gradient-to-b from-transparent to-moonColor p-4">
      <CardRender CardData={CardData}/>
    </div>
    <div className="grid grid-cols-4 gap-4  bg-moonColor p-4">
      <CardRender CardData={CardData2}/>
    </div>
  
    </>
  );
}

