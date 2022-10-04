import React,{useRef} from "react";

function MyLotto(){
    const numOfLotto = useRef(1);

    const handler = (str, event) => {
        console.log(numOfLotto.current.toString()+"회차"+str+event.target.value);
        numOfLotto.current = numOfLotto.current +1;
    };

    return (
        <button value="홍길동" onClick={(event)=>handler("당첨자:",event)}>
            당첨자확인
        </button>
    )
}

export default MyLotto;