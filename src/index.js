import React from "react"
import  ReactDOM  from "react-dom/client"
import './index.css'
import App from "./chapter_11/Dialog";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // stricMode 애플리케이션 내의 잠재적인 문제를 알아 내기 위한 도구
    <React.StrictMode> 
        <App />
    </React.StrictMode>
);