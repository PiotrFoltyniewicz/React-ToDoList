import React from "react";

export default function Task(props){
    

    function handleClick(){
        props.handleChange(props.id)
    }
    return (
            <li className={props.state ? 'Task  Task-done' : 'Task'}>
                <input type='checkbox' onChange={handleClick} checked={props.state}/>
                <p>{props.description}</p>
            </li>
    );
}