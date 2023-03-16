import React from "react";
import Task from './Task';

export default function ToDoList(props){

    
    function callChange(id){
        props.handleChange(id);
    }

    return (
            <ul className='To-do-list'>
                {props.filter === true
                ? props.taskList.filter((item) => item.state === false).map((item) => <Task id={item.id} description={item.description} state={false} handleChange={callChange}/>)
                : props.taskList.map((item) => <Task id={item.id} description={item.description} state={item.state} handleChange={callChange}/>)}
            </ul>
    );
}
