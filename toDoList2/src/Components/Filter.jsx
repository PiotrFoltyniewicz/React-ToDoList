import React from "react";

export default function Filter(props){
    return (
            <label>
                <input type='checkbox' onChange={props.handleChangeFilter}/>
                Ukryj wykonane zadania
            </label>
    );
}