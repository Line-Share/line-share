import React, {useRef, useState, useEffect, useCallback} from 'react';
import {SketchPicker} from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaintBrush, faEraser, faRotateLeft, faFillDrip} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux'
import { createPost, _getAllPosts } from '../redux/post'
import { withRouter } from 'react-router-dom';

const translateX = 5;
const translateY = 72;

let undo_array = [];
let undo_index = -1;
const widths = [1, 10, 15, 30, 40, 50, 75, 100, 150, 200]

const Canvas = ({ userInfo, createNewPost, clearPosts }) => {
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
    const [caption, setCaption] = useState('');


    useEffect(()=> {
        if (canvasRef.current){
            ctx.current = canvasRef.current.getContext('2d');
            ctx.current.translate(translateX, -translateY);
        }
        return function cleanup() {
            clearPosts()
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
        ctx.current.clearRect(-translateX, translateY, ctx.current.canvas.width, ctx.current.canvas.height);
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
        ctx.current.fillRect(-translateX, translateY, 1000, 700);

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

    const createImageUrl = () => {
        const url = canvasRef.current.toDataURL();
        return(url);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userInfo)
        createNewPost({imageUrl: createImageUrl(), caption: caption, userInfo: userInfo})
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

        {/* <select
        value = {selectedColor}
        onChange = {(e) =>
        setSelectedColor(e.target.value)}>
        {colors.map(
            (color) => <option key={color} value ={color}>{color}</option>
        )}
        </select> */}
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
            <form id="post-form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="caption" className="form-label h2">Caption</label>
                    <input name="caption" className="form-control" onChange={(e) => {setCaption(e.target.value)}} value={caption} />
                </div>
                <button type="submit" className="btn btn-info border border-dark">Post</button>
            </form>
        </div>
    </div>
)

}

const mapState = state => {
    return {
        userInfo: state.auth
    }
}

const mapDispatch = (dispatch, { history }) => {
    return{
        createNewPost: (post) => {
            dispatch(createPost(post, history))
        },
        clearPosts: () => {
            dispatch(_getAllPosts([]))
        }
    }
}

export default withRouter(connect(mapState, mapDispatch)(Canvas));

