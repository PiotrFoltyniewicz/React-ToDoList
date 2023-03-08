import React, { useState, useRef } from 'react'

function Item(props){
    const inputRef = useRef(null);

    function handleCheckItem(){
        props.handleCheck(props.itemId, !props.done);
        if(props.done) inputRef.current.checked = true;
        else inputRef.current.checked = false;
    }
    return (
        <div className={props.done ? 'List-item List-item-done': 'List-item'}>
            <p>{props.desc}</p>
            <div>
                <input ref={inputRef} onClick={handleCheckItem} type="checkbox" defaultChecked={props.done}/>
            </div>
        </div>
    )
}

export default Item;