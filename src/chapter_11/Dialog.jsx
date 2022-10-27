import React from "react";
import './Dialog.css'

function Border(props){
    return <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
    </div>
}

function Dialog(props){
    return (
        <Border color="blue">
            <h1 className="Dialog-title">{props.title}</h1>
            <p className="Dialog-message">{props.message}</p>
        </Border>
    );
}

function WelcomeDialog(props){
    return (
        <Dialog
            title="Welcome"
            message="Hello React"
        />
    );
}

export default WelcomeDialog;