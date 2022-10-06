import React,{useState} from "react";
import Greeting from "./Greeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import "./LoginControl.css";
import { useEffect } from "react";

function LoginControl(){
    const [myId,setId] = useState("");  //
    const onChange = (e) => {
        setId((myId)=>document.getElementById("myId").value);   // ID를 받아온다
    };
    const [isLoggedIn, setIsLoggedIn] = useState(false);    //isLoggedin 을 false로 설정
    const handleLoginClick = () => {setIsLoggedIn(true);};  // loginclick이 될때 true로 설정
    const handleLogoutClick = () => {setIsLoggedIn(false);};    //logoutclick이 될때 false로 설정

    
    const [count,setCount] = useState(0);   // 버튼이 눌린 횟수를 세기 위한 count
    const countUp = () => setCount(count+1);    // 눌릴때마다 count+1
    useEffect(()=>{
        console.log(`버튼클릭횟수: ${count},로그인 상태: ${isLoggedIn}`)
    })
    let button;

    if(isLoggedIn) {
        button = <LogoutButton onClick={()=>{handleLogoutClick(); countUp();}} />;
    }
    else {
        button = <LoginButton onClick={() => {handleLoginClick(); countUp();}} />;
    }

    return (
        <div>
            <div className="login">
                ID:{""}
                <input onChange={onChange} value={myId} id="myID" size="12" maxLength="12" />{""}
                <Greeting isLoggedIn = {isLoggedIn} />
                {button}
            </div>
            <span>{myId}</span>
        </div>
        
    );
}

export default LoginControl;