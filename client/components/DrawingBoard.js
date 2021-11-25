import {useState, useEffect, useRef} from 'react';
import React from 'react'
import Canvas from './Canvas';



function DrawingBoard(){
    return(
        <div>
            <img src="https://www.miltonandking.com/au/wp-content/uploads/sites/2/2018/12/Wallpaper-Republic-Tipografia-1-4.jpg" id="bg" />
            <Canvas/>
        </div>
    )
}

export default DrawingBoard;
