import React from "react";
import City from "./City.jsx";

const citys = [
    {
        image:"./seoul.jpg",
        color:"#de3151",
        title:"서울",
        distance:2
    },
    {
        image:"./incheon.jpg",
        color:"#cc2d4a",
        title:"인천",
        distance:29
    },
    {
        image:"./daegu.jpg",
        color:"#d93b30",
        title:"대구",
        distance:237
    },
    {
        image:"./daegeon.jpg",
        color:"#bc1a6e",
        title:"대전",
        distance:140
    },
]

function CityList(){
    return (
        <div>
            { citys.map((city)=>{
                return <City image={city.image} color={city.color} title={city.title} distance={city.distance} />
            })
            }
        </div>
    );
}

export default CityList;