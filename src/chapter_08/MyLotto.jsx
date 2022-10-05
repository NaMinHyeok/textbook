import React,{useRef,useEffect} from "react";

function MyLotto(){
    const numOfLotto = useRef(1);

    const handler = (str, event) => {
        console.log(numOfLotto.current.toString()+"회차"+str+event.target.value);
        alert(numOfLotto.current.toString()+"회차"+str+event.target.value); // 콘솔에 나오는 결과를 alert에도 동일하게 나오게 만든다.
        numOfLotto.current = numOfLotto.current +1;
    };
    useEffect(()=>{ // 렌더링 될 때 예 useEffect(()=>{});
        console.log(">>>렌더링되었습니다 !!!"); // 렌더링 될때 useEffect() 사용
    });
    useEffect(()=>{
        console.log(">>> 마운트 되었습니다!!!");        // 마운트 될때
        return () => {console.log(">>> 언마운트 되었습니다!!!");}   // 언마운트 될때
    },[]);      // 마운트 될때 사용 예 useEffect(()=>{},[]);

    return (
        <button value="홍길동" onClick={(event)=>handler("당첨자:",event)}>
            당첨자확인
        </button>
    )
}

export default MyLotto;