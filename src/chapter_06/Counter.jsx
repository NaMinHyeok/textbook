import React, {useState} from "react";

const Counter = () => {
    // useState state변수로 state변수를 변경하고 싶으면 setState를 이용
    const [count, setState] = useState(0);

    const onIncrease = () => {
        setState((count)=>count+1);
    };

    return (
        <div>
            <h2>카운터 값: {count}</h2>
            <hr />
            <button onClick={onIncrease}>♥</button>
        </div>
    );
};

export default Counter;