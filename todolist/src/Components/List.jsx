import React from 'react'
import Item from './Item'
import {useRef, useState} from 'react';

export const items =[]

function List(){
    const inputRef = useRef(null);

    const [itemsToDo, setItemsToDo] = useState(null);
    const [itemsDone, setItemsDone] = useState(null);


    function handleClick(){
        items.push({itemId: Math.floor(Math.random() * 352151), desc: inputRef.current.value, done: false});
        inputRef.current.value = '';
        setItemsToDo(items.filter(item => item.done === false).map((item, index) =>
            <Item itemId={item.itemId} key={index} desc={item.desc} done={item.done} handleCheck={handleCheck}/>
            ));
    }

    function handleCheck(id, status){
        let tempItems = items;
        tempItems = tempItems.map(item =>{
            if(item.itemId === id){
                item.done = status;
            }
            return item;
        })
        
        setItemsToDo(tempItems.filter(item => item.done === false).map((item, index) =>
            <Item itemId={item.itemId} key={index} desc={item.desc} done={false} handleCheck={handleCheck}/>
            ));
        setItemsDone(tempItems.filter(item => item.done === true).map((item, index) =>
            <Item itemId={item.itemId} key={index} desc={item.desc} done={true} handleCheck={handleCheck} defaultChecked='checked'/>
            ));  
    }

    return (
        <div id="Wrapper">
            <div className='Form'>
                <h3>Dodaj zadanie</h3>
                <div>
                    <input ref={inputRef} type='text' id='Desc-input' placeholder='Podaj opis zadania'/>
                    <button onClick={handleClick}>Dodaj do listy</button>
                </div>
            </div>
            <div className='List'>
                <div className='List-column1 List-column'>
                    <h2>Zadania do wykonania</h2>
                    {itemsToDo}
                </div>
                <div className='List-column2 List-column'>
                    <h2>Zadania zrobione</h2>
                    {itemsDone}
                </div>
            </div>
        </div>
    )
}


export default List;