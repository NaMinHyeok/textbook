import React from "react";

const students = [
    {id:1, name:"Inje"},
    {id:2, name:"Steve"},
    {id:3, name:"Tom"},
    {id:4, name:"Jerry"},
];

function AttendanceBook(){
    return (
        <ul>
            {students.map((student,index)=>{
                return <li key={studendt.id}>{student.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;