import React from "react";
import "./City.css";

// const styles={
//     wrapper:{
//         display:"flex",
//         flexDirection:"column",
//         width: "100vw",
//         height: "100vh",
//     },
//     title_image:{
//         width:"100vw",
//         height:"50vh",
//         justifyContent:"center",
//         margin:"0px",
        
//     },
//     text_area:{
//         display:"flex",
//         flexDirection:"column",
//         height:"50vh",
//         width:"100vw",
//     },
//     city_title:{
//         fontsize: "2rem",
//         fontWeight:"bold",
//         color:"white",
//     }
//     ,
//     city_distance:{
//         fontsize:"1rem",
//         color:"white",
//     }
// }

function City(props){
    return (
        <div className="wrapper">
            <img src={props.image} alt={props.title} className="title_image"></img>
            <div className="text_area" style={{backgroundColor: props.color}}>  
                <h1 className="city_title">{props.title}</h1>
                <p className="city_distance">{props.distance}km 거리</p>
            </div>
        </div>
    )
}

export default City;