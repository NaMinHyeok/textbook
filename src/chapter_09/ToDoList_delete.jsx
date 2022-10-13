import React from "react";
import { useState } from "react";
import './ToDoList.css';

function ToDoList_delete(){
    const [inputItem,setInputItem] = useState("");
    const [itemList, setItemList] = useState([
        {id:1,value:'리액트듣기'},
        {id:2,value:'점심먹기'},
        {id:3,value:'과제하기'},
    ])
    const AddToDoList = () => {
        setItemList((prevItem) => {
            console.log(itemList.length+1,inputItem);
            return [
                {
                    id: itemList.length+1,
                    value: inputItem,
                },
                prevItem,
            ]
        });
        setInputItem("")
    }
    const DeleteToDoList = (id) => {
        setItemList((itemList)=>itemList.filter((itemList)=>itemList.id !== id));
        console.log(itemList);
    }
    return (
        <div className="container">
            <h1>To-Do List</h1>
            <div className="add-elements">
                <input id="add" value={inputItem} onChange={(event)=>setInputItem(event.target.value)}/>
                <button id="btn" onClick={AddToDoList}>할일추가</button>
            </div>
            <div id="element-list">
                <ul id="list">
                    {itemList.map((item)=>{return <li key={item.id}>{item.value}<img src="delete.png" onClick={()=>DeleteToDoList(item.id)} alt="trash"></img></li>})}
                </ul>
            </div>
        </div>
    )
}

export default ToDoList_delete;