import React from "react";

function NumberList(props){
    const {numbers} = props;

    const listItems = numbers.map((number)=><li key={number.toString()}>{number}</li>);
    const listItems2 = numbers.map((number, index) => <li key={index}>{number}</li>);

    return (
        <div>
            <ul>{listItems}</ul>
            <Seperator />
            <ul>{listItems2}</ul>
        </div>
    );
}
function Seperator(){
    return <hr></hr>;
}

export default NumberList;