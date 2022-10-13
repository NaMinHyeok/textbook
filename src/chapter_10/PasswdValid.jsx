import React from "react";
import { useState,useEffect } from "react";
import './SignUp.css';

function PasswordValid(props){
    const [passwd,setPasswd] = useState("");
    const [passwdErr,setpasswdErr] = useState("");
    const [displayErr, setDisplayErr] = useState(false);

    const handleChangePasswd = (evnet) => {
        setPasswd(evnet.target.value)
    }

    const validationPassword = () => {
        if(passwd.length <4){
            console.log("비밀번호를 4자리 이상으로 만드시오. :",passwd.length);
            setpasswdErr(`비밀번호를 4자리 이상 만드시오.(현재: ${passwd.length}자리)`);
            setDisplayErr(true);
        }
        else {
            console.log("비밀번호 문자수가 정상입니다: ",passwd.length);
            setpasswdErr(``);
            setDisplayErr(false);
        }
    }
    useEffect(validationPassword,[passwd]);

    const handleSubmit = (event) => {
        alert(`비밀번호: ${passwd}`);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                비밀번호(최소4자 이상)
                <input type="password" value={passwd} onChange={handleChangePasswd} />
            </label>
            <br />
            {displayErr ? (<p style={{color:"red"}}>{passwdErr}</p>):(<></>)}
            <button type="submit">제출</button>
        </form>
    );
}

export default PasswordValid