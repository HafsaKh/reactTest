import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Home (){

    const fctn = () => {
        setBtn(5);
    }

    const navigate = useNavigate();

    const [btn , setBtn] = useState(0);

    useEffect(()=> {
        fctn();
    },[]);
    
    return (
        <div>
            <h1>HAFSA</h1>
            <a className="nav-linkk" onClick={()=>navigate('/second')} >Second</a>
            <button onClick={()=>setBtn(btn+1)} >{btn}</button>
        </div>
    )
}