import { AlphaPicker, CompactPicker, HuePicker, PhotoshopPicker, SketchPicker, SliderPicker } from 'react-color';
import {useState, useLayoutEffect, useEffect, useRef} from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import Header from './Header';

const styles = {
    border: '0.0625rem solid #9c9c9c',
    borderRadius: '0.25rem',
  };
  const widths = [1, 10, 20, 30, 40, 50, 70, 100, 150, 200]



function DrawingBoard(){
    const canvasRef = useRef(null);
    const [selectedColor, setSelectedColor] = useState('#ff0000');
    const [selectedWidth, setSelectedWidth] = useState(widths[0]);

    const eraser = () => (
        setSelectedColor("white")
    )


    return(
        <div className = 'container' style = {{textAlign: "center"}}>
            <Header title = 'Line Share'/>
            {/* <Canvas/> */}
            <ReactSketchCanvas
                style={styles}
                width= {1500}
                height= {1000}
                strokeWidth={selectedWidth}
                strokeColor= {selectedColor}
                eraserWidth= {selectedWidth}
                ref = {canvasRef}
    />

            <SketchPicker
                color = {selectedColor}
                width = {500}
                onChangeComplete = {(selectedColor) => {setSelectedColor(selectedColor.hex)}}
                />
            
            <select
                value = {selectedWidth}
                onChange = {(e) =>
                 setSelectedWidth(e.target.value)}>
                {widths.map(
                    (width) => <option key={width} value ={width}>{width}</option>
                )}
            </select>

            <button 
            onClick = {eraser}>
           <FontAwesomeIcon icon={faEraser} />
            </button>
            
            </div>
    )
}

export default DrawingBoard;
