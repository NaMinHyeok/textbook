import React from "react"
import  ReactDOM  from "react-dom/client"
import './index.css'
import LoginComponent from "./components/Login/LoginComponent";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div className={`app app--islogin`}>
        <LoginComponent 
            onSubmit={ () => {console.log("submit"); }}
        />
    </div>
);