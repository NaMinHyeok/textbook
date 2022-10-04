import React from "react";
import Movie from "./Movie.jsx";

const movies = [
    // image는 영화 이미지의 소스
    // color는 text가 들어갈부분의 background-color
    // title은 영화의 제목
    // year는 영화 상영 연도
    // genre는 영화의 장르
    // description 은 영화 소개글 부분을 따왔다.
    // 모든정보는 https://www.themoviedb.org/tv/110356?language=ko 에서 가져옴
    {
        image:"./myname_img.jpg",
        color:"#AB2929",
        title:"마이네임",
        year:2021,
        genre:"범죄,드라마",
        description:"아빠를 잃었다. 그것도 바로 눈앞에서. 남은 딸은 결심한다. 반드시 내 손으로 복수하겠노라고. 목표를 위해서라면 방법은 상관없다. 마약 조직의 언더커버가 되어 경찰에 잠입하는 것이라 해도.",

    },
    {
        image:"./paul_img.jpg",
        color:"#432D2D",
        title:"폴: 600미터",
        year:2022,
        genre:"스릴러",
        description:"내려갈 길이 끊겨버린 600미터 TV 타워 위에서 두 명의 친구가 살아남기 위해 펼치는 사상 최초의 고공 서바이벌        "
    },
    {
        image:"./ofun_img.jpg",
        color:"#D89090",
        title:"오펀: 천사의 탄생",
        year:2021,
        genre:"공포,스릴러",
        description:
        "엄청난 비밀을 숨긴 사이코패스가 에스토니아의 정신병동을 탈출 부유한 가족의 실종된 딸 ‘에스더’로 사칭해 미국에 온다. 재회의 기쁨도 잠시, 어딘지 낯선 딸의 정체를 눈치챈 엄마는 가족을 지키기 위해 에스더와 맞서는데... 누구도 상상 못한 충격적인 반전이 기다린다!",
    },
    {
        image:"./godfather_img.jpg",
        color:"#696262",
        title:"대부",
        year:1972,
        genre:"드라마,범죄",
        description:"시실리에서 이민온 뒤, 정치권까지 영향력을 미치는 거물로 자리잡은 돈 꼴레오네는 갖가지 고민을 호소하는 사람들의 문제를 해결해주며 대부라 불리운다. 한편 솔로소라는 인물은 꼴레오네가와 라이벌인 탓타리아 패밀리와 손잡고 새로운 마약 사업을 제안한다. 돈 꼴레오네가 마약 사업에 참여하지 않기로 하자, 돈 꼴레오네를 저격해 그는 중상을 입고 사경을 헤매게 된다. 그 뒤, 돈 꼴레오네의 아들 소니는 조직력을 총 동원해 다른 패밀리들과 피를 부르는 전쟁을 시작하는데... 가족의 사업과 상관없이 대학에 진학한 뒤 인텔리로 지내왔던 막내 아들 마이클은 아버지가 총격을 당한 뒤, 아버지를 구하기 위해 위험천만한 협상 자리에 나선다."
    },

]

function MovieList(){
    return (
        <div>
                {movies.map((movie)=>{
                    return <Movie 
                    image={movie.image} color={movie.color} title={movie.title} year={movie.year} genre={movie.genre} description={movie.description}/>
                })
                }
        </div>
    );
}

export default MovieList;