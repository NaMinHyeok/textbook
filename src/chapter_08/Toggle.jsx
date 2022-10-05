import React,{useState, useEffect} from "react";
function Toggle(props){
    const [isToggleOn, setlsToggle] = useState(true);
    
    const [count, setCount] = useState(0);
    const countUp = () => setCount(count+1);

    useEffect(()=>{
        console.log(`count: ${count}`);
    })

    function handleClick(){
        setlsToggle((isToggleOn)=>!isToggleOn);
        console.log("토글상태: ",isToggleOn);

    }

    return <button onClick={()=>{countUp();handleClick();}}>
                {isToggleOn ? "클릭A" : "클릭B"}
            </button>;
}

export default Toggle;