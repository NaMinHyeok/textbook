import React from "react"
import  ReactDOM  from "react-dom/client"
import './index.css'
import Reservation from "./chapter_10/Reservation";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <div>
            <Reservation/>
        </div>
    </React.StrictMode>
);