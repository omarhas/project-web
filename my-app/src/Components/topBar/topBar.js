import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import './topBar.css';

export default function TopBar() {
  return (
  //  <div className='topbar'>
    //    <div className='topbarWrapper'>
            <div className='topleft ma4 mt0 pa4'>
                <Tilt className="Tilt br2 shadow-2"  options={{ max : 50, reset: false }} style={{ height: 130, width: 130 }} >
                    <div className="Tilt-inner p3"> 
                        <img  />
                    </div>
                </Tilt>
            </div>
       //     <div className='topRight'>right</div>
        //</div>
   // </div>
  )
}
