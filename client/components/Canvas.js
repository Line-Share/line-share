import React, {useRef, useState, useEffect, useCallback} from 'react'
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
    const [selectedWidth, setSelectedWidth] = useState(widths[0]);
    const [mouseDown, setMouseDown] = useState(false);
    const [lastPosition, setPosition] = useState({
        x: 0,
        y: 0
    })

    useEffect(()=> {
        if (canvasRef.current){
            ctx.current = canvasRef.current.getContext('2d');
        }
    }, []) 
    
    const draw = useCallback((x, y) => {
        if (onMouseDown){
            ctx.current.beginPath();
            ctx.current.strokeStyle = selectedColor;
            ctx.current.lineWidth = selectedWidth;
            ctx.current.lineJoin = 'round';
            ctx.current.moveTo(lastPosition.x, lastPosition.y);
            ctx.current.lineTo(x, y);
            ctx.current.closePath();
            ctx.current.stroke(); 

            setPosition({
                x, 
                y
            })

        }
    }, [lastPosition, mouseDown, setSelectedColor, selectedWidth, setPosition])

    const onMouseDown = (e) =>
    {
        setPosition({
            x: e.pageX,
            y: e.PageY
        })
        setMouseDown(true);
    }

    const onMouseUp = (e) =>
    {
        setMouseDown(false);
    }
    const onMouseLeave = (e) =>
    {
        setMouseDown(false);
    }
    
    console.log(mouseDown, lastPosition);

    const onMouseMove = (e) => {
        draw(e.pageX, e.pageY);
    }
   
    
    return  (
    <div>
        
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

        <select 
        value = {selectedWidth} 
        onChange = {(e) => 
        setSelectedWidth(e.target.value)}>
        widths.map(
            width = <option value ={width}>{width}</option>
        ) 
        </select>
        
        
        <button>Clear</button>
        <button>Post</button>
        <button>Save to Drafts</button>


    </div>
)

}

export default Canvas;

