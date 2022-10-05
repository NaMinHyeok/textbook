import React,{useState, useEffect} from "react";
function Toggle(props){
    const [isToggleOn, setlsToggle] = useState(true);
    
    const [count, setCount] = useState(0);  // count를 이용해 useState변수를 0으로 설정
    const countUp = () => setCount(count+1);    // countUp함수가 호출 될 때마다 count변수를 +1 한다.

    useEffect(()=>{
        console.log(`count: ${count}`); //useEffect를 이용해 렌더링이 될때 마다 console에 카운트가 되는 것을 표시 
    })

    function handleClick(){
        setlsToggle((isToggleOn)=>!isToggleOn);
        console.log("토글상태: ",isToggleOn);

    }

    //버튼이 클릭했을때 countUp과 handleClick모두 작동하게 한다.    
    return <button onClick={()=>{countUp();handleClick();}}>
                {isToggleOn ? "클릭A" : "클릭B"}    
            </button>;
}

export default Toggle;