import React from "react";
import {Products} from "./Products.js";
import "./TimeSale.css";


function getDeadline(endDate){
    let dead = new Date(endDate); /* 마감시간 설정 */
    let current = new Date();   /* 현재 시간을 current변수에 넣기 */
    let deadline = dead.getTime() - current.getTime();  // 남은 기한을 마감시간에서 현재시간을 빼서 계산
    let hour = Math.floor(deadline / (1000 * 60 * 60));     // 시간 계산
    let min = Math.floor((deadline % (1000 * 60 * 60)) / (1000 * 60));      // 분 계산
    let sec = Math.floor(((deadline % (1000 * 60 * 60)) % (1000 * 60)) / 1000); // 초 계산

    return hour.toString(10) + ":" + min.toString(10) + ":" + sec.toString(10);     // 몇시간 몇분 몇초 남았는지 반환한다.
}

function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="cardimg" alt="product"></img>
            <div className="cardbody">
                <h2 className="cardtime">{props.time} 마감예정!</h2>
                <h2 className="cardtitle">{props.title}</h2>
                <p className="carddescription">{props.description}</p>
                <h3 className="cardprice">
                    <del style={{color:"gray"}}>{props.oldprice}</del>{props.price}
                </h3>
                <span className="paybutton">
                <PayButton></PayButton>
                </span>
            </div>
        </div>
    );
}
// class Toggle extends React.Component {  //버튼만드는 컴포넌트 생성
//     constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};
//       // 콜백에서 this가 작동하기 위해 아래와 같이 바인딩 해준다.
//     this.handleClick = this.handleClick.bind(this);
//     }  
//     handleClick() {
//     this.setState(prevState => ({
//         isToggleOn: !prevState.isToggleOn
//     }));
//     }
//     render() {
//         return (
//         <button onClick={this.handleClick}>{this.state.isToggleOn ? '긴급구매' : '구매성공!!'}</button>   //버튼이 클릭 되어있을때 상태 변경   
//         );
//     }
// }
const e = React.createElement;

class PayButton extends React.Component {
    constructor(props){
        super(props);
        this.state = { liked: false};
    }
    render() {
        if (this.state.liked) {
            return "구매성공!!!";
        }
        return e(
            "button",
            {onClick:()=>this.setState({liked:true})},
            "긴급구매"
        );
    }
}
// function TimeSale(props) {
//     return (
//         <div className="wrapper">
//             <Card 
//                 img="myfile.jpg"
//                 time={getDeadline("2022-09-19 20:20:00")}
//                 title="시간한정 특가세일 1탄"
//                 description="갤럭시탭 S8 Ultra 14.6 WiFi 128GB 최첨단 파워풀한 S펜, 멀티윈도우, 고성능!"
//                 oldprice="1,280,000원"
//                 price="589,000원"
//             />
//             <Card 
//                 img="myfile2.jpg"
//                 time={getDeadline("2022-09-19 23:00:00")}
//                 title="시간한정 특가세일 2탄"
//                 description="BS-BT101 블루투스 헤드폰5.0 실감나는 풍부한 사운드"
//                 oldprice="350,000원"
//                 price="120,000원"
//             />
//         </div>
//     );
// }

function TimeSale(props) {
    return (
        <div className="wrapper">
            {
                Products.map((item,index)=>{    //map을 이용해서 products.js에 있는 항목들을 한번에 긁어온다.
                    return (
                        <Card
                            img={item.img}
                            time={getDeadline(item.time)}
                            title={item.time}
                            description={item.description}
                            oldprice={item.oldprice}
                            price={item.price}
                        />
                    );
                })
                }
        </div>
    )
}
export default TimeSale;