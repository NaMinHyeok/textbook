import React from "react"
import  ReactDOM  from "react-dom/client"
import './index.css'
import NumberList from "./chapter_09/NumberList";

const numbers = [1,2,3,4,5];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <NumberList numbers={numbers}/>
    </div>
);