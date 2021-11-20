import React, {useRef, useState, useEffect} from 'react'
import { CleanPlugin } from 'webpack';
const colors = [
    "black",
    "red", 
    "blue", 
    "green",
    "yellow",
    "orange",
    "brown",
    "pink",
    "purple"
]

const widths = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

const Canvas = ({width}, {height}) =>{
    const canvasRef = useRef(null);
    const ctx = useRef(null);
    const [selectedColor, setSelectedColor] = useState(colors[0]); 
    
    
    const draw = (x, y) => {
        if (onMouseDown){
            ctx.current.beginPath();
            ctx.current.strokStyle = selectedColor;
            ctx.current.lineWidth = 10;
            ctx.current.lineJoin = 'round';

        }
    }
    useEffect(()=> {
        if (canvasRef.current){
            ctx.current = canvasRef.current.getContext('2d');
        }
    }, [])
     
    return 
    (<div>
        
        
        
        <canvas 
        id = 'myCanvas' 
        style = {{border: '1px solid #000'}} 
        width = {600} 
        height = {360} 
        ref = {canvasRef}
        onMouseMove = {onMouseMove} 
        onMouseDown = {onMouseDown}
        onMouseUp = {onMouseUp}
        onMouseLeave = {onMouseLeave}


        />
        
        <br/>
        
        
        <select 
        value = {selectedColor} 
        onChange = {(e) => 
        setSelectedColor(e.target.value)}>
        colors.map(
            color = <option value ={color}>{color}</option>
        ) 
        </select>
        
        
        <button>Clear</button>
        <button>Post</button>
        <button>Save to Drafts</button>


    </div>
)

}

export default Canvas;
