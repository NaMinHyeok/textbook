import React, { useState,useEffect } from "react";
// useState() state변수를 사용 할 수 있도록 하는 함수
// useEffect() 컴포넌트의 렌더링이 끝난 후, 코드를 실행 할 수 있도록 해주는 함수
// useMemo() 이전 결과값을 리턴해서 연산량을 줄여주어 성능을 최적화해주는 함수
// useCallback() 불필요한 재렌더링을 줄여주어, 성능을 최적화 해주는 함수
// useRef() 특정 컴포넌트에 접근할 수 있는 객체를 사용할 수 있도록 해주는 함수
// useRef와 useState의 차이는 useRef는 재렌더링을 하지 않고 useState는 변수가 바뀔때마다 렌더링을 한다.
function YourCounter(){
    const [count, setCount] = useState(0);

    const incrementCount = () => setCount(count+1);

    useEffect(()=>{
        document.title = `You clicked ${count} times`;
        console.log("useEffect함수: "+count + "-th Click");
    });

    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={incrementCount} >Click me</button>
        </div>
    )
}

export default YourCounter;