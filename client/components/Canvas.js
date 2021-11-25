import React, {useRef, useState, useEffect, useCallback} from 'react';
import {SketchPicker} from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaintBrush, faEraser, faRotateLeft, faFillDrip} from '@fortawesome/free-solid-svg-icons';


let undo_array = [];
let undo_index = -1;
const widths = [1, 10, 15, 30, 40, 50, 75, 100, 150, 200]


const Canvas = () =>{
    const canvasRef = useRef(null);
    const ctx = useRef(null);
    const [selectedColor, setSelectedColor] = useState('#ff0000');
    const [selectedWidth, setSelectedWidth] = useState(widths[0]);
    const [mouseDown, setMouseDown] = useState(false);
    const [lastPosition, setPosition] = useState({
        x: 0,
        y: 0
    })
    const [fillStatus, setFillStatus] = useState(false);
    const [brushStatus, setBrushStatus] = useState(true);
    const [prevColor, setPrevColor] = useState('#ff0000');


    useEffect(()=> {
        if (canvasRef.current){
            ctx.current = canvasRef.current.getContext('2d');
            ctx.current.translate(-9, -137);
        }
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
            y: e.pageY
        })
        setMouseDown(true);
        if(fillStatus === true) {
            console.log('fill status is true')
            fillCanvas();
        }
    }

    const onMouseUp = (e) => {
        setMouseDown(false);
        undo_array.push(ctx.current.getImageData(0, 0, 1000, 700));
        undo_index += 1;
        console.log(undo_array[undo_index]);
    }

    const onMouseLeave = (e) =>
    {
        setMouseDown(false);
    }

    console.log(mouseDown, lastPosition);

    const onMouseMove = (e) => {

        if(brushStatus === true ){
            draw(e.pageX, e.pageY);
        }
    }

    const clear = () => {
        ctx.current.clearRect(9, 137, ctx.current.canvas.width, ctx.current.canvas.height);
        undo_array = [];
        undo_index = -1;
    }
    const eraser = () => {
        if(selectedColor != '0x000000'){
            setPrevColor(selectedColor);
        }
        setSelectedColor("white")
        setFillStatus(false);
        setBrushStatus(true);
}

    const fillCanvas = () => {
        ctx.current.fillStyle = selectedColor;
        ctx.current.fillRect(9, 81, 1000, 700);

    }

    const undoDraw = () =>{
        if(undo_index <= 0){
            clear();
            undo_array.pop();
        }
        else{
            undo_index -= 1;
            undo_array.pop();
            ctx.current.putImageData(undo_array[undo_index], 0, 0);
        }
    }


    return  (
    <div id="c-container">

        <canvas
        className="col"
        id = 'myCanvas'
        style = {{border: '2px solid #000'}}
        width = '1000%'
        height = '700%'
        ref = {canvasRef}
        onMouseDown = {onMouseDown}
        onMouseUp = {onMouseUp}
        onMouseLeave = {onMouseLeave}
        onMouseMove = {onMouseMove}
        />
        <br/>

        <div id="controls">

            <SketchPicker
            color = {selectedColor}
            onChangeComplete = {(selectedColor) => {setSelectedColor(selectedColor.hex)}}
            />
            <div className="btn-group" role="controls" id="button-controls">
                <select className="form-select btn btn-light border border-dark"
                value = {selectedWidth}
                onChange = {(e) =>
                setSelectedWidth(e.target.value)}>
                {widths.map(
                    (width) => <option key={width} value ={width}>{width}</option>
                )}
                </select>


               
                <button className="btn btn-light btn-light border border-dark" onClick = {() => {setBrushStatus(true), setFillStatus (false), setSelectedColor(prevColor)}}><FontAwesomeIcon icon= {faPaintBrush} /></button>
                <button className="btn btn-light btn-light border border-dark" onClick = {() => {setFillStatus(true), setBrushStatus(false), setSelectedColor(prevColor)}}><FontAwesomeIcon icon= {faFillDrip} /></button>
                <button className="btn btn-light border border-dark" onClick = {eraser}><FontAwesomeIcon icon= {faEraser} /></button>
                <button className="btn btn-light btn-light border border-dark" onClick = {undoDraw}><FontAwesomeIcon icon= {faRotateLeft} /></button>
                <button className="btn btn-dark" onClick = {clear}>Clear</button>
            </div>
            <br/>
        </div>
    </div>
)

}

export default Canvas;

