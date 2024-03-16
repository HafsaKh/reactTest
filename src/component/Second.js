import { useNavigate } from "react-router-dom";

export default function Second (){
    const navigate = useNavigate();
    return (
        <div>
            <h1>KHALLOUKI</h1>
            <a className="nav-linkk" onClick={()=>navigate('/')} >Home</a>
        </div>
    )
}