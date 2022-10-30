import React from "react";
import './Dialog.css'


function Border(props){
    return <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
    </div>
}
function Dialog(props){
    return (
        <Border color="black">
            <div className={'navbar navbar-' + props.color}></div>
            <h1 className="Dialog-title">{props.title}</h1>
            <p className="Dialog-message">{props.message}</p>
            {props.boolean ? <button>{props.button}</button> : ''}
        </Border>
    );
}

function WelcomeDialog(props){
    return (
        <>
            <Dialog
                color="green"
                title="Welcome"
                message="Hello React"
                boolean="0"
                button="Join"
            />
        </>
    );
}

function ErrorDialog(props){
    return (
        <Dialog
            color="red"
            title="Error"
            message="This is ErrorDialog"
            boolean="true"
            button="backspace"
            />
    );
}

function NoticeDialog(props){
    return (
        <Dialog
            color="blue"
            title="Notice"
            message="this is Notice dialog"
            // boolean="false" 를 사용하면 button이 화면에 출력되면 안되는데 출력됨 아마도 true false를 인식하는게 아닌거같음..
            />
    );
}

function WarningDialog(props){
    return (
        <Dialog
            color="yellow"
            title="Warning"
            message="this is WarningDialog"
            />
    );
}

function App(){
    return (
        <>
            <WarningDialog/>
            <WelcomeDialog/>
            <ErrorDialog/>
            <NoticeDialog/>
        </>
    )
}

export default App;