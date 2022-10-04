import React,{useState} from "react";
function Toggle(props){
    const [isToggleOn, setlsToggle] = useState(true);

    function handleClick(){
        setlsToggle((isToggleOn)=>!isToggleOn);
        console.log("토글상태: ",isToggleOn);
    }

    return <button onClick={handleClick}>
                {isToggleOn ? "클릭A" : "클릭B"}
            </button>;
}

export default Toggle;