import React from "react";
import { useRef } from "react";

export default function NewTask(props){

    const inputRef = useRef(null);
    
    function buttonClicked()
    {
        props.handleClick(inputRef.current.value);
        inputRef.current.value = '';
    }

    return (
        <label className='New-task-wrapper'>
            Dodaj nowe zadanie
            <div>
                <input ref={inputRef} type='text'/>
                <button onClick={buttonClicked}>Dodaj</button>
            </div>
        </label>
    );
}