import { useNavigate } from "react-router-dom";
import './SecondRouter.css'

function NotFound(){
    const navigate = useNavigate();

    setTimeout(()=>{navigate("/");},1000);

    return (
        <div className="error">
            NOT FOUND 페이지입니다
        </div>
    )
}

export default NotFound;