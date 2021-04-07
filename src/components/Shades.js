import React ,{useState,useEffect,useRef}from 'react'
import Values from "values.js"; 
import isColor from "is-color";
import Shade from "./Shade";
const Shades = ({color}) => {
    const [shades, setShades]=useState([]);
    const audioRef = useRef();
    useEffect(()=>{
       if(isColor(color)){
        createShades();
       }
    },[color]);

    const createShades=()=>{
        const shades=new Values(color).shades(1);
        setShades(shades);
    };
   const onColorCopy=()=>{
       audioRef.current.play();
   };

    return (
        <div className="shades"> 
          <audio ref={audioRef} src={require("../assets/sound1.mp3")} />
            {
                shades.map((shade)=>
                   <Shade shade={shade} onColorCopy={onColorCopy}/> )
            }
        </div>
    )
}

export default Shades;
