import React, {useState} from "react";

const GoodBad = () =>{
    const [good, setGood] = useState(0);
    const [bad, setbad] = useState(0);

    const onIncrease = () =>{
        setGood((good) =>good+1);
    };

    const onDecrease = () =>{
        setbad((bad)=>bad+1);
    };

    return (
        <div>
            <h2>
                <button onClick={onIncrease}>
                    <img src="good.png" width="30px" heigth="30px" alt="good" />
                </button> {" "}
                {good} {" "}
                <button onClick={onDecrease}>
                    <img src="bad.png" width="30px" height="30px" alt="bad" />
                </button> {" "}
                {bad}
            </h2>
        </div>
    );
};

export default GoodBad;