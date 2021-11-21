import React, {useRef, useState, useEffect, useCallback} from 'react'
import ColorWheel from './ColorWheel';

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

const widths = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

const Canvas = () =>{
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
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        ctx.current = canvasRef.current.getContext('2d');
        ctx.current.scale(2, 2);
    }, [])

    const draw = useCallback((x, y) => {
        if (mouseDown){
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
    }, [lastPosition, mouseDown, selectedColor, selectedWidth, setPosition])

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

    console.log(mouseDown, lastPosition);

    const onMouseMove = (e) => {
        draw(e.pageX, e.pageY);
    }

    const clear = () => {
        ctx.current.clearRect(0,0, ctx.current.canvas.width, ctx.current.canvas.height);
    }


    return  (
    <div>

        <canvas
        id = 'myCanvas'
        style = {{border: '2px solid #000'}}
        // width = {400}
        // height = {400}
        ref = {canvasRef}
        onMouseDown = {onMouseDown}
        onMouseUp = {onMouseUp}
        onMouseLeave = {onMouseUp}
        onMouseMove = {onMouseMove}
        />
        <br/>

        <select
        value = {selectedColor}
        onChange = {(e) =>
        setSelectedColor(e.target.value)}>
        {colors.map(
            (color) => <option key={color} value ={color}>{color}</option>
        )}
        </select>

        <select
        value = {selectedWidth}
        onChange = {(e) =>
        setSelectedWidth(e.target.value)}>
        {widths.map(
            (width) => <option key={width} value ={width}>{width}</option>
        )}
        </select>


        <button onClick = {clear}>Clear</button>
        <br/>




    </div>
)

}

export default Canvas;

