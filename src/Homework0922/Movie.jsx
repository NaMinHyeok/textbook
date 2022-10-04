import React from "react";
import "./Movie.css";

function Movie(props){
    return (
        <div className="wrapper"> {/* 한 영화마다 알맞게 스타일 될 수 있도록 전체를 감싸는 div를 구성 */}
            <div className="header">무비스토리</div>    {/* 다른 영화 소개글마다 있을 수 있도록 header로 만들어서 넣어줌 */}
            <div className="content_wrapper">   {/* 영화에 대한 사진,제목,상영연도,소개글 등이 들어갈 전체 div */}
                <img src={props.image} alt={props.title} className="title_image"></img> {/* 이미지의 src는 props를 이용해 가져온다. alt를 안쓰면 warning이 뜸 그래도 실행은 되지만 되도록이면 안뜨게 사진에 대한 이름을 붙여주자 */}
                <div className="text_area" style={{backgroundColor: props.color}}>{/* backgorund-color를 props로 설정 이때 background-color만 props로 가져오기 때문에 css도 classname을 이용해 설정해준다. */}
                    <span className="movie_title">{props.title}</span>
                    <span className="movie_year">{props.year}</span>
                    <div className="movie_genre">{props.genre}</div>
                    <div className="movie_description">{props.description}</div>
                </div>
            </div>
        </div>
    )
}

export default Movie;