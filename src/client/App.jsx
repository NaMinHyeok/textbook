import React,{useState,useEffect} from "react";
import './App.css';

const serverURL = "http://localhost:65020/users";

function App(){
    const[userData,setUserData] = useState(null);
    const[validation,setValidation] = useState(null);

    const getUserData = () => {
        fetch(serverURL)                    //fetch함수를 이용해 REST API로 회원목록을 요청
        .then((res)=>res.json())              //회원목록을 json 포맷으로 수신
        .then((data)=>setUserData(data))
        .then(console.log(userData))
    }

    useEffect(getUserData,[]);

    const onSubmitHandler = (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const id = event.target.id.value;
        const passwd = event.target.passwd.value;
        console.log("Submit버튼 클릭후 서버로 POST 전송");

        fetch(serverURL, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({name,id,passwd}),
        })
        .then(getUserData())
    }
    const onSubmitHandler_Check = (event) => {
        event.preventDefault();
        const id = event.target.id.value;
        const passwd = event.target.passwd.value;
        const result = userData.filter((data)=>(data.id===id && data.passwd === passwd));
        console.log(result);
        if(result.length != 1){
            setValidation(false)
        }
        else{
            setValidation(true);
        }
    }
    return ( 
        < >
            <div>
                <h2> 회원등록 </h2>
                <form onSubmit={onSubmitHandler}>
                    <input type="text" name="name" placeholder="이름" />
                    <input type="text" name="id" placeholder="아이디" />
                    <input type="text" name="passwd" placeholder="암호" />
                    <button type="submit"> 등록 </button>
                </form>
            </div>
            <div>
                <h2>회원확인</h2>


                <form onSubmit={onSubmitHandler_Check}>
                    <input type="text" name="id" placeholder="아이디" />
                    <input type="text" name="passwd" placeholder="비밀번호" />
                    <button type="submit">확인</button>
                    {validation===null ?<p></p> :( validation ?(<p>회원으로 확인되었습니다.</p>):(<p>그런회원은없습니다.</p>))}
                </form>
            </div>

            <p> </p> 
            <div>
                <h2> 회원목록 </h2>
                <ol>
                {(userData == null)?(
                    <p>서버에서 데이터를 가져오는 중...</p>
                ):(
                    userData.map((user, i)=>(
                        <li key={user.keyid}>{user.name}{user.id}{user.passwd}</li>
                    ))
                )}
                </ol>
            </div>
        </>
    )
}

export default App;